const {Account, Favorite} = require('../db');

const deleteFav = async ( accountId, mail ) => {

// console.log(accountId, mail)

const account = await Account.findByPk( accountId, { include: { model: Favorite }}) 
     try{
        await account.favorites.map(el => {
            el.mail === mail && el.Destroy({
            where : {
                mail: el.mail
            }
        
        })

    })
        return {success: 'Contact favorite successfully deleted'}
    }catch(err){
        return err
    }
};
module.exports = {
    deleteFav
} 