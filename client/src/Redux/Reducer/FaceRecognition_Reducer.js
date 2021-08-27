import {
	GET_FACE_DESCRIPTOR,
	UPLOAD_FACE_DETECTIONS,
	TOKEN_EXPIRED,
	GET_FACE_DESCRIPTOR_BY_MAIL,
	CHECK_FACE,
} from "../Actions/FaceRecognition_Action";

const initialState = {
	faceDescriptor: [],
	expiredToken: false,
	loginFace: {},
	check: false,
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
		case GET_FACE_DESCRIPTOR_BY_MAIL:
			if (action.payload.exists) {
				return {
					...state,
					loginFace: action.payload,
				};
			} else {
				return {
					...state,
					loginFace: {
						...state.loginFace,
						exists: false,
					},
				};
			}
		case CHECK_FACE:
			return {
				...state,
				check: action.payload,
			};

		case TOKEN_EXPIRED:
			return {
				...state,
				expiredToken: action.payload, //BOOLEAN
			};
		default:
			return state;
	}
};

export default faceReducer;
