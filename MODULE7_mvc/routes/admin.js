const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const prodController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', prodController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', prodController.postAddProduct);

module.exports = router;