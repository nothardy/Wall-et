import React, { useEffect } from "react";
import style from "./Filter.module.css";
import { ASCENDENTE, DESCENDENTE, DEFAULT } from "./Filter";
import { getContacts, setOrder } from "../../Redux/Actions/Contacts_Action";
import { useDispatch, useSelector } from "react-redux";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";

export const Filter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.contactsReducer.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleOrder = (el) => {
    dispatch(setOrder(el.target.value));
  };
  return (
    <>
      <div className={style.base}>
        <label>Show by order</label>
        <select
          className={style.sele}
          name="Order"
          id="Order"
          onChange={(e) => handleOrder(e)}
        >
          <option value="default">------</option>
          <option value={DESCENDENTE}>Mas recientes</option>
          <option value={ASCENDENTE}>Mas antiguas</option>
        </select>
      </div>
    </>
  );
};
export default Filter;
