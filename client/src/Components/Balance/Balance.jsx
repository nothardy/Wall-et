import style from "./Balance.module.css";
import {Grafico} from './DataBalance'
import {LineBalance} from './LineBalance'
import {PieBalance} from './Pie'
function Balance() {

  return (
    <div className={style.grafico}>
        <div className={style.balance}>
            <LineBalance />
            <PieBalance />
        </div>
    </div>
  );
}

export default Balance;
