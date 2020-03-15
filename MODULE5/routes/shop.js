const path = require('path');

const express = require('express');

const rootdir = require('../utils/path')

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>HELLO FROM EXPRESS!</h1>')
    // res.sendFile('./views/shop.html') Так не работает
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
});

module.exports = router;