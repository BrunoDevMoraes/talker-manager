const express = require('express');
const handleEmail = require('../middlewares/handleEmail');
const handlePassword = require('../middlewares/handlePassword');
const handleLoginOk = require('../middlewares/handleLoginOk');

const router = express.Router();

router.post('',
handleEmail,
handlePassword,
handleLoginOk);

module.exports = router;