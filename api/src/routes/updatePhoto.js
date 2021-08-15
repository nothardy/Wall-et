const { Router } = require('express');
const { multerMiddleware } = require('../middlewares/multer');
const route = Router();
const { updatePhoto } = require('../controllers/updatePhoto');


route.post('/', multerMiddleware, updatePhoto);

module.exports = route;