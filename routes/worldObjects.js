const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('world objects route');
});

module.exports = router;