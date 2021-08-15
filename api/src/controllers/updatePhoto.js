const { Account } = require("../db");

const updatePhoto = async (req, res, next) => {
    const id = req.body.id; 
    const photo = req.file.path;
    console.log(photo)
    try {
        await Account.update({photo: photo},
            {where: 
                {id: id}
            });
        return res.json({message: true}).status(200);
    } catch (error) {
        next(error);
        return res.json(error);
    };
}

module.exports = {
    updatePhoto
};