import style from "./Balance.module.css";
import { Bar } from "react-chartjs-2";

function Balance() {
  return (
    <>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 9, 3, 5, 2, 3],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </>
  );
}

export default Balance;
