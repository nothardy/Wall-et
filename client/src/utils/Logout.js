import axios from 'axios';


const Logout = async() => {
    await axios.get('/auth/logout')
    localStorage.removeItem("token");
    return window.location.href = "/";
}

export default Logout;