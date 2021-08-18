const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

<<<<<<< HEAD
conn.sync({force: false}).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

=======
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`); // eslint-disable-line no-console
>>>>>>> 546f62db966214f91a3f258460809c8c9b4656a9
  });
});


