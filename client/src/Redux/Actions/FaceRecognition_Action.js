import axios from "axios";
import swal from "sweetalert";

export const UPLOAD_FACE_DETECTIONS = "UPLOAD_FACE_DETECTIONS",
  GET_FACE_DESCRIPTOR = "GET_FACE_DESCRIPTOR",
  TOKEN_EXPIRED= "TOKEN_EXPIRED";

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
        dispatch({ type: UPLOAD_FACE_DETECTIONS, payload: response.data });
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

export function isTokenExpired() {
  console.log("Estoy aca en istokenexpired")
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/token/temp`, {
      headers: { "x-access-token": token },
    });
    dispatch({ type: TOKEN_EXPIRED, payload: data.expired });
  }
};

export async function renewToken() {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`/token/renew`, {
      headers: { "x-access-token": token },
    });
    localStorage.setItem("token", data.token);
  } catch (err) {
    console.log(err)
  }
};