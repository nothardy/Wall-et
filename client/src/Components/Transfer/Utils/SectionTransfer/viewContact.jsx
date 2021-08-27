/* eslint-disable */
import React from "react";
import { getUserByCVU } from "../../../../Redux/Actions/Transactions";
import { useDispatch, useSelector } from "react-redux";
import vc from "./viewContact.module.css";

const ViewContact = ({ id, fullname, CVU, toggleTransaction, mail, photo }) => {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.homeReducer.User);

	const handleSubmit = async () => {
		/* alert(`hola ${fullname}`) */
		//if (CVU) await dispatch(getUserByCVU({ cvu: CVU }));
		await dispatch(
			getUserByCVU({
				data: mail,
				cvuAccount: user.account_data.cvu,
				mailAccount: user.account_data.mail,
			})
		);
		toggleTransaction();
	};

	return (
		<div className={vc.container}>
			<div className={vc.left}>
				<img
					src={photo}
					alt="photo of profile"
				/>
			</div>

			<div className={vc.right}>
				<h3 id={vc.name}>{fullname}</h3>
				<span id={vc.cvu}>CVU: {CVU}</span>
				<button id={vc.btnSubmit} onClick={() => handleSubmit()}>
					Send
				</button>
			</div>
		</div>
	);
};

export default ViewContact;
