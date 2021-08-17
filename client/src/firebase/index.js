import firebase from "firebase/app";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAV5PJvyx1rNqIH7dpBKhMy8XVbwpbtuh4",
    authDomain: "wall-et-1c491.firebaseapp.com",
    projectId: "wall-et-1c491",
    storageBucket: "wall-et-1c491.appspot.com",
    messagingSenderId: "1059897414673",
    appId: "1:1059897414673:web:36878ecec925890c2d8db0"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};
