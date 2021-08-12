const express = require("express");
const router = express.Router();
const {
  getContactsFromDb,
  addContactToDb,
} = require("../controllers/contacts");

router.route("/").get(getContactsFromDb).post(addContactToDb);

module.exports = router;
