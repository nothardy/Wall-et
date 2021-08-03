import style from "./Balance.module.css";
import { Grafico } from "./DataBalance";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Pie";
function Balance() {
  return (
    <div className={style.graficos}>
      <div className={style.balance}>
        <div className={style.grafico}>
          <LineBalance />
        </div>
        <div className={style.grafico}>
          <DoughnutBalance />
        </div>
      </div>
    </div>
  );
}

export default Balance;
