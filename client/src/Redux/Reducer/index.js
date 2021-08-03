import { GET_AMOUNT, GET_TRANSACTIONS } from "../Actions/Home";

const initialState = {
    Transactions: undefined,/* undefined */
    Balance: undefined
}

function rootReducers(state = initialState, action){
    switch (action.type) {
        case GET_AMOUNT:
            return {...state, Balance: action.payload}
        case GET_TRANSACTIONS:
            return {...state, Transactions: action.payload}
        default:
            return state
    }
}
export default rootReducers;
