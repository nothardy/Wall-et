import React, { useEffect, useState } from "react";
import style from "./Balance.module.css";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Doughnut";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/Balance_Action";

function Balance() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender === true) {
      dispatch(getUserInfo());
      setFirstRender(false);
    }
  }, [dispatch]);

  //Deberiamos procesar la informacion para mostrarlo en los graficos.
  //Preguntarle a los chicos si estan haciendo esa ruta.

  //
  return (
    <div className={style.graficos}>
      <div className={style.balance}>
        <div className={style.grafico}>
          <LineBalance userInfo={userInfo} />
        </div>
        <div className={style.grafico}>
          <DoughnutBalance userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}

export default Balance;
