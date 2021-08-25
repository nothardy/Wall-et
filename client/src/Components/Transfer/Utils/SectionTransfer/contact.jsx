import React from "react";
import ViewContact from "./viewContact";
import { useSelector } from "react-redux";
import c from "./contact.module.css";

const Contact = ({ toggleTransaction }) => {
	const contacts = useSelector((state) => state.contactsReducer.contacts);

	return (
		<div className={c.container}>
			<div className={c.headerContact}>
				<h2 id={c.titleContact}>Contacts</h2>
			</div>

			<div className={c.bodyContact}>
				{contacts.length > 0 ? (
					contacts.map((el) => (
						<ViewContact
							key={el.id}
							id={el.id}
							CVU={el.cvu}
							fullname={el.fullname}
							mail={el.mail}
							toggleTransaction={toggleTransaction}
						/>
					))
				) : (
					<div className={c.default}>
						<img
							src="https://image.flaticon.com/icons/png/512/3565/3565856.png"
							alt="icon not contact"
						/>
						<h2>
							When you make a transfer, the recipient will be
							<br /> automatically added as a contact.
						</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
