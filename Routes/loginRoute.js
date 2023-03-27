const express = require('express');

const logincntrlr = require('../Controllers/logincntrlr');

const router = express.Router();

router.post('/signup',logincntrlr.createUser);

router.post('/login',logincntrlr.validateUser);

module.exports = router;