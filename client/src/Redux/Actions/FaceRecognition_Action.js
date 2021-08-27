import axios from "axios";
import swal from "sweetalert";

export const UPLOAD_FACE_DETECTIONS = "UPLOAD_FACE_DETECTIONS",
	GET_FACE_DESCRIPTOR = "GET_FACE_DESCRIPTOR",
	TOKEN_EXPIRED = "TOKEN_EXPIRED",
	GET_FACE_DESCRIPTOR_BY_MAIL = "GET_FACE_DESCRIPTOR_BY_MAIL",
	CHECK_FACE = "CHECK_FACE";

export function uploadFaceDescriptors(faceDetections) {
	console.log("Llegue");
	return (dispatch) => {
		const token = localStorage.getItem("token");
		axios
			.post("/face", faceDetections, {
				headers: {
					"Content-Type": "application/json",
					"x-access-token": token,
				},
			})
			.then((response) => {
				dispatch({
					type: UPLOAD_FACE_DETECTIONS,
					payload: response.data,
				});
			})
			.catch((error) => swal("Upload Unsucessful", "Try again", "error"));
	};
}

export function getFaceDescriptor() {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		axios
			.get("/face", {
				headers: { "x-access-token": token },
			})
			.then((response) => {
				dispatch({ type: GET_FACE_DESCRIPTOR, payload: response.data });
			});
	};
}

export const isTokenExpired = () => {
	return async function dispatch(dispatch) {
		try {
			const token = localStorage.getItem("token");
			const { data } = await axios.get(`/token/temp`, {
				headers: { "x-access-token": token },
			});
			return dispatch({ type: TOKEN_EXPIRED, payload: data.expired });
		} catch (err) {
			console.log(err);
		}
	};
};

export async function renewToken() {
	try {
		const token = localStorage.getItem("token");
		const { data } = await axios.get(`/token/renew`, {
			headers: { "x-access-token": token },
		});
		localStorage.setItem("token", data.token);
	} catch (err) {
		console.log(err);
	}
}

export function getFaceDescriptorByMail(mail) {
	console.log("estoy mandando el mail");

	return (dispatch) => {
		axios
			.post(
				"/loginface/mail",
				{ mail: mail },
				{
					headers: { "Content-Type": "application/json" },
				}
			)
			.then((response) => {
				dispatch({
					type: GET_FACE_DESCRIPTOR_BY_MAIL,
					payload: response.data,
				});
			});
	};
}

export function checkFace(mail, detections) {
	return (dispatch) => {
		axios
			.post(
				"/loginface/check",
				{ mail: mail, detections: detections },
				{
					headers: { "Content-Type": "application/json" },
				}
			)
			.then((response) => {
				dispatch({
					type: CHECK_FACE,
					payload: response.data,
				});

				localStorage.setItem("token", response.data.token);
				if (response.data.token) window.location.href = "/mywallet";
			})
			.catch(() => {
				swal("User was not recognized", { icon: "error" });
				window.location.href = "/";
			});
	};
}
