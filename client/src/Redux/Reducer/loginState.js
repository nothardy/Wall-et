const initialState = {
    user: {},
    error: {},
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return { 
          loading: true 
        };
      case 'USER_LOGIN_SUCCESS':
        return { 
          loading: false, 
          user: action.payload 
        };
      case 'USER_LOGIN_ERROR':
        return { 
          loading: false, 
          error: action.payload 
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;