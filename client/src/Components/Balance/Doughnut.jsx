import { Doughnut } from "react-chartjs-2";
import { getTransactionTypesPercentage } from "../../utils/Methods";
import style from "./Balance.module.css";

export function DoughnutBalance(props) {
  const transactionsTypePercentages = getTransactionTypesPercentage(
    props.userInfo.transactions
  );
  const state = {
    labels: ["Services", "Payments", "Transfers"],
    datasets: [
      {
        label: "Balance",
        data: transactionsTypePercentages, // esto deberia ser porcentaje de transacciones
        rotation: 45,
        backgroundColor: ["#D62793", "#F7612C", "#ADD9CE"],
      },
    ],
  };
  const options = {
    animationAnimateScale: true,
    title: {
      text: "Balance Anual",
      display: true,
      fonSize: 20,
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={style.line}>
      <Doughnut type="doughnut" data={state} options={options} />
    </div>
  );
}

export default DoughnutBalance;
