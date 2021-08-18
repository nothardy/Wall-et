<<<<<<< HEAD
import { GET_DATE_USER, ADMIN_GET_USER, ADMIN_GET_DATE_USERS } from "../Actions/Home";

const initialState = {
    User: undefined, /* Date of User */
    AdminDateUser: undefined /* Date specif of user  */
    
}

function homeReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATE_USER:
            return {...state, User: action.payload}
        case ADMIN_GET_USER:
            return {...state, AdminDateUser: action.payload}
        case ADMIN_GET_DATE_USERS:
            return {...state, AdminDateUser: action.payload}
        default:
            return state
    }
}
export default homeReducer;
=======
import {
  GET_DATE_USER,
  ADMIN_GET_USER,
  ADMIN_GET_DATE_USERS,
  UPDATE_USER,
  UPDATE_PHOTO,
} from "../Actions/Home";

const initialState = {
  User: undefined /* Date of User */,
  AdminDateUser: undefined /* Date specif of user  */,
  info: undefined,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATE_USER:
      return { ...state, User: action.payload };

    case ADMIN_GET_USER:
      return { ...state, AdminDateUser: action.payload };
    case ADMIN_GET_DATE_USERS:
      return { ...state, AdminDateUser: action.payload };
    case UPDATE_USER:
      return { ...state, info: action.payload };
    case UPDATE_PHOTO:
      return { ...state, User: action.payload };
    default:
      return state;
  }
}
export default homeReducer;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
