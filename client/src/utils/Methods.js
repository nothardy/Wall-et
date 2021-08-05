const getMaxExpense = (transactions) => {
  let expenses = transactions.map((transaction) => transaction.amount);
  let maxExpense = Math.max(...expenses);
  return maxExpense;
};

function linspace(start, stop, num, endpoint = true) {
  const div = endpoint ? num - 1 : num;
  const step = (stop - start) / div;
  return Array.from({ length: num }, (_, i) => start + step * i);
}

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

  //let maxExpense = getMaxExpense(transactions);
  //let yAxis = linspace(0, maxExpense, 5);
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

  //uniqueTransactions.filter(transaction=>{
  // let date= new Date(2021, transaction.month, 1)
  //   return xAxis.includes(date.getMonth())
  // })
  let months = xAxis
    .map((month) => new Date(Date.parse(month + " 1, 2012")).getMonth() + 1)
    .toString();

  uniqueTransactions = uniqueTransactions.filter((transaction) =>
    months.includes(transaction.month)
  );

  return uniqueTransactions;
};
