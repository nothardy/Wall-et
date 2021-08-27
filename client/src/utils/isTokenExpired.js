import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';


const isTokenExpired = async (token) => {
    try {
        const { data } = await axios.get(`/token/temp`, {
            headers: { "x-access-token": token },
        });
        const expired = await data.expired
        if (expired) {
            localStorage.removeItem("token");
            swal("Your session was expired")          
            return window.location.href = "/";
        }
    } catch (err) {
        console.log(err)
    }
};

export default isTokenExpired