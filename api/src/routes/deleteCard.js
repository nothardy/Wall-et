const { Router } = require('express');
const route = Router();
const { deleteCard } = require('../controllers/deleteCard');

route.delete('/:id', deleteCard)

module.exports = route;