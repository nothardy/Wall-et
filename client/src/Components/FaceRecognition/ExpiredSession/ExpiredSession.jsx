import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as faceapi from "face-api.js";
//import Webcam from "react-webcam"
import es from "./ExpiredSession.module.css";
import { getFaceDescriptor, isTokenExpired } from "../../../Redux/Actions/FaceRecognition_Action";
import { getDateUser } from "../../../Redux/Actions/Home";
import swal from "sweetalert";

function ExpiredSession() {
    const dispatch = useDispatch();
	const history = useHistory();
	let userFace = useSelector((store) => store.faceReducer.faceDescriptor);
	let expiredToken = useSelector((store) => store.faceReducer.expiredToken)
	const videoHeight = 480;
	const videoWidth = 640;
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [initializing, setInitializing] = useState(false);
	const [faceDetections, setFaceDetections] = useState([]);
	const [updateFaceDetection, setUpdateFaceDetection] = useState(false);
	const [isUser, setIsUser] = useState(false);
	// const arrayfloated = new Float32Array(userFace);
	useEffect(() => {
		if (updateFaceDetection === true) {
			dispatch(getFaceDescriptor())
			dispatch(getDateUser());
			setUpdateFaceDetection(false);
		}
		const loadModels = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "/models";
			setInitializing(true);
			dispatch(getFaceDescriptor());
            dispatch(isTokenExpired())
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
				faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
				faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
				faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
			]).then(startVideo);
		};
		loadModels();
	}, [updateFaceDetection]);

	const startVideo = () => {
		navigator.getUserMedia(
			{
				video: {},
			},
			(stream) => (webcamRef.current.srcObject = stream),
			(err) => console.error(err)
		);
	};

	const handleVideoOnPlay = () => {
		setInterval(async () => {
			if (initializing) {
				setInitializing(false);
			}
			try {
				canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
					webcamRef.current
				);
				const displaySize = { width: 640, height: 480 };
				//console.log(displaySize)
				faceapi.matchDimensions(canvasRef.current, displaySize);
				const detections = await faceapi
					.detectSingleFace(
						webcamRef.current,
						new faceapi.TinyFaceDetectorOptions()
					)
					.withFaceLandmarks()
					.withFaceDescriptor();
				const resizedDetections = faceapi.resizeResults(
					detections,
					displaySize
				);
				canvasRef.current.getContext("2d").clearRect(0, 0, 640, 480);
				faceapi.draw.drawDetections(
					canvasRef.current,
					resizedDetections
				);
				faceapi.draw.drawFaceLandmarks(
					canvasRef.current,
					resizedDetections
				);
			} catch (error) {
				//console.log("shit");
			}
		}, 100);
	};

	const checkFace = async () => {
		if (Object.entries(userFace).length === 0 || !userFace) return swal(
			"There is no face data",
			"You must capture your first face",
			"error")
		await faceCapture();

		userFace = userFace.map(
			(element) => new Float32Array(Object.values(element))
		);

		console.log("face detectiosn=>", faceDetections);
		console.log("user face =>", userFace);

		if (faceDetections.length === userFace.length) {
			let faceCheck = [];
			let faceCheckAverage = 0;
			for (let i = 0; i <= 9; i++) {
				faceCheck.push(
					faceapi.euclideanDistance(faceDetections[i], userFace[i])
				);
				faceCheckAverage = faceCheckAverage + faceCheck[i];
			}
			faceCheckAverage = faceCheckAverage / 10;

			if (faceCheckAverage <= 0.45) {
				setIsUser(true); swal(
					`You are authenticated`, //No funciona todavia
					"You clicked the button!",
					"success"
				)
			}
			else {
				setFaceDetections([]);
				swal(
					"We could not check your face.",
					"Please try again.",
					"error")
			};
			console.log("facecheck =>", faceCheckAverage);
		} else {
			console.log("faceDetections length:", faceDetections.length);
			console.log("userFace length:", userFace.length);
		}
	};

	const faceCapture = async () => {
		while (faceDetections.length < 10) {
			try {
				console.log("entre");
				canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
					webcamRef.current
				);
				const displaySize = { width: 640, height: 480 };
				faceapi.matchDimensions(canvasRef.current, displaySize);
				const detections = await faceapi
					.detectSingleFace(
						webcamRef.current,
						new faceapi.TinyFaceDetectorOptions()
					)
					.withFaceLandmarks()
					.withFaceDescriptor();
				faceDetections.push(detections.descriptor);
			} catch (error) {
				//swal("Face not captured", "Try again!", "error");
				console.log("salto error");
			}
			console.log(faceDetections.length);
		}
	};


    return (
        <div>
            {console.log(faceDetections,"ayudaaaaaaa")}
            {console.log(expiredToken)}
            Your session has expired, please login again.
            <span>{initializing ? "Initializing" : "Ready"}</span>
			<div className={es.videoandCanvas}>
				<video
					ref={webcamRef}
					autoPlay
					muted
					height={videoHeight}
					width={videoWidth}
					onPlay={handleVideoOnPlay}
				/>
				<canvas ref={canvasRef} className={es.canvasFace} />
			</div>
			{!initializing && <button onClick={checkFace}>Check Face</button>}
			{isUser === true ? "AUTHENTICATED!" : "NOT AUTHENTICATED"}
        </div>
    )
}

export default ExpiredSession
