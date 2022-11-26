const express = require('express');
const router = express.Router();

const characterCtrl = require('../controller/character');

router.get('/', characterCtrl.displayCharacter);

module.exports = router;