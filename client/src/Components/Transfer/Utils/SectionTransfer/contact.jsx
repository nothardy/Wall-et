<<<<<<< HEAD
import React from 'react'
import ViewContact from './viewContact';

import c from './contact.module.css'

const Contact = ({toggleTransaction}) => {
    const contacts= [
        {
          id: 1,
          fullname: "Gonzalo",
          CVU:"0000047411100798896147",
          mail: "juarezgonzalo2@gmail.com",
          date_transaction: "2021-08-10T15:19:28.986",
        },
        {
          id: 2,
          fullname: "Milagros",
          CVU:"0000047411100798896147",
          mail: "julianpiñel2@gmail.com",
          date_transaction: "2021-04-09T15:19:28.986",
        },
        {
          id: 3,
          fullname: "Franco",
          CVU:"0000047411100142646891",
          mail: "francoaguero08@gmail.com",
          date_transaction: "2021-05-03T15:19:28.986",
        }, 
        {
            id: 4,
            fullname: "Patricia",
            CVU:"0000047411100872578974",
            mail: "Patricia08@gmail.com",
            date_transaction: "2021-05-03T15:19:28.986",
        }, 
        {
            id: 5,
            fullname: "Luchiana",
            CVU:'0000047411100798896147',
            mail: "Luchiana@gmail.com",
            date_transaction: "2021-05-03T15:19:28.986",
        }];

    return (
        <div className={c.container}>
            <div className={c.headerContact}>
                <h2 id={c.titleContact}>Contact</h2>
            </div>
            
            <div className={c.bodyContact}>
                { /* ACA TENDRIA QUE CONECTAR CON MI STORE. */
                    contacts.map( el => <ViewContact key={el.id} id={el.id} CVU={el.CVU} 
                        fullname={el.fullname} mail={el.mail} toggleTransaction={toggleTransaction}
                    />)/* PONER EL CASO DE QUE NO ALLA CONTACT, APAREZCA UNA IMG */
                }
            </div>
        </div>
    )
}
=======
import React from "react";
import ViewContact from "./viewContact";
import { useSelector } from "react-redux";
import c from "./contact.module.css";

const Contact = ({ toggleTransaction }) => {
  const contacts = useSelector((state) => state.contactsReducer.contacts);

  return (
    <div className={c.container}>
      <div className={c.headerContact}>
        <h2 id={c.titleContact}>Contacts</h2>
      </div>

      <div className={c.bodyContact}>
      {
          contacts.length > 0 ? (
            contacts.map((el) => (
              <ViewContact
                key={el.id}
                id={el.id}
                CVU={el.CVU}
                fullname={el.fullname}
                mail={el.mail}
                toggleTransaction={toggleTransaction}
              />
            ))
           ): 
           <div className={c.default}>
              <img src="https://image.flaticon.com/icons/png/512/3565/3565856.png" alt="icon not contact"/>
                  <h2>When you make a transfer, the recipient will be<br/> automatically added as a contact.</h2>
           </div>
        }
      </div>
    </div>
  );
};
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default Contact;
