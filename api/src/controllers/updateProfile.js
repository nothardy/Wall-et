const {
    Account
} = require('../db');

const updateProfile = async (req, res, next) => {
    const {
        id,
        fullname,
        dni,
        mail,
        ubication,
        birth_date
    } = req.body;
   try {
       if (fullname) return res.json({msg:"Worked"})
    //     let userFind = await Account.findByPk({
    //         where: {
    //             fullname: fullname
    //         }
    //     });
    //     return res.json({
    //         "msg": "Worked"
    //     });
        // if (req.file) {
        //     var profile = req.file.filename;
        // }
        // if (userFind) {
        //     userFind = await Account.update({
        //             fullname,
        //             // profile_pic: profile,
        //             dni,
        //             mail,
        //             ubication,
        //             birth_date
        //         });
        //     });

    } catch (error) {
        next(error);
        return res.json(error);
    }
};

module.exports = {
    updateProfile
};