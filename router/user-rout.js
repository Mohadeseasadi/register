const express = require('express');

const router = express.Router();

const userControll = require('../controllers/user-controller')

router.post('/register',userControll.getNumber)

router.post('/code',userControll.postCode)

module.exports = router