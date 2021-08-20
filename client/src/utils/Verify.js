import React from "react";
import axios from 'axios';


import { useHistory, useParams } from "react-router-dom";



function Verify() {
    const history= useHistory()
    const {token} = useParams()
    axios.get("/register/" + token)
    history.push('/')
    return (
        <div>
            
        </div>
    )
}

export default Verify
