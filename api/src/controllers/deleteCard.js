const { Card } = require('../db');
//const { v4: uuidv4 } = require('uuid');

function deleteCard(req, res, next) {
    // const { id, card_num, card_name, card_expiration_data, card_security_num } = req.body;
    // // if (!card_num || !card_name || card_expiration_data || card_security_num) return res.send({ error: 500, message: "Card info is required" });
    // Card.create({
    //     id: uuidv4(),
    //     card_num,
    //     card_name,
    //     card_expiration_data,
    //     card_security_num,
    //     accountId: id
    // })
    //     // .then((cardCreated) => {
    //     //     return cardCreated.addAccount(id);
    //     // })
    //     .then(newCard => {
    //         return res.json({
    //             message: "You uploaded a card!",
    //         });
    //     })
    //     .catch((error) => next(error));
    const deleteUser = (req, res) => {
        const { id } = req.params;
        Card.findByPk(id)
          .then((deleteUser) => deleteUser.destroy())
          .then(() => res.send("Card destroyed sucessfully"))
          .catch((err) => res.send(err));
      };
}


module.exports = {
    deleteCard
};
