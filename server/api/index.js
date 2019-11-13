const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Express working.")
})
router.use('/project', require('./projectsRoute'));

module.exports = router;