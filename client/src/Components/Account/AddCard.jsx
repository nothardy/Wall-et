/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import swal from "sweetalert";
import c from "./AddCard.module.css";
import { getDateUser } from "../../Redux/Actions/Home";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";

function AddCard({ close }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.homeReducer.User);
  const [updateinfo, setUpdateInfo] = useState({
    id: "",
    card_num: "",
    card_name: "",
    card_expiration_data: "",
    cvc: "",
    focus: "",
  });

  useEffect(() => {
    setUpdateInfo({
      ...updateinfo,
      id: user?.id || "",
      card_num: "",
      card_name: "",
      card_expiration_data: "",
      cvc: "",
    });
  }, [user]);

  const handleFocus = (e) => {
    setUpdateInfo({
      ...updateinfo,
      focus: e.target.name,
    });
  };

  function handleInputChange(e) {
    setUpdateInfo({
      ...updateinfo,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // try {
    //     await fetch('http://localhost:3001/card',
    //         {
    //             method: 'POST',
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ ...updateinfo, card_security_num: updateinfo.cvc}),
    //         }).then(async () => {
    //             await dispatch(getDateUser());
    //             close()
    //         })
    //     swal('Card created succesfully!', "You clicked the button!", "success");
    //     history.push('/account');
    // } catch (err) {
    //     swal('We could not add Card. Please try again.', "You clicked the button!", "error");
    // }

    try {
      await axios
        .post(
          "/card",
          JSON.stringify({ ...updateinfo, card_security_num: updateinfo.cvc }),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(async () => {
          await dispatch(getDateUser());
          close();
        });
      swal("Card created succesfully!", "You clicked the button!", "success");
      history.push("/account");
    } catch (err) {
      swal(
        "We could not add Card. Please try again.",
        "You clicked the button!",
        "error"
      );
    }
  }

  return (
    <div className={c.container}>
      <div>
        <div>
          <Cards
            cvc={updateinfo.cvc}
            expiry={updateinfo.card_expiration_data}
            focused={updateinfo.focus}
            name={updateinfo.card_name}
            number={updateinfo.card_num}
          />

          <form onSubmit={(e) => handleSubmit(e)} className={c.addCardForm}>
            <div className={c.centerNumberCard}>
              <div>
                <p htmlFor="number">Number of credit or debit Card:</p>
              </div>
              <input
                type="tel"
                onFocus={handleFocus}
                onChange={handleInputChange}
                placeholder="Card Number"
                name="card_num"
                pattern="[\d| ]{15,22}"
                minLength="15"
                maxlength="22"
               
                required
              />
            </div>
            <div>
              <div>
                <p htmlFor="Name">Name in the Card:</p>
              </div>
              <input
                type="text"
                onChange={handleInputChange}
                onFocus={handleFocus}
                placeholder="Name in the Card"
                name="card_name"
                required
              />
            </div>
            <div>
              <div>
                <div>
                  <p htmlFor="expiry">Expiration date:</p>
                </div>
                <input
                  type="tel"
                  data-date-split-input="true"
                  min="2021-08"
                  max="2026-12"
                  onChange={handleInputChange}
                  placeholder="Valid Thru"
                  name="card_expiration_data"
                  onFocus={handleFocus}
                  pattern="\d\d\d\d"
                  maxlength="4"
                  required
                />
              </div>
              <div>
                <div>
                  <p htmlFor="cvc">Security code:</p>
                </div>
                <input
                  type="tel"
                  placeholder="CVC"
                  name="cvc"
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  pattern="\d{3,4}"
                  maxlength="4"
                  required
                />
              </div>
            </div>
            <button type="submit" value="" name="">
              {" "}
              Add New Card{" "}
            </button>
            <button className="" onClick={() => close()}>
              X
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCard;

// function formatDate (input) {
//     var datePart = input.match(/\d+/g),
//     year = datePart[0].substring(2), // get only two digits
//     month = datePart[1];
//     return month+'/'+year;
//   }
