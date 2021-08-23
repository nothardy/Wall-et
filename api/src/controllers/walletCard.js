const generator = require('creditcard-generator');

const securityCode = () => {
    const decimal = Math.random() * 1000;
    const int = decimal>99 ? Math.floor(decimal) : 100 + Math.floor(decimal);
    return int;
}

const expDate = () => {
    const today = new Date();
    const actualyear = today.getFullYear();
    const actualmonth= today.getMonth();
    const expirationyear = actualyear + 5;
    const expirationDate= actualmonth<10? '0' + actualmonth.toString() + '/' + expirationyear.toString():
    actualmonth.toString() + '/' + expirationyear.toString()
    return expirationDate;
}

const card = (fullname) => {
    const name = fullname;
    const number = generator.GenCC("VISA")[0];
    const cvc = securityCode();
    const expiry= expDate();
    return { number, cvc, expiry, name }
}

module.exports = {card};