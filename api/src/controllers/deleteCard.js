const { Card } = require('../db');

function deleteCard(req, res) {
    const { id } = req.params;
    Card.findByPk(id)
        .then((deleteUser) => deleteUser.destroy())
        .then(() => res.send("Card destroyed sucessfully"))
        .catch((err) => res.send(err));
};



module.exports = {
    deleteCard
};
