/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Admin from "./Admin/admin";
import Bar from "../Bar/bar";
import User from "./User/user";
/* import TransactionHistory from './Transactions';
import Balance from './Balance'; */
import { getDateUser } from "../../Redux/Actions/Home";
import NavBarAdmi from "./NavBar/navBarAdmin";
import NavBar from "./NavBar/navBar";
import h from "./home.module.css";
import { getFaceDescriptor } from "../../Redux/Actions/FaceRecognition_Action";

const Home = () => {
	const store = useSelector((state) => state.homeReducer.User);
	const dispatch = useDispatch();
	/* let [admin, setAdmin] = useState({
        status:false,
        mail:"fran@gmail.com"
    }); */
	let [firstRender, setFirstRender] = useState(true);
	useEffect(() => {
		if (firstRender === true) {
			dispatch(getDateUser());
			dispatch(getFaceDescriptor());
			setFirstRender((firstRender = !firstRender));
		}
	}, [firstRender, dispatch]);

	return (
		<div>
			<Bar />

			<div className={h.container}>
				<div className={h.left}>
					{store && store.account_data.admin === true ? (
						<NavBarAdmi />
					) : (
						<NavBar />
					)}
				</div>

				<div className={h.right}>
					{store ? (
						store.account_data.admin === true ? (
							<Admin />
						) : (
							<User />
						)
					) : (
						<img
							src="https://mesadepartes.munilosolivos.gob.pe/img/loading.gif"
							alt="LoadingGif"
							className={h.loadingGifDA}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
export default Home;
