const express = require('express');
const path = require('path');
const routes = express.Router();
const rootdir = require("../utils/path");


routes.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'main.html'))
});


module.exports = routes;