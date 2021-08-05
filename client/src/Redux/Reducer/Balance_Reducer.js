import { USER_INFO } from "../Actions/Balance_Action";

const testInfo = {
  balance: 50000,
  transactions: [
    {
      id: 100,
      from: "myuser",
      to: "user1",
      amount: 2000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/5/2021",
    },
    {
      id: 101,
      from: "myuser",
      to: "user7",
      amount: 7000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "4/7/2021",
    },
    {
      id: 105,
      from: "myuser",
      to: "user2",
      amount: 100,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "4/6/2021",
    },
    {
      id: 108,
      from: "user5",
      to: "myuser",
      amount: 7000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/7/2021",
    },
    {
      id: 104,
      from: "myuser",
      to: "user3",
      amount: 1000,
      type_transaction: "Transfer",
      state: "done",
      transaction_date: "4/5/2021",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 3000,
      type_transaction: "Payment",
      state: "done",
      transaction_date: "4/4/2021",
    },
    {
      id: 100,
      from: "myuser",
      to: "user6",
      amount: 10000,
      type_transaction: "Services",
      state: "done",
      transaction_date: "4/3/2021",
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
