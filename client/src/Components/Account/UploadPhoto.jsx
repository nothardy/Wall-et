import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDateUser, updatePhoto, updateUser } from "../../Redux/Actions/Home";
//import Alert from '../components/Alert';
import up from "./UploadPhoto.module.css";
import axios from "axios";

export default function UploadPhoto({ close }) {
  const user = useSelector((state) => state.homeReducer.User);
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  //const [successMsg, setSuccessMsg] = useState('');
  //const [errMsg, setErrMsg] = useState('');
  const dispatch = useDispatch();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
    console.log(file);
    dispatch(updatePhoto(file, user));
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("id", user.id);

    //update-profile
    await axios
      .post("/updatePhoto", formData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setSelectedFile({ msg: res.data.message });
        setSelectedFile({ photo: res.data.results });
      })
      .catch((err) => console.log(err));
    // dispatch(getDateUser(updatePhoto()))
    // const infoSendDb = {

    //     formData,
    //   };
    //   dispatch(updateUser(infoSendDb));
    dispatch(getDateUser());

    close();
  };

  return (
    <div className={up.container}>
      <h1 className={up.title}>Upload an Image</h1>
      {/* <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" /> */}
      <form onSubmit={handleSubmitFile} className={up.form}>
        <input
          id="fileInput"
          type="file"
          name="photo"
          onChange={handleFileInputChange}
          value={fileInputState}
          className={up.forminput}
        />
        <button className={up.btn} type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
      <button onClick={() => close()}>X</button>
    </div>
  );
}
