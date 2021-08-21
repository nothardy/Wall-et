// const express = require("express");
// const router = express.Router();
const { Router } = require("express");
const route = Router();
const { getTransactions, addContactToDb,postFavorite } = require("../controllers/contacts");
const { infoUser } = require("../controllers/infoHome");
const { verifyToken } = require("../middlewares/verifyToken");

//router.route("/").get(verifyToken, getTransactions).post(addContactToDb);
route.use("/", verifyToken);
route.get("/", verifyToken, async (req, res) => {
  try {
    const id = req.userId;
    res.status(200).json(await getTransactions(id));
  } catch (error) {
    res.status(400).json({ err: error });
  }
});
route.post('/favorites',verifyToken, postFavorite)
//router.route("/").get).post(addContactToDb);

module.exports = route;