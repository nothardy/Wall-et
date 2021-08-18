<<<<<<< HEAD
import React from 'react'
import { getUserByCVU } from '../../../../Redux/Actions/Transactions'
import { useDispatch } from 'react-redux'
import vc from './viewContact.module.css'

const ViewContact = ({ id, fullname, CVU, toggleTransaction}) => {
    const dispatch = useDispatch()

    const handleSubmit = async() =>{
         /* alert(`hola ${fullname}`) */
         await dispatch(getUserByCVU({cvu:CVU}))
         toggleTransaction()
    }

    return (
        <div className={vc.container}>
            <div className={vc.left}>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="photo of profile" />
            </div>

            <div className={vc.right}>
                <h3 id={vc.name}>{fullname}</h3>
                <span id={vc.cvu}>CVU: {CVU}</span>
                <button id={vc.btnSubmit} onClick={ () => handleSubmit()}>Send</button>
            </div>
            
        </div>
    )
}
=======
/* eslint-disable */
import React from "react";
import { getUserByCVU } from "../../../../Redux/Actions/Transactions";
import { useDispatch, useSelector } from "react-redux";
import vc from "./viewContact.module.css";

const ViewContact = ({ id, fullname, CVU, toggleTransaction, mail }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.homeReducer.User);

  const handleSubmit = async () => {
    /* alert(`hola ${fullname}`) */
    //if (CVU) await dispatch(getUserByCVU({ cvu: CVU }));
    await dispatch(
      getUserByCVU({
        data: mail,
        cvuAccount: user.account_data.cvu,
        mailAccount: user.account_data.mail,
      })
    );
    toggleTransaction();
  };

  return (
    <div className={vc.container}>
      <div className={vc.left}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="photo of profile"
        />
      </div>

      <div className={vc.right}>
        <h3 id={vc.name}>{fullname}</h3>
        <span id={vc.cvu}>Mail: {mail}</span>
        <button id={vc.btnSubmit} onClick={() => handleSubmit()}>
          Send
        </button>
      </div>
    </div>
  );
};
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default ViewContact;
