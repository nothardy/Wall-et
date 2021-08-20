const generator = require('creditcard-generator')

const securityCode = () => {
    const decimal = Math.random() * 1000
    const int = decimal>99? Math.floor(decimal) : 100 + Math.floor(decimal)
    return int
}

const expDate = () => {
    const today = new Date();
    const actualyear = today.getFullYear()
    const actualmonth= today.getMonth()
    const expirationyear = actualyear + 5;
    const expirationDate= actualmonth<10? '0' + actualmonth.toString() + '/' + expirationyear.toString():
    actualmonth.toString() + '/' + expirationyear.toString()
    return expirationDate
}

const fakeCard = (req, res) => {
    const cardNumber = generator.GenCC("VISA")[0];
    const codeSecurity = securityCode()
    const expirationDate= expDate()
    res.status(200).json({ cardNumber, codeSecurity, expirationDate })
}

module.exports = { fakeCard, };