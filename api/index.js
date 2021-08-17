const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

<<<<<<< HEAD
conn.sync({force: true }).then(() => {
=======
conn.sync({force: false}).then(() => {
>>>>>>> 7278b78737516fe0318ee5261060f093807e1e28
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

  });
});


