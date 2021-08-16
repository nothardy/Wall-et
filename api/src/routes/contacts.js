const express = require("express");
const router = express.Router();
const { getTransactions, addContactToDb } = require("../controllers/contacts");

router.route("/").get(getTransactions).post(addContactToDb);

module.exports = router;
