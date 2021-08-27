import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PagoFacil from "./pagofacil.png";
import { getCodeCash } from "../../../../Redux/Actions/Transactions";
import ch from "./cash.module.css";

const Cash = () => {
	const storeOfUser = useSelector((state) => state.homeReducer.User);
	const code = useSelector((state) => state.transactionsReducer);
	const dispatch = useDispatch();

	const codeGenerator = () => {
		storeOfUser && dispatch(getCodeCash(storeOfUser.id));
	};
	return (
		<div className={ch.container}>
			<h1>Load Money</h1>
			<p>
				Use this code whenever you want to fund your account. The
				minimum amount is $ 50.
			</p>
			<div id={ch.box_code}>
				{!code.codePagofacil ? (
					<button id={ch.btnCodeGenerator} onClick={() => codeGenerator()}>
						Show Code
					</button>
				) : (
					code.codePagofacil
				)}
			</div>

			<p>Show your code to the cashier at:</p>
			<img src={PagoFacil} alt="PagoFacil" />
		</div>
	);
};

export default Cash;
