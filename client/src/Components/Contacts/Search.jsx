import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.css";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import { searchContact } from "../../Redux/Actions/Contacts_Action";
import swal from "sweetalert";
import {
  contactsReducer,
} from "../../Redux/Reducer/Contacts_Reducer";
export const Search = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState("");
  const buscar = useSelector(state => state.contactsReducer.contacts)
  const handleChange = (el) => {
    setContact(el.target.value);
  };

  console.log(buscar)
  const handleSubmit = (el) => {
    el.preventDefault();
    if (!contact) return swal("you must enter a name or an email");
    dispatch(searchContact(contact));
    setContact("");
  };

  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <div className={style.bus}>
        <form className={style.form} onSubmit={(el) => handleSubmit(el)}>
          <span className={style.icon}>
            <i class="fa fa-search"></i>
          </span>
          <input
            value={contact}
            className={style.inp}
            type="text"
            placeholder="Search..."
            onChange={(el) => handleChange(el)}
          />
        </form>
      </div>
    </>
  );
};
export default Search;
