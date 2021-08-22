import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as faceapi from "face-api.js";
//import Webcam from "react-webcam"
import fr from "./FaceRecognition.module.css";
import {
	getFaceDescriptor,
	uploadFaceDescriptors,
} from "../../Redux/Actions/FaceRecognition_Action";
import swal from "sweetalert";

function FaceRecognition() {
	const dispatch = useDispatch();
	let userFace = useSelector((store) => store.faceReducer.faceDescriptor);
	const videoHeight = 480;
	const videoWidth = 640;
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [initializing, setInitializing] = useState(false);
	const [faceDetections, setFaceDetections] = useState([]);
	const [updateFaceDetection, setUpdateFaceDetection] = useState(false);
	useEffect(() => {
		if (updateFaceDetection === true) {
			dispatch(getFaceDescriptor());
			setUpdateFaceDetection(false);
		}
		const loadModels = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "/models";
			setInitializing(true);
			await dispatch(getFaceDescriptor());
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

	function handle10Captures() {
		//console.log(faceDetections);
		dispatch(uploadFaceDescriptors(faceDetections));
		setUpdateFaceDetection(true);
		setFaceDetections([]);
		swal(
			"Face detection done succesfully!",
			"You clicked the button!",
			"success"
		);
	}

	const checkFace = async () => {
		await faceCapture();

		// let faceDetectionsArray = Array.prototype.slice.call(faceDetections);
		// faceDetectionsArray = faceDetectionsArray.map((element) =>
		// 	Array.prototype.slice.call(element)
		// );

		console.log("face detectiosn=>", faceDetections);
		console.log("user face =>", userFace);

		if (faceDetections.length === userFace.length) {
			// const faceCheck = faceapi.euclideanDistance(
			// 	faceDetections,
			// 	userFace
			// );
			//console.log("facecheck =>", faceCheck);
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
	async function handleCapture() {
		await faceCapture();
		// 	try {
		// 		console.log("entre");
		// 		canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
		// 			webcamRef.current
		// 		);
		// 		const displaySize = { width: 640, height: 480 };
		// 		faceapi.matchDimensions(canvasRef.current, displaySize);
		// 		const detections = await faceapi
		// 			.detectSingleFace(
		// 				webcamRef.current,
		// 				new faceapi.TinyFaceDetectorOptions()
		// 			)
		// 			.withFaceLandmarks()
		// 			.withFaceDescriptor();
		// 		faceDetections.push(detections.descriptor);
		// 	} catch (error) {
		// 		//swal("Face not captured", "Try again!", "error");
		// 		console.log("salto error");
		// 	}
		// 	console.log(faceDetections.length);
		// }

		if (faceDetections.length === 10) {
			handle10Captures();
			return;
		}
		return;
	}

	return (
		<div className={fr.container}>
			Funco
			<span>{initializing ? "Initializing" : "Ready"}</span>
			<div className={fr.videoandCanvas}>
				<video
					ref={webcamRef}
					autoPlay
					muted
					height={videoHeight}
					width={videoWidth}
					onPlay={handleVideoOnPlay}
				/>
				<canvas ref={canvasRef} className={fr.canvasFace} />
			</div>
			{!initializing && <button onClick={handleCapture}>Capture</button>}
			{!initializing && <button onClick={checkFace}>Check Face</button>}
		</div>
	);
}

export default FaceRecognition;
