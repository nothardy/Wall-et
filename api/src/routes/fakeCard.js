const router = require('express').Router();
const {fakeCard} = require('../controllers/fakeCard');

router.get('/', fakeCard);

module.exports = router;