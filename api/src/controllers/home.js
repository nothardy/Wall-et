const { Account, Card, Transaction } = require('../db')
const { Op } = require('sequelize')


const user = async (mail) => {
    try {
        const data = await Account.findAll({ where: { mail: mail } })
        console.log('Data user: ',data)
        return {
            id: data.id,
            mail: data.mail,
            password: data.password,
            fullname: data.fullname,
            dni: data.dni,
            ubicacion: data.ubicacion,
            birth: data.birth,
            balance: data.balance,
            cvu: data.cvu,
            photo: data.photo,
        }
    }

    catch (err) {
        return console.log(`Error ${err}`)
    }
} 





module.export = {
    user
}