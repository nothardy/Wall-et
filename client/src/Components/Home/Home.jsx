import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./Home.module.css";
export const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.base}>
      <div>
        <p className={style.parrafo}>Wall-et</p>
        <div>
          <Link to="/balance">
            <button className={style.home}>Balance</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
