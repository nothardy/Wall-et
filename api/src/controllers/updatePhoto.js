const { Account } = require("../db");

const updatePhoto = async (req, res, next) => {
    const { id, photo } = req.body;

    console.log(photo)
    try {
        const user = await Account.update({ photo }, { 
            where: { 
                id 
            }
        });
        return res.status(200).json(user);
    } catch (error) {
        next(error);
        return res.json(error);
    };
};

module.exports = {
    updatePhoto
};