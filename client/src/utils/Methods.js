import moment from "moment";

export const setAxis = (transactions) => {
  // set x Axis
  let xAxis = [];
  let today = moment().format("l");
  for (let i = 0; i <= 4; i++) {
    let month = parseInt(today.charAt(0)) - i - 1;
    let xValue = new Date(2021, month, 1).toLocaleString("en-us", {
      month: "long",
    });
    xAxis.push(xValue);
  }

  // set y Axis
  let yAxis = orderTransactions(transactions, xAxis);

  return [xAxis.reverse(), yAxis];
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

const orderTransactions = (transactions, xAxis) => {
  let transactionFolder = {};
  for (let i = 1; i <= 12; i++) {
    transactionFolder[i] = transactions.filter(
      (transaction) => parseInt(transaction.transaction_date.charAt(6)) === i
    );
  }

  let totalTransactionAmounts = Object.values(transactionFolder).map(
    (month) => {
      let totalAmount = 0;
      for (let transaction of month) {
        if (transaction.amount) totalAmount = totalAmount + transaction.amount;
        else totalAmount = 0;
      }
      return totalAmount;
    }
  );

  let months = xAxis
    .map((month) => new Date(Date.parse(month + " 1, 2012")).getMonth() + 1)
    .toString();

  totalTransactionAmounts = totalTransactionAmounts.filter((transaction) =>
    months.includes(
      totalTransactionAmounts.findIndex((month) => month === transaction) + 1
    )
  );

  return totalTransactionAmounts;
};
