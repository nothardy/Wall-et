import React, { useEffect, useState } from "react";
import { LineBalance } from "./LineBalance";
import { DoughnutBalance } from "./Doughnut";
import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/Balance_Action";
import Transactions from "./Transactions";
import Money from "./Money";
import { testInfo } from "../../Redux/Reducer/Balance_Reducer";

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
        <Money />
      </div>
      <div>
        <Transactions />
      </div>
      <div>
        <div>
          <div>
            <LineBalance userInfo={userInfo} />
          </div>
          <div>
            <DoughnutBalance userInfo={userInfo} />
          </div>
        </div>
      </div>
    </>
  );
}
//linea 37, lista de las transacciones
export default Balance;
