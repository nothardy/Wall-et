import axios from 'axios';


const Logout = async() => {
    await axios.get('/auth/logout')
    localStorage.clear()
    return window.location.href = "/";
}

export default Logout;