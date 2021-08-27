import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as faceapi from "face-api.js";
//import Webcam from "react-webcam"
import es from "./LoginFace.module.css";
import {
	getFaceDescriptor,
	isTokenExpired,
	getFaceDescriptorByMail,
	checkFace,
} from "../../../Redux/Actions/FaceRecognition_Action";
import { getDateUser } from "../../../Redux/Actions/Home";
import swal from "sweetalert";

function LoginFace() {
	const dispatch = useDispatch();
	const history = useHistory();
	let userFace = useSelector((store) => store.faceReducer.faceDescriptor);
	let expiredToken = useSelector((store) => store.faceReducer.expiredToken);
	const videoHeight = 480;
	const videoWidth = 640;
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [initializing, setInitializing] = useState(false);
	const [userMailFace, setUserMailFace] = useState("");
	const [faceDetections, setFaceDetections] = useState([]);
	const [updateFaceDetection, setUpdateFaceDetection] = useState(false);
	const [isUser, setIsUser] = useState(false);
	const [mailSubmitted, setMailSubmitted] = useState(false);
	const mailExists = useSelector((store) => store.faceReducer.exists);
	// const userLoged = useSelector((store) => store.faceReducer.check);
	// const arrayfloated = new Float32Array(userFace);
	function handleChange(e) {
		setUserMailFace(e.target.value);
		//    setErrors(validate({
		//     ...user,
		//     [e.target.value]: e.target.value
		//   }));
	}

	function handleSubmit(event) {
		event.preventDefault();
		setMailSubmitted(true);
		dispatch(getFaceDescriptorByMail(userMailFace));
	}

	useEffect(() => {
		if (updateFaceDetection === true) {
			//dispatch(getFaceDescriptor());
			//dispatch(getDateUser());
			dispatch(isTokenExpired());
			setUpdateFaceDetection(false);
			dispatch(isTokenExpired());
		}
		const loadModels = async () => {
			const MODEL_URL = process.env.PUBLIC_URL + "/models";
			setInitializing(true);
			//dispatch(getFaceDescriptor());
			//dispatch(isTokenExpired())
			Promise.all([
				faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
				faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
				faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
				faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
			]).then(startVideo);
		};

		if (mailSubmitted && mailExists && mailExists === true) {
			if (mailExists && mailExists === true) {
				console.log("existe e mail");
				setMailSubmitted(true);
				return loadModels();
			} else {
				alert("No hay mail");
			}
		}
	}, [updateFaceDetection, mailSubmitted, mailExists]);

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

	const faceCapture = async () => {
		//if(!userfaceDetections.mail) return alert("You need to input your mail")
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
				//setFaceDetections(prevState => [...prevState, detections.descriptor])
			} catch (error) {
				//swal("Face not captured", "Try again!", "error");
				console.log("salto error");
			}
			console.log(faceDetections.length);
			// console.log(faceDetections, "se hizooooo");
		}
		//console.log(faceDetections);
		dispatch(checkFace(userMailFace, faceDetections));
		webcamRef.current.srcObject
			.getTracks()
			.forEach((track) => track.stop());
	};

	return (
		<div className={es.body}>
			{/* {console.log(faceDetections, "ayudaaaaaaa")} */}
			{console.log(expiredToken)}
			{!mailExists ? (
				<div>
					<h1 className={es.centerNameFaceLogin}>Login with Face Recognition</h1>
					<form onSubmit={(e) => handleSubmit(e)} className={es.formFace}>
						<input
							autoComplete="off"
							id="mail"
							type="text"
							required="required"
							name="userMailFace"
							value={userMailFace}
							placeholder="example@mail.com"
							onChange={handleChange}
							className={es.inputLoginFace}
						/>
						<button type="submit" className={es.submitMailFace}>Submit Mail</button>
					</form>
				</div>
			) : (
				""
			)}
			{mailExists ? (
				<div className={es.centeringCameraLogin}>
					<h1 className={es.titleFaceR}>Login with Face Recognition</h1>
					<span className={es.titleFaceR}>{initializing ? <h3>Initializing Webcam</h3> : <h3>Ready</h3>}</span>
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
					{!initializing && (
						<button onClick={faceCapture}
							className={es.checkFaceLogin}>Check Face</button>
					)}
				</div>
			) : (
				""
			)}
			{/* {isUser === true ? "AUTHENTICATED!" : "NOT AUTHENTICATED"} */}
		</div>
	);
}

export default LoginFace;
