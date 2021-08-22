import {
	GET_FACE_DESCRIPTOR,
	UPLOAD_FACE_DETECTIONS,
} from "../Actions/FaceRecognition_Action";

const initialState = {
	faceDescriptor: [],
};

const faceReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPLOAD_FACE_DETECTIONS:
			return {
				...state,
				faceDescriptor: action.payload,
			};
		case GET_FACE_DESCRIPTOR:
			let faceArrayFromInsideString = action.payload.replace(/'/g, '"');
			faceArrayFromInsideString = JSON.parse(faceArrayFromInsideString);
			return {
				...state,
				faceDescriptor: faceArrayFromInsideString,
			};
		default:
			return state;
	}
};

export default faceReducer;
