import { GET_DATE_USER, ADMIN_GET_USER, ADMIN_GET_DATE_USERS, UPDATE_USER, UPDATE_PHOTO } from "../Actions/Home";

const initialState = {
    User: undefined, /* Date of User */
    AdminDateUser: undefined, /* Date specif of user  */
    info: undefined
}

function homeReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATE_USER:
            return {...state, User: action.payload}
        case ADMIN_GET_USER:
            return {...state, AdminDateUser: action.payload}
        case ADMIN_GET_DATE_USERS:
            return {...state, AdminDateUser: action.payload}
        case UPDATE_USER:
            return{...state,
            info:action.payload}
        case UPDATE_PHOTO:
            return{...state,
            User:action.payload}
        default:
            return state
    }
}
export default homeReducer;