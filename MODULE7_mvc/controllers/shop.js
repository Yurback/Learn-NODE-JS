const Products = require('../models/product.js');

exports.getAllProducts = (req, res, next) => {
    const products = Products.fetchAll((products) => {
        res.render('shop', {
            prods: products,
            doctitle: "shop",
            path: "/",
            hasProducts: products.length > 0,
            // activeShop: true,
            // productCSS: true,
        });
    });

};