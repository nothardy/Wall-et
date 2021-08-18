import { USER_INFO } from "../Actions/Balance_Action";

export const testInfo = {
  balance: 50000,
  transactions: [
    {
      id: 100,
      from: "juliancapo@gmail.com",
      to: "walterrodriguez7@gmail.com",
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 101,
      from: "celestedubini@gmail.com",
      to: "juliancapo@gmail.com",
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 105,
      from: "francoaguero08@gmail.com",
      to: "juliancapo@gmail.com",
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-06-05T15:19:28.986",
    },
    {
      id: 108,
      from: "juliancapo@gmail.com",
      to: "georgina4@gmail.com",
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 104,
      from: "juliancapo@gmail.com",
      to: "milagros21@gmail.com",
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "juliancapo@gmail.com",
      to: "francoaguero08@gmail.com",
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-04-05T15:19:28.986",
    },
    {
      id: 100,
      from: "juliancapo@gmail.com",
      to: "walterrodriguez7@gmail.com",
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-03-05T15:19:28.986",
    },
    {
      id: 100,
      from: "juliancapo@gmail.com",
      to: "camilajure1@gmail.com",
      amount: 1000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "juliancapo@gmail.com",
      to: "juarezgonzalo2@gmail.com",
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