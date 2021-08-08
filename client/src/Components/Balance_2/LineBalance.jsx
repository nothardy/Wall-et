import { Line } from "react-chartjs-2";
import { setAxis } from "../../utils/Methods";

//toLocaleString('default', { month: 'long' })

// ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]
export function LineBalance(props) {
  const [xAxis, yAxis] = setAxis(props.userInfo.transactions); // para no hardcodear usar esto props.userInfo.accountData.transactions ||
  const state = {
    labels: xAxis,
    datasets: [
      {
        label: "Total Expenses",
        data: yAxis, //eje y
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
