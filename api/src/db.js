<<<<<<< HEAD
require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PRODUCTION, DB_TEST, NODE_ENV,
} = process.env;

const sequelize = NODE_ENV === 'production' ? new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_PRODUCTION}`, {
  logging: false,
  native: false, 
}) : 

new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_TEST}`, {
  logging: false,
  native: false, 
});
=======
require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PRODUCTION, DB_TEST, NODE_ENV } =
  process.env;
// let sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_TEST}`,
//   { logging: false, native: false }
// );
let sequelize =
  NODE_ENV === "production"
    ? new Sequelize({
        database: DB_PRODUCTION,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_TEST}`,
        { logging: false, native: false }
      );
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

const basename = path.basename(__filename);
//json w token
//passport
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Account, Transaction, Card, Contact } = sequelize.models;

// Aca vendrian las relaciones

<<<<<<< HEAD

Account.belongsToMany(Transaction, { through: 'transaction_acount' });
Transaction.belongsToMany(Account, { through: 'transaction_acount' });

Account.belongsToMany(Contact, { through: 'account_contact' })
Contact.belongsToMany(Account, { through: 'account_contact' })
=======
Account.belongsToMany(Transaction, { through: "transaction_acount" });
Transaction.belongsToMany(Account, { through: "transaction_acount" });

Account.belongsToMany(Contact, { through: "account_contact" });
Contact.belongsToMany(Account, { through: "account_contact" });

Account.belongsToMany(Contact, { through: "account_contact" });
Contact.belongsToMany(Account, { through: "account_contact" });
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

Account.hasMany(Card);
Card.belongsTo(Account);

<<<<<<< HEAD

/* Account.belongsToMany(Account, {through: 'user_contact'}) */

=======
/* Account.belongsToMany(Account, {through: 'user_contact'}) */
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
