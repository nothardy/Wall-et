import {
    UPLOAD_FACE_DETECTIONS
  } from "../Actions/FaceRecognition_Action";

  const initialState = {
   faceDescriptor : []
  };
  
  const faceReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_FACE_DETECTIONS: return {
            ...state,
            faceDescriptor: action.payload,
          };
          default:
            return state;
    }
  }

  export default faceReducer;
