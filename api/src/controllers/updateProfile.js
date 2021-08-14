const { Account} = require('../db');
const bcrypt = require('bcrypt');
const updateProfile = async (req, res, next) => {
    const id = req.body.id; 
    let user = req.body;
    try {
        if(user.password) {	user.password = await bcrypt.hash(user.password, 12);}
        await Account.update({...user},
            {where: 
                {id: id}
            });
        return res.json({message: true}).status(200);
    } catch (error) {
        next(error);
        return res.json(error);
    }
};

module.exports = {
    updateProfile
};