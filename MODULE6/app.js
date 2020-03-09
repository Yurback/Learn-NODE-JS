// const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req,res,next)=>{
    console.log('1');
    next();
});

app.use('/user-create', (req,res,next)=>{
    console.log("2");
    res.send('<h1>HELLO FROM EXPRESS______________!</h1>')
    // next();
});

app.use('/', (req,res,next)=>{
    console.log("3");
    res.send('<h1>HELLO FROM EXPRESS!</h1>')
});

app.listen(3000);

// IF used express js this part is unnecessery
// const server = http.createServer(app);

// server.listen(3000);
