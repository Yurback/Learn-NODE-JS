const path = require('path');
const express = require('express');
const rootdir = require("../utils/path");
const routes = express.Router();

routes.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'users.html'));
});

module.exports = routes;