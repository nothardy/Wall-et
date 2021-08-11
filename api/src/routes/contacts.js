const { Router } = require("express");
const route = Router();
const {
  getContactsFromDb,
  addContactToDb,
} = require("../controllers/contacts");

route.get("/", getContactsFromDb).post("/", addContactToDb);

module.exports = route;
