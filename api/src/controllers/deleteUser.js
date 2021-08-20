const { Account} = require('../db');
const deleteUser = async (req, res, next) => { 
    //Soft Delete
    // const id = req.params.id
    // let activated = req.body.activated;
    // try {
    //     await Account.update({activated},
    //         {where: 
    //             {id: id}
    //         });
    //     return res.json({success: true}).status(200);
    // } catch (error) {
    //     next(error);
    //     return res.json(error);
    // }

    //HARD DELETE
    const {id} = req.params;
    try{
        await Account.destroy({
            where: {
                id: id
            }
        })
        return res.json({success: 'User successfully deleted'}).status(200);
    }catch (err){
        next(err);
        return res.json(err);
    }
};

module.exports = {
    deleteUser
};