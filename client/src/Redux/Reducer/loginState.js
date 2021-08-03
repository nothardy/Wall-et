const initialState = {
    user: {},
    error: false,
    isLoading: false,
    userInfo: {},
    isAuth: false,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS': {
        return {
          ...state,
          user: {},
          userInfo: action.payload,
          isLoading: false,
          error: false,
          isAuth: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default loginReducer;