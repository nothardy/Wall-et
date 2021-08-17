import React from "react";
import ViewContact from "./viewContact";
import { useSelector } from "react-redux";
import c from "./contact.module.css";

const Contact = ({ toggleTransaction }) => {
  const contacts = useSelector((state) => state.contactsReducer.contacts);

  return (
    <div className={c.container}>
      <div className={c.headerContact}>
        <h2 id={c.titleContact}>Contact</h2>
      </div>

      <div className={c.bodyContact}>
        {
          /* ACA TENDRIA QUE CONECTAR CON MI STORE. */
          contacts ? (
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
          ) : (
            <img
              src="https://image.flaticon.com/icons/png/512/3565/3565856.png"
              alt="tda"
            />
          )
          /* PONER EL CASO DE QUE NO ALLA CONTACT, APAREZCA UNA IMG */
        }
      </div>
    </div>
  );
};

export default Contact;
