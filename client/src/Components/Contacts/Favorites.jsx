import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import View_favorite from "./views/view_favorite";
import View from "./views/view_contacts";
import { getFavorites } from "../../Redux/Actions/Contacts_Action";


export const Favorites = ({ toggleTransactions }) => {
	const favorito = useSelector((state) => state.contactsReducer.favorites);
	const [updateFavorites, setUpdateFavorites] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		if (updateFavorites === true) {
			dispatch(getFavorites());
			setUpdateFavorites(false);
		}
	}, [favorito, updateFavorites]);
	/* const [transactionUser, setTransactionUser] = useState(""); */
	// const [renderContactTransactions, setRenderContactTransactions] =
	// React.useState(true);
	// const [user, setUser] = useState({
	//     fullname,
	//     mail,
	//     date_transaction
	//   })

	// const handleOnClick = () => {
	//     if (renderContactTransactions === true) toggleTransactions(mail);
	//     //setRenderContactTransactions(!renderContactTransactions);
	//   };


	const handleUpdateFavorites = () => {
		setUpdateFavorites(true);
		dispatch(getFavorites());
	};
	return (
		<div className={style.containerFavorites}>
			<h2 className={style.titleFavorites}>Your favorite contacts</h2>
			<div className={style.body}>
				{favorito &&
					favorito.map((contact, i) => (
						<View_favorite
							updateFavorites={handleUpdateFavorites}
							toggleTransactions={toggleTransactions}
							key={i}
							fullname={contact.fullname}
							mail={contact.mail}
							date_transaction={contact.date_transaction}
							accountId={contact.user}
						/>
					))}
			</div>
		</div>
	);
};

export default Favorites;
