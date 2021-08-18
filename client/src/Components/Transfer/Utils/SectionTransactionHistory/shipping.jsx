<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux';
import sg from './shipping.module.css'

const Shipping = ({widht, height}) => {

    const store = useSelector(state => state.homeReducer.User.account_data.transactions)
    const received = store.filter( el => el.main);

    return (
        <div style={{width:`${widht}`, height:`${height}`,backgroundColor: 'red'}}>

            <div className={sg.header}>
                <h3>Transactoins Shipping</h3>
            </div>
            
            <div className={sg.body}>
                {
                    received? received.map( el => <div>{el.to}</div> )
                    : <h3>Not Found</h3>
                }
            </div>

        </div>
    )
}

=======
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
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

export default Shipping;
