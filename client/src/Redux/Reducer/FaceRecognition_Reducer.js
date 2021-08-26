import {
	GET_FACE_DESCRIPTOR,
	UPLOAD_FACE_DETECTIONS,
	TOKEN_EXPIRED,
} from "../Actions/FaceRecognition_Action";

const initialState = {
	faceDescriptor: [],
	expiredToken: false
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
		case TOKEN_EXPIRED:
			return {
				...state,
				expiredToken: action.payload, //BOOLEAN
			}
		default:
			return state;
	}
};

export default faceReducer;
