import { USER_INFO } from "../Actions/Balance_Action";

export const testInfo = {
  balance: 50000,
  transactions: [
    {
      id: 100,
      from: "myuser",
      to: "Walter",
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 101,
      from: "Cele",
      to: "myuser",
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 105,
      from: "myuser",
      to: "Julian",
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-06-05T15:19:28.986",
    },
    {
      id: 108,
      from: "myuser",
      to: "Georgi",
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 104,
      from: "myuser",
      to: "Mili",
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "Franco",
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-04-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "Walter",
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-03-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "Cami",
      amount: 1000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "Gonzalo",
      amount: 8000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-08-05T15:19:28.986",
    },
  ],
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
