/* eslint-disable */
export const filterContacts = (transactions) => {
	let contacts = transactions.map((transaction) => {
		let arrobaIndexFrom = Array.from(transaction.from).indexOf("@"),
			arrobaIndexTo = Array.from(transaction.to).indexOf("@");
		return {
			fullname:
				transaction.user === transaction.to
					? transaction.from.slice(0, arrobaIndexFrom)
					: transaction.to.slice(0, arrobaIndexTo),
			mail:
				transaction.user === transaction.to
					? transaction.from
					: transaction.to,
			date_transaction: transaction.transaction_date,
			cvu: transaction.cvu,
			photo: transaction.photo,
		};
	});
	contacts = [...new Set(contacts)];
	let contactMails = contacts.map((contact) => contact.mail);
	contactMails = [...new Set(contactMails)];
	let uniqueContacts = contacts.map((contact) => {
		if (contactMails.includes(contact.mail)) {
			contactMails.splice(contactMails.indexOf(contact.Mail) - 1, 1);
			return contact;
		}
	});
	return uniqueContacts.filter((contact) => contact !== undefined);
};

export const searchContact = (contacts, mail) => {
	let searchedContact = contacts.filter((contact) =>
		contact.mail.includes(mail.toLowerCase())
	);
	return searchedContact;
};

// /* eslint-disable */
// export const filterContacts = (transactions) => {
//   let contacts = transactions.map((transaction) => {
//     let arrobaIndexFrom = Array.from(transaction.from).indexOf("@"),
//       arrobaIndexTo = Array.from(transaction.to).indexOf("@");
//     return {
//       fullname:
//         transaction.user === transaction.to
//           ? transaction.from.slice(0, arrobaIndexFrom)
//           : transaction.to.slice(0, arrobaIndexTo),
//       mail:
//         transaction.user === transaction.to ? transaction.from : transaction.to,
//       date_transaction: transaction.transaction_date,
//     };
//   });
//   contacts = [...new Set(contacts)];
//   let contactMails = contacts.map((contact) => contact.mail);
//   contactMails = [...new Set(contactMails)];
//   let uniqueContacts = contacts.map((contact) => {
//     if (contactMails.includes(contact.mail)) {
//       contactMails.splice(contactMails.indexOf(contact.Mail) - 1, 1);
//       return contact;
//     }
//   });
//   return uniqueContacts.filter((contact) => contact !== undefined);
// };

// export const searchContact = (contacts, mail) => {
//   let searchedContact = contacts.filter((contact) =>
//     contact.mail.includes(mail.toLowerCase())
//   );
//   return searchedContact;
// };
