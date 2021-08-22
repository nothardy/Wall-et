import axios from "axios";
import swal from "sweetalert";

export const UPLOAD_FACE_DETECTIONS = "UPLOAD_FACE_DETECTIONS",
  GET_FACE_DESCRIPTOR = "GET_FACE_DESCRIPTOR";

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
