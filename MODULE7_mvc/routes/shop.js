const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const AllProductController = require('../controllers/shop.js');

const router = express.Router();

router.get('/', AllProductController.getAllProducts);

module.exports = router;