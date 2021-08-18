import { Doughnut } from "react-chartjs-2";
import { getTransactionTypesPercentage } from "../../utils/Methods";

import { useState, useEffect } from "react";

export function DoughnutBalance(props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    if (props.userInfo) {
      setTypes(
        getTransactionTypesPercentage(props.userInfo.account_data.transactions)
      );
    }
  }, [props]);

  const state = {
    labels: ["Services", "Payments", "Transfers"],
    datasets: [
      {
        label: "Balance",
        data: types, // esto deberia ser porcentaje de transacciones
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
    <div>
      <Doughnut
        type="doughnut"
        data={state}
        options={options}
        height={"200px"}
        width={"500px"}
      />
    </div>
  );
}

export default DoughnutBalance;