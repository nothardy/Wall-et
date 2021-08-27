const { Account, CashCode } = require('../db');
const Hashing = require("../controllers/hashing");

module.exports = {
    saveCode: async id => {
        try {
            const account = await Account.findByPk(id, { include: { model: CashCode } })
            const cashCode = account.dataValues.cashCodes
            const code = await Hashing(id);
                      

            if(cashCode.length < 1) {
                await CashCode.create({
                    code: code,
                    state: 'active',
                   accountId: id
                })
                
                return code
            }

            return cashCode.length > 0 && cashCode[0].dataValues.state !== 'active' ? cashCode[0].dataValues.code : await CashCode.update({ code: code, state: 'active' }, { where: { id: cashCode[0].dataValues.id }}) && code
        }
        catch(err){
            console.error(err)
            return err
        }
    }
}