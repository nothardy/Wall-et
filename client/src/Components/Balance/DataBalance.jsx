import { Bar } from "react-chartjs-2";
import style from "./Balance.module.css";

export function Grafico() {
  const state = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Balance",
        data: [12, 9, 3, 5, 2, 3, 6, 7, 6.5, 9, 11, 9],
        backgroundColor: "#D62793",
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
    color: "#64d5fa",
  };
  return (
    <div className={style.bar}>
      <Bar data={state} options={options} />
    </div>
  );
}

export default Grafico;
