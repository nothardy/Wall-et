import React, { useState } from 'react'
import Bar from '../Bar/bar'
import FaceRecognition from './FaceRecognition' 

function FaceView() {
    let [toggleCam, setToggleCam] = useState(false);
	const toggleFaceRecognition = () => {
		setToggleCam((toggleCam = !toggleCam));
	};
    return (
        <div>
           <Bar/>
           <FaceRecognition close={toggleFaceRecognition}/>
        </div>
    )
}

export default FaceView
