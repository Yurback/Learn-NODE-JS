const path = require("path");
const bodyParser = require('body-parser');
const express = require("express");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const route_main = require("./routes/main");
const routes_users = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(route_main.routes);
app.use(routes_users);

app.use('/', (req, res, next) => {
    res.status(404).render('404', { doctitle: "hello world", path: '' });
});

app.listen(3000);