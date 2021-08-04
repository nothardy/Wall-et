import { USER_INFO } from "../Actions/Balance_Action";


const initialState = {
  userInfo : [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_INFO:
        return{
          ...state,
          userInfo: payload
        }
    default:
      return state;
  };
};

export default rootReducer;
