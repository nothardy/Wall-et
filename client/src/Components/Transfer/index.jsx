<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Bar from '../Bar/bar'
import NavBar from '../Home/NavBar/navBar'
import { getDateUser } from '../../Redux/Actions/Home'
import NavTransaction from './Utils/NavTransaction'

import p from './index.module.css'

function Transfer() {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getDateUser())
    },[dispatch])
    
    return (
        <div>
            <Bar />
            <div className={p.container}>
                <div className={p.left}>
                    <NavBar />
                </div>
                <div className={p.right}>
                    <NavTransaction/>
                </div>
            </div>
        </div>
    )
}

export default Transfer
=======
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Bar from "../Bar/bar";
import NavBar from "../Home/NavBar/navBar";
import { getDateUser } from "../../Redux/Actions/Home";
import NavTransaction from "./Utils/NavTransaction";
import { useParams } from "react-router";

import p from "./index.module.css";
import { getContacts } from "../../Redux/Actions/Contacts_Action";

function Transfer() {
  let { section } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDateUser());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <Bar />
      <div className={p.container}>
        <div className={p.left}>
          <NavBar />
        </div>
        <div className={p.right}>
          <NavTransaction section={section} />
        </div>
      </div>
    </div>
  );
}

export default Transfer;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
