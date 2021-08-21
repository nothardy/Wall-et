import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import * as faceapi from "face-api.js"
//import Webcam from "react-webcam"
import fr from "./FaceRecognition.module.css";
import { uploadFaceDescriptors } from '../../Redux/Actions/FaceRecognition_Action';
import swal from "sweetalert";


function FaceRecognition() {
    const dispatch = useDispatch()
    const videoHeight = 480;
    const videoWidth = 640;
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [initializing, setInitializing] = useState(false)
    const [faceDetections, setFaceDetections] = useState([])
    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + "/models";
            setInitializing(true)
            Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
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
            try {
                canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(webcamRef.current);
                const displaySize = { width: 640, height: 480 };
                //console.log(displaySize)
                faceapi.matchDimensions(canvasRef.current, displaySize);
                const detections = await faceapi.detectSingleFace(webcamRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
                const resizedDetections = faceapi.resizeResults(detections, displaySize);
                canvasRef.current.getContext("2d").clearRect(0, 0, 640, 480);
                faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
            } catch (error) {
                console.log("shit")
            }
        }, 100)
    }

    function handle10Captures() {
        dispatch(uploadFaceDescriptors(faceDetections));
        swal("Face detection done succesfully!", "You clicked the button!", "success");
    }

    async function handleCapture() {
        if (faceDetections.length === 10) { handle10Captures(); return };
        try {
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(webcamRef.current);
            const displaySize = { width: 640, height: 480 };
            faceapi.matchDimensions(canvasRef.current, displaySize);
            const detections = await faceapi.detectSingleFace(webcamRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
            faceDetections.push(detections.descriptor)
            console.log(faceDetections);
            return
        } catch (error) {
            swal(
                "Face not captured",
                "Try again!",
                "error"
              );
        }
        return
    }

    return (
        <div className={fr.container}>
            Funco
            <span>{initializing ? "Initializing" : "Ready"}</span>
            <div className={fr.videoandCanvas}>
                <video ref={webcamRef}
                    autoPlay muted height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay}
                />
                <canvas
                    ref={canvasRef} className={fr.canvasFace} />
            </div>
            {!initializing &&
                <button onClick={handleCapture}>Capture</button>}
        </div>
    )
}

export default FaceRecognition

