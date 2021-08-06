import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Passwords from "./index";
import swal from "sweetalert";

export const ResetPassword = () => {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    reset_code: "",
    step: 1,
  });
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  const fireTick = () => {
    buttonRef.current.classList.add("btn-tick");
    buttonRef.current.addEventListener(
      "animationend",
      () => {
        buttonRef.current.classList.remove("btn-tick");
      },
      { once: true }
    );
  };


  const handleSubmits = (input, _step) => {
    switch (_step) {
      case 1:
        setLoading(true);
        axios
          .post(`${process.env.REACT_APP_API}/user/reset/password`, {
            email: input,
          })
          .then((res) => {
            if (res.data.ok) {
              fireTick();
              setData({
                ...data,
                email: input,
                step: 2,
              });
            }
          })
          .catch((err) => {
            if (err.response.status === 404) {
              swal(
                { icon: "warning" },
                "Por favor ingrese el código de verificación"
              );
            } else {
              swal({ icon: "warning" }, "Oops, Algo salio mal :C");
            }
          })
          .then(() => setLoading(false));
        break;
      case 2:
        setLoading(true);
        axios
          .post(`${process.env.REACT_APP_API}/user/reset/verification`, {
            email: data.email,
            reset_code: input.toString(),
            step: "1",
          })
          .then((res) => {
            if (res.data.ok) {
              fireTick();
              setData({
                ...data,
                reset_code: input,
                step: 3,
              });
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              swal(
                { icon: "warning" },
                "El codigo que ha introducido no es valido"
              );
            } else {
              swal({ icon: "warning" }, "Oops, algo salio mal");
            }
          })
          .then(() => setLoading(false));
        break;
      case 3:
        setLoading(true);
        axios
          .post(`${process.env.REACT_APP_API}/user/reset/verification`, {
            email: data.email,
            reset_code: data.reset_code,
            step: "2",
            password: input,
          })
          .then((res) => {
            console.log(res)
            if (res.data.ok) {
              swal("Password changed correctly", { icon: "Success" }).then(
                () => {
                  history.push("/index");
                }
              );
            }
          })
          .catch(() => {
            swal({ icon: "warning" }, "Oops, Algo salio mal");
          })
          .then(() => setLoading(false));
        break;
      default:
        break;
    }
  }; 

  return (
    <>
      <div>
        <Passwords
          handleSubmit={handleSubmits}
          step={data.step}
          loading={loading}
          buttonRef={buttonRef}
        />
      </div>
    </>
  );
};