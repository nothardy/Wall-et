export const filterContacts = (transactions) => {
  let contacts = transactions.map((transaction) => {
    let arrobaIndex = Array.from(transaction.mail).indexOf("@");
    return {
      fullname: transaction.mail.slice(0, arrobaIndex),
      mail: transaction.mail,
      date_transaction: transaction.createdAt,
    };
  });
  contacts = [...new Set(contacts)];
  return contacts;
};

export const searchContact = (contacts, mail) => {
  let searchedContact = contacts.filter((contact) =>
    contact.mail.includes(mail.toLowerCase())
  );
  return searchedContact;
};
