import { GET_CODE_CASH, GET_USER_FOR_CVU, RESET_DATA, SENDING_TRANSACTIONS } from "../Actions/Transactions";

const initialState = {
    codePagofacil: undefined, /* code by pago facil */
    dataByCBU: null, /* Date specif of user  */
    resolveTransactions:undefined,
    
}

function transactions(state = initialState, action){
    switch (action.type) {
        case GET_CODE_CASH:
            return {...state, codePagofacil: action.payload}
        case GET_USER_FOR_CVU:
            return {...state, dataByCBU: action.payload}
        case SENDING_TRANSACTIONS:
            return {...state, resolveTransactions: action.payload}
        case RESET_DATA:
            return {...state, dataByCBU: action.payload}
        default:
            return state
    }
}
export default transactions;
