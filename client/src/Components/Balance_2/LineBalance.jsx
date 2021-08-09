import { Line } from "react-chartjs-2";
import { setAxis } from "../../utils/Methods";
import{useSelector} from 'react-redux'
import {useState,useEffect} from 'react'

//toLocaleString('default', { month: 'long' })

// ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
export function LineBalance(props) {
  const  userInfo=useSelector((state) => state.homeReducer.User);
  let [axisState, setAxisState]=useState([[],[]])
  
  
  //let[xAxis, yAxis] = setAxis(userInfo.account_data.transactions); // para no hardcodear usar esto props.userInfo.accountData.transactions ||
  
  useEffect(() => {
    if(props.userInfo){
      setAxisState(setAxis(userInfo.account_data.transactions));
    }
    
  }, [props]);
  
  
  const state = {
    labels: axisState[0],
    datasets: [
      {
        label: "Total Expenses",
        data: axisState[1], //eje y
        backgroundColor: "white",
        color : "black",
        borderColor : "black",
        strokeColor: "black",
      },
    ],
  };
  const options = {
    title: {
      text: "Balance Anual",
      display: true,
      fonSize: 20,
    },
    maintainAspectRatio: false,
  };
  return (
    <div>
      <Line data={state} options={options} height={"200px"} width={"500px"} />
    </div>
  );
}

export default LineBalance;
