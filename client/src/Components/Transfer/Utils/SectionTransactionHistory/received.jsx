<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
import ViewContainer from './viewContainer';
import rd from './received.module.css'

const Received = ({widht, height}) => {

    const store = useSelector(state => state.homeReducer.User.account_data.transactions)
    const received = store.filter( el => !el.main);

    return (
        <div style={{width:`${widht}`, height:`${height}`, backgroundColor: 'green'}}>

            <div className={rd.header}>
                <h1>Transactions Recived</h1>
            </div>
            
            <div className={rd.body}>
                {
                    received? received.map( el => <ViewContainer 
                        key={el.id} name={el.from} amount={el.amount} 
                        type_transaction={el.type_transaction} state={el.state}
                        />)
                                            
                    : <h3>Not Found</h3>
                }
            </div>

        </div>
    )
}
=======
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import ViewContainer from "./viewContainer";
import rd from "./received.module.css";
import { getDateUser } from "../../../../Redux/Actions/Home";

const Received = ({ widht, height, borderRadius }) => {
  const dispatch=useDispatch();
  const store = useSelector(
    (state) => state.homeReducer)
const transactions= store.User? store.User.account_data.transactions:[];
  const received = transactions.filter((el) => !el.main);

  useEffect(()=>{
    dispatch(getDateUser())
  },[dispatch])

  return (
    <div
      className={rd.container}
      style={{
        width: `${widht}`,
        height: `${height}`,
        borderRadius: `${borderRadius}`,
      }}
    >
      <div className={rd.header}>
        <h1>Transactions Received</h1>
      </div>

      <div className={rd.body}>
        {received ? (
          received.map((el) => (
            <ViewContainer
              key={el.id}
              name={el.from}
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

export default Received;
