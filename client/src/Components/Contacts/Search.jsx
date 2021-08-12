import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Contacts.module.css";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import { searchContact } from "../../Redux/Actions/Contacts_Action";
import swal from "sweetalert";
import {
  contactsReducer,
  contactsHard,
} from "../../Redux/Reducer/Contacts_Reducer";
export const Search = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState("");

  const handleChange = (el) => {
    setContact(el.target.value);
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    if (!contact) return swal("probando");
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
