import firebase from "firebase/app";
<<<<<<< HEAD
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAV5PJvyx1rNqIH7dpBKhMy8XVbwpbtuh4",
    authDomain: "wall-et-1c491.firebaseapp.com",
    projectId: "wall-et-1c491",
    storageBucket: "wall-et-1c491.appspot.com",
    messagingSenderId: "1059897414673",
    appId: "1:1059897414673:web:36878ecec925890c2d8db0"
=======
import "firebase/storage";
import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "wall-et-1c491.firebaseapp.com",
  projectId: "wall-et-1c491",
  storageBucket: "wall-et-1c491.appspot.com",
  messagingSenderId: "1059897414673",
  appId: "1:1059897414673:web:36878ecec925890c2d8db0",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

<<<<<<< HEAD
export {storage, firebase as default};
=======
export { storage, firebase as default };
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
