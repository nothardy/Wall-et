import React, { useState, useEffect, useRef } from 'react'
import * as faceapi from "face-api.js"
//import Webcam from "react-webcam"
import fr from "./FaceRecognition.module.css";


function FaceRecognition() {
    const videoHeight = 480;
    const videoWidth = 640;
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [initializing, setInitializing] = useState(false)
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + "/models";
            setInitializing(true)
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            ]).then(startVideo);
        }
        loadModels();
    }, [])

    const startVideo = () => {
        navigator.getUserMedia({
            video: {}
        }, stream => webcamRef.current.srcObject = stream,
            err => console.error(err));
    };

    const handleVideoOnPlay = () => {
        setInterval(async () => {
            if (initializing) { setInitializing(false) };
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(webcamRef.current);
            const displaySize = { width: 640, height: 480};
            console.log(displaySize)
            faceapi.matchDimensions(canvasRef.current, displaySize);
            const detections = await faceapi.detectAllFaces(webcamRef.current, new faceapi.TinyFaceDetectorOptions).withFaceLandmarks();
            console.log(detections)
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvasRef.current.getContext("2d").clearRect(0, 0, 640, 480);
            faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
        }, 100)
    }

    return (
        <div className={fr.container}>
            Funco
            {console.log(webcamRef)}
            <span>{initializing ? "Initializing" : "Ready"}</span>
            <div className={fr.videoandCanvas}>
            <video ref={webcamRef}
                autoPlay muted height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay}
            />
            <canvas
                ref={canvasRef} className={fr.canvasFace}/>
                </div>
        </div>
    )
}

export default FaceRecognition
