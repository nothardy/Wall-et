import { USER_INFO } from "../Actions/Balance_Action";

export const testInfo = {
  balance: 50000,
  transactions: [
    {
      id: 100,
      from: "myuser",
      to: "user1",
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 101,
      from: "myuser",
      to: "user7",
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 105,
      from: "myuser",
      to: "user2",
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-06-05T15:19:28.986",
    },
    {
      id: 108,
      from: "user5",
      to: "myuser",
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-07-05T15:19:28.986",
    },
    {
      id: 104,
      from: "myuser",
      to: "user3",
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "2021-04-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-03-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 1000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-05-05T15:19:28.986",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 8000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "2021-08-05T15:19:28.986",
    },
  ],
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
