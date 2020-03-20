const users = require("./main");
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('users', {
        list: users.users,
        doctitle: "Users",
        path: '/'
    })
});

module.exports = router;