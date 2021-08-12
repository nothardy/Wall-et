const { Account, Transaction, Card, Contact } = require("../db");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

const getContactsFromDb = async (req, res, next) => {
  if (req.url.includes("?email")) {
    try {
      const searchedContact = req.query.email;
      const contacts = await Account.findAll({
        // chequear de donde la traigo
        where: {
          mail: { [Op.iLike]: `%${searchedContact}%` },
        },
        include: [
          {
            model: Contact,
            as: "contacts",
            attributes: ["id", "mail", "cvu"],
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
            attributes: ["id", "mail", "cvu"],
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
    const { fullname, mail, cvu, from } = req.body;
    const contact = await Contact.create({
      id: uuidv4(),
      fullname,
      cvu,
      mail,
    });

    const from_account = await Account.findOne({
      where: { id: from },
    });

    await from_account.addContact(contact);
    res.json({ msg: `Contact successfully added to account` });
  } catch (error) {
    next(error);
  }
};

module.exports = { getContactsFromDb, addContactToDb };
