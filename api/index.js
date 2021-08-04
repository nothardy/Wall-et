const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
<<<<<<< HEAD

conn.sync({force: false}).then(() => {

=======
conn.sync({force: true}).then(() => {
>>>>>>> 16f6fb7064ca13f7caf6b5cd1c1e25aa3b106235
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
