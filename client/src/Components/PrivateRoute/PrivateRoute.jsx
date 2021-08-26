import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { isTokenExpired } from "../../Redux/Actions/FaceRecognition_Action";
import { useEffect } from "react";
import Swal from 'sweetalert2';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  let expiredToken = useSelector((state) => state.faceReducer.expiredToken);
  useEffect(() => {
    dispatch(isTokenExpired(token));
  }, [token, dispatch])

  ///if(token && expiredToken) {
  //  Swal.fire('Your session was expired')
  // }

  return (
    <div>
      { token&&expiredToken? <Redirect to="/logout" /> :
        <Route
          {...rest}
          render={(props) =>
            token ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      }
    </div>
  );
};

export default PrivateRoute;
