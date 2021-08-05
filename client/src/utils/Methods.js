export const setAxis = (transactions) => {
  // set x Axis
  let xAxis = [];
  let today = new Date().toLocaleDateString();
  for (let i = 0; i <= 4; i++) {
    let month = parseInt(today.charAt(0)) - i - 1;
    let xValue = new Date(2021, month, 1).toLocaleString("en-us", {
      month: "long",
    });
    xAxis.push(xValue);
  }

  // set y Axis
  let yAxis = orderTransactions(transactions, xAxis).map(
    (month) => month.amount
  );

  return [xAxis.reverse(), yAxis];
};

const orderTransactions = (transactions, xAxis) => {
  let orderedTransactions = transactions.sort(
    (transaction, nextTransaction) => {
      if (
        transaction.transaction_date.charAt(2) >
        nextTransaction.transaction_date.charAt(2)
      ) {
        return 1;
      } else if (
        transaction.transaction_date.charAt(2) <
        nextTransaction.transaction_date.charAt(2)
      ) {
        return -1;
      } else return 0;
    }
  );

  let monthTransactions = [];
  for (let j = 0; j <= orderedTransactions.length - 1; j++) {
    let totalAmount = 0;
    let monthTransaction = {};
    monthTransaction.amount = orderedTransactions[j].amount;
    monthTransaction.month = orderedTransactions[j].transaction_date.charAt(2);
    for (let i = 0; i <= orderedTransactions.length - 1; i++) {
      if (
        orderedTransactions[j].transaction_date.charAt(2) ===
          orderedTransactions[i].transaction_date.charAt(2) &&
        i !== j
      ) {
        totalAmount =
          totalAmount +
          orderedTransactions[j].amount +
          orderedTransactions[i].amount;
        monthTransaction.amount = totalAmount;
      }
      monthTransactions.push(monthTransaction);
    }
  }

  let uniqueTransactions = [...new Set(monthTransactions)];

  for (let i = 1; i <= uniqueTransactions.length - 1; i++) {
    if (uniqueTransactions[i].month === uniqueTransactions[i - 1].month)
      uniqueTransactions.splice(i, 1);
  }

  let months = xAxis
    .map((month) => new Date(Date.parse(month + " 1, 2012")).getMonth() + 1)
    .toString();

  uniqueTransactions = uniqueTransactions.filter((transaction) =>
    months.includes(transaction.month)
  );

  return uniqueTransactions;
};

export const getTransactionTypesPercentage = (transactions) => {
  let transactionsInfo = {};

  let totalTransactions = transactions.length;

  let servicesTransactions = 0,
    paymentTransactions = 0,
    transferTransactions = 0;
  for (let transaction of transactions) {
    if (transaction.type_transaction === "Payment") paymentTransactions++;
    else if (transaction.type_transaction === "Services")
      servicesTransactions++;
    else if (transaction.type_transaction === "Transfer")
      transferTransactions++;
  }

  transactionsInfo.servicesTransactions = Math.floor(
    (servicesTransactions * 100) / totalTransactions
  );
  transactionsInfo.paymentTransactions = Math.floor(
    (paymentTransactions * 100) / totalTransactions
  );
  transactionsInfo.transferTransactions = Math.floor(
    (transferTransactions * 100) / totalTransactions
  );

  let transactionsPercentages = Object.values(transactionsInfo);
  return transactionsPercentages;
};
