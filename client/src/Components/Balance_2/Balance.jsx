/* eslint-disable */
import React, { useEffect, useState } from "react";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Doughnut";
import { useSelector, useDispatch } from "react-redux";
import { getDateUser } from "../../Redux/Actions/Home";
import Money from "./Money";
import style from "./Balance.module.css";
import { Bar } from "../Bar/bar";
import { NavBar } from "../Home/NavBar/navBar";
function Balance() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.homeReducer.User); //userInfo = testInfo;
  let [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender === true) {
      dispatch(getDateUser());
      setFirstRender((firstRender = !firstRender));
    }
  }, [firstRender, dispatch]);

  //Deberiamos procesar la informacion para mostrarlo en los graficos.
  //Preguntarle a los chicos si estan haciendo esa ruta.

  //
  return (
    <>
      <div>
        <Bar />
        <div className={style.container}>
          <div className={style.left}>
            <NavBar />
          </div>
          <div className={style.boxes}>
            <div className={style.moneyAndTransactions}>
              <Money />
            </div>
            <div className={style.graficos}>
              <div className={style.right}>
                <div className={style.balance}>
                  <div className={style.grafico}>
                    <div className={style.titleAndGraph}>
                      <h2 className={style.title}>Your last activity</h2>
                      <LineBalance userInfo={userInfo} />
                    </div>
                  </div>
                  <div className={style.grafico}>
                    <div className={style.titleAndGraph}>
                      <h2 className={style.title2}>Your transactions</h2>
                      <DoughnutBalance userInfo={userInfo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//linea 37, lista de las transacciones
export default Balance;

{
  /* <Bar/>
<div className={h.container}>
    <div className={h.left}>
        <NavBar/>
    </div>
    <div className={h.right}>
        {
            admin.status === true? 
            <Admin/>
            : <User/>
        }
    </div>
</div> */
}

{
  /* <div>
<Bar />
<div />
<div>
<NavBar/>
</div>
<div>
<Money />
</div>
<div>
<Transactions />
</div>
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
</div> */
}