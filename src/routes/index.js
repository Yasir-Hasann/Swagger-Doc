// module imports
const express = require('express');

// file imports
const auth = require('./auth');
const docs = require('./docs');

// variable initializations
const router = express.Router();

router.use('/auth', auth);
router.use('/docs', docs);

module.exports = router;
