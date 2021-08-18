import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../Actions/loginActions";

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
