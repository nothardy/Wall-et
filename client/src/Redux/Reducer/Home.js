import { GET_DATE_USER, GET_TRANSACTIONS, ADMIN_GET_USER, ADMIN_GET_DATE_USERS } from "../Actions/Home";

const initialState = {
    Transactions: undefined,/* History */
    User: undefined, /* Date of User */
    AdminDateUser: undefined /* Date specif of user  */
    
}

function homeReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATE_USER:
            return {...state, User: action.payload}
        case GET_TRANSACTIONS:
            return {...state, Transactions: action.payload}
        case ADMIN_GET_USER:
            return {...state, AdminDateUser: action.payload}
        case ADMIN_GET_DATE_USERS:
            return {...state, AdminDateUser: action.payload}
        default:
            return state
    }
}
export default homeReducer;