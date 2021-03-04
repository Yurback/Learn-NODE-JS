const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expresHbs = require('express-handlebars');

const app = express();

// app.engine('hbs',
//     expresHbs({
//         layoutsDir: 'views/layouts',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errController = require('./controllers/404.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(errController);

app.listen(3000);