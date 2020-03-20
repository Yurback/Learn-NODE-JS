const path = require('path');
const express = require('express');
const router = express.Router();

const users = [];

router.get('/main', (req, res, next) => {
    res.render('main', { doctitle: "Add user", path: 'main' });
});

router.post('/main', (req, res, next) => {
    users.push({ name: req.body.name });
    res.redirect('/')
        // res.render('users', { doctitle: "Users", activeclass: 'users' });
});

exports.routes = router;
exports.users = users;