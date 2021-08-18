import axios from "axios";
import swal from "sweetalert";
import firebase, { storage } from "../../firebase";
export const GET_DATE_USER = "GET_DATE_USER",
  ADMIN_GET_USER = "ADMIN_GET_USER",
  ADMIN_GET_DATE_USERS = "ADMIN_GET_DATE_USERS",
  UPDATE_USER = "UPDATE_USER",
  UPDATE_PHOTO = "UPDATE_PHOTO";

// const testInfo = [
//   {
//     email: "TonyElTucu@gmail.com",
//     id: 1,
//   },
//   {
//     email: "LaMartu@gmail.com",
//     id: 2,
//   },
//   {
//     email: "GonzaloEmanuel@gmail.com",
//     id: 3,
//   },
//   {
//     email: "Georgina@gmail.com",
//     id: 4,
//   },
//   {
//     email: "Milagros@gmail.com",
//     id: 5,
//   },
//   {
//     email: "Celeste@gmail.com",
//     id: 6,
//   },
//   {
//     email: "Camila@gmail.com",
//     id: 7,
//   },
//   {
//     email: "JulianWey@gmail.com",
//     id: 8,
//   },
//   {
//     email: "Walter@gmail.com",
//     id: 9,
//   },
// ];

export const getDateUser = () => {
  /* Trae la date de la cuenta del usuario logeado. */
  return async function dispatch(dispatch) {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(`/home`, {
        headers: { "x-access-token": token },
      });
      return dispatch({ type: GET_DATE_USER, payload: data });
    } catch (err) {
      alert("error en getDateUser", err);
      /* Quitar esto cuando tenga rutas de back */
    }
  };
};

export const adminGetUser = (email) => {
  return async function dispatch(dispatch) {
    /* Te machea por correo unico */
    try {
      const { data } = await axios.get(`/adminSearch?mail=${email}`);
      return dispatch({
        type: ADMIN_GET_USER,
        payload: data,
      }); /* ACA tendria que devolverme un array */
    } catch (err) {
      swal(`User not Found`);
    }
  };
};

export const adminGetDateUsers = (status) => {
  /* Action la cual, filtra por status(aprobado, adeudor o congelador) */
  return async function dispatch(dispatch) {
    try {
      const { data } = await axios.get(`/admin/${status}`);
      return dispatch({ type: ADMIN_GET_DATE_USERS, payload: data });
    } catch (err) {
      swal(`Incomming View`);
    }
  };
};

export function updateUser(json) {
  return (dispatch) => {
    axios
      .post("/updateUser", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response.data });
      });
  };
}

// export function updatePhoto() {
//   return async function dispatch(dispatch){
//     try{
//       const token = localStorage.getItem('token')
//       const {data} = await axios.get(`http://localhost:3001/home`, { headers: { 'x-access-token': token }})
//         return dispatch({type:UPDATE_PHOTO, payload:data})
//     }
//     catch(err){
//         alert("error en getDateUser",err)
//         /* Quitar esto cuando tenga rutas de back */
//     }
//   }
// };

export const updatePhoto = (image, user) => (dispatch) => {
  const { id, user_data } = user;
  try {
    const uploadedImage = firebase
      .storage()
      .ref()
      .child(`profileImages/${user_data.fullname}`)
      .put(image);
    uploadedImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.error(error);
      },
      async () => {
        await storage
          .ref(`profileImages`)
          .child(`${user_data.fullname}`)
          .getDownloadURL()
          .then(async (photo) => {
            console.log(photo);
            return axios.post("/updatePhoto", { photo, id }).then((res) => {
              user.account_data.photo = photo;
              dispatch({ type: UPDATE_PHOTO, payload: user });
            });
          })
          .catch((error) => console.error(error));
      }
    );
  } catch (err) {
    console.error(err);
  }
};