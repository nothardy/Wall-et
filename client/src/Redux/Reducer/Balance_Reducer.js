import { USER_INFO } from "../Actions/Balance_Action";

export const testInfo = {
  balance: 50000,
  transactions: [
    {
      id: 100,
<<<<<<< HEAD
      from: "myuser",
      to: "user1",
=======
      from: "juliancapo@gmail.com",
      to: "walterrodriguez7@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 101,
<<<<<<< HEAD
      from: "myuser",
      to: "user7",
=======
      from: "celestedubini@gmail.com",
      to: "juliancapo@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 105,
<<<<<<< HEAD
      from: "myuser",
      to: "user2",
=======
      from: "francoaguero08@gmail.com",
      to: "juliancapo@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-06-05T15:19:28.986",
    },
    {
      id: 108,
<<<<<<< HEAD
      from: "user5",
      to: "myuser",
=======
      from: "juliancapo@gmail.com",
      to: "georgina4@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 104,
<<<<<<< HEAD
      from: "myuser",
      to: "user3",
=======
      from: "juliancapo@gmail.com",
      to: "milagros21@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
<<<<<<< HEAD
      from: "myuser",
      to: "user6",
=======
      from: "juliancapo@gmail.com",
      to: "francoaguero08@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-04-05T15:19:28.986",
    },
    {
      id: 100,
<<<<<<< HEAD
      from: "myuser",
      to: "user6",
=======
      from: "juliancapo@gmail.com",
      to: "walterrodriguez7@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-03-05T15:19:28.986",
    },
    {
      id: 100,
<<<<<<< HEAD
      from: "myuser",
      to: "user6",
=======
      from: "juliancapo@gmail.com",
      to: "camilajure1@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 1000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
<<<<<<< HEAD
      from: "myuser",
      to: "user6",
=======
      from: "juliancapo@gmail.com",
      to: "juarezgonzalo2@gmail.com",
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
      amount: 8000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-08-05T15:19:28.986",
    },
  ],
<<<<<<< HEAD
=======
  /*  contacts: [
    "Gonzalo",
    "Cami",
    "Walter",
    "Franco",
    "Georgi",
    "Mili",
    "Julian",
    "Cele",
  ], */
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
};

const initialState = {
  userInfo: testInfo,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
