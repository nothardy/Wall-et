const { Account, Transaction, Card } = require("../db");
const { Op } = require("sequelize");

const getContactsFromDb = async (req, res, next) => {
  if (req.url.includes("?email")) {
    try {
      const searchedContact = req.query.email;
      const contacs = await Account.findAll({
        // chequear de donde la traigo
        where: {
          email: { [Op.iLike]: `%${searchedContact}%` },
        },
        include: [
          {
            model: Contact,
            as: "contacs",
            attributes: ["id", "email", "cvu"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      if (contacts.length > 0) return res.json(contacts);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const contacts = await Account.findAll({
        include: [
          {
            model: Contact,
            as: "contacts",
            attributes: ["id", "email", "cvu"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      if (contacts.length > 0) return res.json(contacts);
    } catch (error) {
      next(error);
    }
  }
};

const addContactToDb = async (req, res, next) => {
  try {
    const newContact = req.body;
    await Account.addContact(newContact);
    res.json({ msg: "Contact successfully added to this account" });
  } catch (error) {
    next(error);
  }
};

module.exports = (getContactsFromDb, addContactToDb);
