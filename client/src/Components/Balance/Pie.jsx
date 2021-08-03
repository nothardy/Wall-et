import { Doughnut } from "react-chartjs-2";
import style from "./Balance.module.css";
export function DoughnutBalance() {
  const state = {
    labels: [
      // "Lunes",
      // "Martes",
      // "Miercoles",
      // "Jueves",
      // "Viernes",
      // "Sabado",
      // "Domingo",
      "Servicios",
      "Transferencias",
      "Pagos",
    ],
    datasets: [
      {
        label: "Balance",

        data: [20, 60, 20],
        rotation: 45,
        backgroundColor: [
          "#D62793",
          "#F7612C",
          "#ADD9CE",
          "#069289",
          "#8fa800",
          "#8473FF",
          "#DB485C",
        ],
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
