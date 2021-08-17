export const filterContacts = (transactions) => {
  // let contacts = transactions.map((transaction) => {
  //   let arrobaIndex = Array.from(transaction.from).indexOf("@");
  //   return {
  //     fullname: transaction.from.slice(0, arrobaIndex),
  //     mail: transaction.from,
  //     date_transaction: transaction.createdAt,
  //   };
  // });
  // contacts = [...new Set(contacts)];
  // return contacts;
  let contacts = transactions.map((transaction) => {
    let arrobaIndexFrom = Array.from(transaction.from).indexOf("@"),
      arrobaIndexTo = Array.from(transaction.to).indexOf("@");
    return {
      fullname:
        transaction.user === transaction.to
          ? transaction.from.slice(0, arrobaIndexFrom)
          : transaction.to.slice(0, arrobaIndexTo),
      mail:
        transaction.user === transaction.to ? transaction.from : transaction.to,
      date_transaction: transaction.transaction_date,
    };
  });
  return contacts;
};

export const searchContact = (contacts, mail) => {
  let searchedContact = contacts.filter((contact) =>
    contact.mail.includes(mail.toLowerCase())
  );
  return searchedContact;
};
