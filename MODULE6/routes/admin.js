const path = require('path');

const express = require('express');

const rootdir = require('../utils/path')

const router = express.Router();

router.get('/add-product', (req,res,next)=>{
    //  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
    // next();
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});

router.post('/add-product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports = router;