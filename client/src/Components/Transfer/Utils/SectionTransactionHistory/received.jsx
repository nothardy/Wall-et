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

export default Received;
