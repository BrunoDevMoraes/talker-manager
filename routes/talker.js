const express = require('express');
const handleWatchedAt = require('../middlewares/handleWatchedAt');
const handleTalk = require('../middlewares/handleTalk');
const handleRate = require('../middlewares/handleRate');
const handleName = require('../middlewares/handleName');
const handleAuthorization = require('../middlewares/handleAuthorization');
const handleAge = require('../middlewares/handleAge');
const isItTalker = require('../middlewares/isItTalker');
const getAllTalkers = require('../middlewares/getAllTalkers');
const handleTalkerPostOk = require('../middlewares/handleTalkerPostOk');
const handleTalkerPutOk = require('../middlewares/handleTalkerPutOk');
const handleTalkerDeleteOk = require('../middlewares/handleTalkerDeleteOk');

const router = express.Router();

router.get('', getAllTalkers);

router.get('/:id', isItTalker);

router.post('',
handleAuthorization,
handleName,
handleAge,
handleWatchedAt,
handleRate,
handleTalk,
handleTalkerPostOk);

router.put('/:id',
handleAuthorization,
handleName,
handleAge,
handleWatchedAt,
handleRate,
handleTalk,
handleTalkerPutOk);

router.delete('/:id',
handleAuthorization,
handleTalkerDeleteOk);

module.exports = router;
