<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
import React, { useEffect, useState } from "react";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Doughnut";
import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
import { getUserInfo } from "../../Redux/Actions/Balance_Action";
import { getDateUser } from "../../Redux/Actions/Home"
import Transactions from "./Transactions";
import Money from "./Money";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import style from './Balance.module.css';
import { Bar } from '../Bar/bar';
import { NavBar } from '../Home/NavBar/navBar';
import { Admin } from '../Home/Admin/admin'
import { User } from '../Home/User/user'

function Balance() {
  const dispatch = useDispatch();
  const  userInfo=useSelector((state) => state.homeReducer.User); //userInfo = testInfo;
=======
import { getDateUser } from "../../Redux/Actions/Home";
import Money from "./Money";
import style from "./Balance.module.css";
import { Bar } from "../Bar/bar";
import { NavBar } from "../Home/NavBar/navBar";
function Balance() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.homeReducer.User); //userInfo = testInfo;
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
  let [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender === true) {
      dispatch(getDateUser());
<<<<<<< HEAD
      setFirstRender(firstRender = !firstRender)
=======
      setFirstRender((firstRender = !firstRender));
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
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
<<<<<<< HEAD
              <Transactions />
            </div>
            <div className={style.graficos}>
              <div className={style.right} >
=======
            </div>
            <div className={style.graficos}>
              <div className={style.right}>
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
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

<<<<<<< HEAD
{/* <Bar/>
=======
{
  /* <Bar/>
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

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
<<<<<<< HEAD
</div> */}




{/* <div>
=======
</div> */
}

{
  /* <div>
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
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
<<<<<<< HEAD
</div> */}
=======
</div> */
}
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
