import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useDispatch, useSelector } from "react-redux";
import { getDateUser } from "../../../../Redux/Actions/Home";
import ViewPrice from "./viewPrice";
import axios from "axios";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import OptionCardView from "./optionCardView";
import cd from "./card.module.css";

const Card = () => {
	const dispatch = useDispatch();
	const listPrice = [50, 200, 500, 1000];
	let keyNum = 0;
	const history = useHistory();
	/* useEffect(() => {
    dispatch(getDateUser());
  }, []); */
	const store = useSelector((state) => state.homeReducer.User);
	let cards = store?.account_data.cards || "";

	const [updateinfo, setUpdateInfo] = useState({
		account_id: "",
		card_num: "",
		card_name: "",
		card_expiration_data: "",
		cvc: "",
		focus: "",
		main: true,
	});
	let [amount, setAmount] = useState("");
	const handleAmount = (e) => {
		setAmount((amount = e.target.value));
	};

	let [modalCard, setModalCard] = useState(false);
	const toggleModalCard = (e) => {
		e.preventDefault();
		if (!amount) return alert("campo requerid");
		setModalCard((modalCard = !modalCard));
	};

	const handleFocus = (e) => {
		setUpdateInfo({
			...updateinfo,
			focus: e.target.name,
		});
	};
	const handleChange = (e) => {
		setUpdateInfo({
			...updateinfo,
			[e.target.name]: e.target.value,
		}); /* setInput(prev => ({...prev, [t.name]: t.value})) */

		updateinfo.account_id === "" &&
			setUpdateInfo({
				...updateinfo,
				account_id: store?.id,
			});
	};

	const chargeChange = (el) => {
		setUpdateInfo({
			...updateinfo,

			card_num: el.card_num,
			card_name: el.card_name,
			card_expiration_data: "",
			cvc: "",
			focus: "",
		});
		toggleCardOption();
		/* alert("entro") */
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log({ ...updateinfo, amount });
			const { data } = await axios.post(`transaction/card`, {
				...updateinfo,
				amount,
			});
			await swal(
				"Congratulations!",
				"Your upload has been successful!",
				"success"
			);
			history.push("/mywallet");
		} catch (err) {
			console.log(err.response.data);
			await swal("We are sorry!", `${err.response.data}!`, "error");
		}
	};

	let [cardOption, setCardOption] = useState(true);
	const toggleCardOption = () => {
		setCardOption((cardOption = !cardOption));
	};
	return (
		<div className={cd.container}>
			<h1>Choose a Card</h1>

			{!modalCard ? (
				<form
					onSubmit={(e) => toggleModalCard(e)}
					className={cd.containerTop}
				>
					<span className={cd.title}>Choose the amount to load</span>
					<div className={cd.moldAmount}>
						<img
							src="https://image.flaticon.com/icons/png/512/991/991952.png"
							alt="signo peso"
						/>
						<input
							type="number"
							name="amount"
							id={cd.inputAmount}
							min="1"
							required
							value={amount}
							onChange={handleAmount}
							autoComplete="off"
							placeholder="0,00"
						/>
					</div>

					<div className={cd.bottomListPrice}>
						{listPrice.map((el) => (
							<ViewPrice
								key={++keyNum}
								price={el}
								changePrice={handleAmount}
							/>
						))}
					</div>
					<button type="submit">Continue</button>
				</form>
			) : (
				<div
					className={cd.modalCard}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					{cardOption ? (
						<div className={cd.modalCard_OptionCard}>
							<h2>Your Cards</h2>
							<div className={cd.modalCard_ContainerOptionCard}>
								{cards.length > 0 ? (
									cards.map((el) => (
										<OptionCardView
											values={el}
											chargeChange={chargeChange}
										/>
									))
								) : (
									<span>
										To load with a card, it must be <br />
										registered in the account. You don't own
										any. <br />
										Click on this{" "}
										<Link to="/account">link</Link> to go to
										register your card.
									</span>
								)}
							</div>
						</div>
					) : (
						<button onClick={() => toggleCardOption()}>
							toggle
						</button>
					)}
					<form
						className={cd.FormCard}
						onSubmit={(e) => handleSubmit(e)}
					>
						<div
							style={{ display: "flex", flexDirection: "column" }}
						>
							<label className={cd.labelFormCard}>
								Card number
								<input
									className={cd.inputFormCardLong}
									value={updateinfo.card_num}
									type="tel"
									onFocus={handleFocus}
									onChange={handleChange}
									placeholder="Card Number"
									name="card_num"
									pattern="[\d| ]{15,22}"
									min="15"
									maxLength="19"
									required
								/>
							</label>

							<label className={cd.labelFormCard}>
								Name card
								<input
									className={cd.inputFormCardLong}
									type="text"
									onChange={handleChange}
									onFocus={handleFocus}
									placeholder="Name in the Card"
									name="card_name"
									required
									value={updateinfo.card_name}
								/>
							</label>
						</div>

						<div
							style={{
								display: "flex",
								width: "100%",
								justifyContent: "space-between",
								marginBottom: "10px",
							}}
						>
							<label className={cd.labelFormCard}>
								Expiration date
								<input
									className={cd.inputFormCardExpiration}
									value={updateinfo.card_expiration_data}
									type="tel"
									data-date-split-input="true"
									min="2021-08"
									max="2026-12"
									onChange={handleChange}
									onFocus={handleFocus}
									placeholder="Valid Thru"
									name="card_expiration_data"
									pattern="\d\d\d\d"
									maxLength="4"
									required
								/>
							</label>

							<label className={cd.labelFormCard}>
								Cvc
								<input
									className={cd.inputFormCardCvc}
									value={updateinfo.cvc}
									type="tel"
									placeholder="CVC"
									name="cvc"
									onChange={handleChange}
									onFocus={handleFocus}
									pattern="\d{3,4}"
									maxLength="4"
									required
								/>
							</label>
						</div>

						<button type="submit" className={cd.btnSubmitFormCard}>
							submit
						</button>
					</form>

					<Cards
						cvc={updateinfo.cvc}
						expiry={updateinfo.card_expiration_data}
						focused={updateinfo.focus}
						name={updateinfo.card_name}
						number={updateinfo.card_num}
					/>
				</div>
			)}
		</div>
	);
};

export default Card;
