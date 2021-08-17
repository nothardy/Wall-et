const { Router } = require('express');
const route = Router();
const { deleteUser } = require('../controllers/deleteUser');

route.delete('/:id', deleteUser)

module.exports = route;