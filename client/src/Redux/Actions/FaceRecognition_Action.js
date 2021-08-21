import axios from "axios";
import swal from "sweetalert";

export const UPLOAD_FACE_DETECTIONS = "UPLOAD_FACE_DETECTIONS";

export function uploadFaceDescriptors(faceDetections) {
    console.log("Llegue")
    return (dispatch) => {
      axios
        .post("/face", faceDetections, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          dispatch({ type: UPLOAD_FACE_DETECTIONS, payload: response.data });
        })
        .catch((error) => swal("Upload Unsucessful", "Try again", "error"));
    };
  }