const express = require('express');
const router = express.Router();

const userCtrl = require('../controller/user');

router.get('/', userCtrl.displayUser);
router.post('/login', userCtrl.login);

module.exports = router;