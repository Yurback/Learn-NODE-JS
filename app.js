const http = require('http');
const fs = require('fs');

function rqListener(req, res) {  // Первый вариант положить функцию в http.createServer
}

const server = http.createServer((req, res) => {
    //    console.log(req);
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        // res.writeHead(200, {
        //     "Content-Type": "text/html; charset=utf-8"
        // });
        res.write('<head><meta charset="UTF-8"><title>Enter Message</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name="message"><button>Send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {

            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            // const parseBody =decodeURI(Buffer.concat(body).toString());  // Для декодирования русских букв, <meta charset="UTF-8">
            const parseBody = decodeURIComponent(Buffer.concat(body).toString());  // Для декодирования русских букв и символов, <meta charset="UTF-8">
            // const parseBody =Buffer.concat(body).toString(); // Без декодирования (англ.символы работают)
            console.log(parseBody);
            const msg = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', msg);
            //  err => {
                // res.statusCode = 302;
                // res.setHeader("Location", "/");
                // return res.end(); 
           
             
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();

    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title><head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit(); // Для выхода из работы сервера
});

server.listen(3000);


