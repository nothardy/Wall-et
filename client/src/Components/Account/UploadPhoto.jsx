import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDateUser } from '../../Redux/Actions/Home';
//import Alert from '../components/Alert';
import up from './UploadPhoto.module.css';
import axios from 'axios';

export default function UploadPhoto({ close }) {
    const user = useSelector((state) => state.homeReducer.User);
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const dispatch = useDispatch();
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
        console.log(file)
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", selectedFile);
        //formData.append("id", fileInputState.id);

        //update-profile
        axios.post("http://localhost:3001/updatePhoto", formData, {
            headers: {
                "content-type": "application/json"
            }
        }).then(res => {
            console.log(res);
            this.setState({ msg: res.data.message });
            this.setState({ profileImage: res.data.results.photo });
        })
            .catch(err => console.log(err))
            dispatch(getDateUser())
         close()
    }
    // const handleSubmitFile = (e) => {
    //     e.preventDefault();
    //     if (!selectedFile) return;
    //     const reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onloadend = () => {
    //         uploadImage(reader.result);
    //     };
    //     reader.onerror = () => {
    //         console.error('AHHHHHHHH!!');
    //         setErrMsg('something went wrong!');
    //     };
    //     dispatch(getDateUser())
    //     close()
    // };

    // const uploadImage = async (base64EncodedImage) => {
    //     try {
    //         //console.log(base64EncodedImage)
    //         await fetch('/api/upload', {
    //             method: 'POST',
    //             body: JSON.stringify({ data: base64EncodedImage }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         setFileInputState('');
    //         setPreviewSource('');
    //         setSuccessMsg('Image uploaded successfully');
    //     } catch (err) {
    //         console.error(err);
    //         setErrMsg('Something went wrong!');
    //     }
    // };
    return (
        <div className={up.container}>
            <h1 className={up.title}>Upload an Image</h1>
            {/* <Alert msg={errMsg} type="danger" />
            <Alert msg={successMsg} type="success" /> */}
            <form onSubmit={handleSubmitFile} className={up.form}>
                <input
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={fileInputState}
                    className={up.forminput}
                />
                <button className={up.btn} type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: '300px' }}
                />
            )}
            <button onClick={() => close()}>X</button>
        </div>
    );
}