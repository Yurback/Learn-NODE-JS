const http = require('http');

const callback = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {

        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write('<head><title>ASINGMENT_1</title><head>');
        res.write('<body><form action = "/create-user" method = "POST"><input type="text" name="username"><button>Send</button></form></body>');
        res.write("</html>");
       return res.end();
    };

    if (url === '/create-user' && method === 'POST') {
        console.log("Hello world!");
            const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parseBody = decodeURIComponent(Buffer.concat(body).toString());
            const msg = parseBody.split('=')[1];
            console.log(msg);
        })
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    };

    if (url === '/users') {

        res.setHeader('Content-type', 'text/html');
        res.write("<html>");
        res.write('<head><title>ASINGMENT_1</title><head>');
        res.write('<body><Ul><LI>User_1</LI> <LI>User_2</LI> <LI>User_3</LI></Ul></body>');
        res.write("</html>");
        return res.end();
    }

    res.setHeader('Content-type', 'text/html');
    res.write("<html>");
    res.write('<head><title>ASINGMENT_1</title><head>');
    res.write('<body>HELLO USER!</body>');
    res.write("</html>");
    res.end();

   };

const server = http.createServer(callback);
server.listen(3000, 'localhost');
