const { Router } = require('express');
const route = Router();
const { updateProfile } = require('../controllers/updateProfile');

route.post('/', updateProfile)

module.exports = route;