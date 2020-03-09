const express = require('express');

const app = express();


// 1 part
// app.use((req,res,next)=>{
//     console.log("1");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("2"); 
//     res.send('<h1>This is my first part</h1>')
// });

// 2 part
app.use('/users', (req,res,next)=>{
    console.log("1");
    res.send('<h1>Hello user!</h1>');
});

app.use('/', (req,res,next)=>{
    console.log("2"); 
    res.send('<h1>This is dummy</h1>');
});

app.listen(3000);


