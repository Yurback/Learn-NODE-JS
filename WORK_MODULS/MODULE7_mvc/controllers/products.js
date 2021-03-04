const Product = require('../models/product.js');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        doctitle: 'Add Product',
        path: 'admin/add-product',
        activeProduct: true,
        formsCSS: true,
        productCSS: true
    })
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}