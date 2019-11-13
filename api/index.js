const express = require('express');
const router = express.Router();

router.use('/project', require('./projectsRoute'));

module.exports = router;