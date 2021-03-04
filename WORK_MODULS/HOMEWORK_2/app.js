const express = require('express');

const app = express();


// 1 part
app.use((req,res,next)=>{
    console.log("1");
    next();
});

app.use((req,res,next)=>{
    console.log("2"); 
    res.send('<link rel="shortcut icon" href="http://localhost/" />' +
    '<h1>This is my first part</h1>');
});

// 2 part
// app.use('/users', (req,res,next)=>{
//     console.log('1');
//     res.send('<head><link rel="shortcut icon" href="http://localhost/" /></head><p>Hello user!</p>');
// });

// app.use('/', (req,res,next)=>{
//     console.log('2'); 
//     res.send('<head><link rel="shortcut icon" href="http://localhost/" /></head><p>This is dummy</p>');
// });

app.listen(3000);


