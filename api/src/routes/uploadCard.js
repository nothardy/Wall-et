const { Router } = require('express');
const route = Router();
const { uploadCard } = require('../controllers/uploadCard');

route.post('/', uploadCard)

module.exports = route;