import React, { useEffect} from "react";
import ViewContainer from "./viewContainer";
import sg from "./shipping.module.css";
import { getDateUser } from "../../../../Redux/Actions/Home";
import { useDispatch, useSelector } from 'react-redux';


const Shipping = ({ widht, height, borderRadius }) => {
  const dispatch=useDispatch();
  const store = useSelector(
    (state) => state.homeReducer);
    const transactions=store.User?store.User.account_data.transactions:[];
  const received = transactions.filter((el) => el.main);

  useEffect(()=>{
    dispatch(getDateUser())
  },[dispatch])
  return (
    <div
      className={sg.container}
      style={{
        width: `${widht}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <div className={sg.header}>
        <h1>Transactions Sent</h1>
      </div>

      <div className={sg.body}>
        {received ? (
          received.map((el) => (
            <ViewContainer
              key={el.id}
              name={el.to}
              amount={el.amount}
              type_transaction={el.type_transaction}
              state={el.state}
            />
          ))
        ) : (
          <h3>Not Found</h3>
        )}
      </div>
    </div>
  );
};

export default Shipping;