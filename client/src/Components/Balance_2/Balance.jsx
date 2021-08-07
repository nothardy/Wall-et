import React, { useEffect, useState } from "react";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Doughnut";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/Balance_Action";
import Transactions from "./Transactions";
import Money from "./Money";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";
import style from './Balance.module.css';
import {Bar} from '../Bar/bar';
import {NavBar} from '../Home/NavBar/navBar';
import {Admin} from '../Home/Admin/admin'
import {User} from '../Home/User/user'
function Balance() {
  const dispatch = useDispatch();
  const userInfo = testInfo; //useSelector((state) => state.homeReducer.User);
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
    <>
      <div>
      <Bar/>

      <div className={style.container}>
        <div className={style.left}>
        <NavBar/>
       </div>

         <div className={style.right} >
        {
            firstRender.status === true? 
            <LineBalance userInfo={userInfo} />
            : <DoughnutBalance userInfo={userInfo} />
        }
         </div>
      </div>
    </div>
    </>
  );
}
//linea 37, lista de las transacciones
export default Balance;

{/* <Bar/>

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
</div> */}




{/* <div>
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
</div> */}