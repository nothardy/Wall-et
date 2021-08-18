export const filterTransactions = (transactions, mail) => {
  // let specificUserTransactions = transactions.filter(
  //   (transaction) =>
  //     transaction.to.includes(mail.toLowerCase()) ||
  //     transaction.from.includes(mail.toLowerCase())
  // );
  // return specificUserTransactions;
  let specificUserTransactions = transactions.filter(
    (transaction) =>
      transaction.from.includes(mail.toLowerCase()) ||
      transaction.to.includes(mail.toLowerCase())
  );
  return specificUserTransactions;
};

export const transformDate = (transactionDate) => {
  let date = Array.from(transactionDate);
  let transformedDate = `${date.splice(5, 2).join("")}-${date
    .splice(9, 2)
    .join("")}-${date.splice(0, 4).join("")}`;
  return transformedDate;
};
