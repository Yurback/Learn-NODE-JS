// core modules
const path = require('path')
    // 3-rd party package
const express = require('express');

const mainroutes = require("./routes/main.js");
const userlistroutes = require("./routes/user-list.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(mainroutes);
app.use(userlistroutes);

app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})


app.listen(3000);