const {
    Account
} = require('../db');

const updateProfile = async (req, res, next) => {
    // const {
    //     // id,
    //     // fullname,
    //     // dni,
    //     // mail,
    //     // ubication,
    //     // birth_date
    //     user
    // } = req.body;
    const id = req.body.id; 
    let user = req.body;
    try {
        //    if (id) return res.json({msg:"Worked"})
        // const user = await Account.findByPk(id);
        // console.log(user);
        // user.dni = "38054316";
        // await Account.update(user,
        //     {where: 
        //         {id}
        //     });
        await Account.update({...user},
            {where: 
                {id: id}
            });
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
        return res.json({success: true}).status(200);
    } catch (error) {
        next(error);
        return res.json(error);
    }
};

module.exports = {
    updateProfile
};