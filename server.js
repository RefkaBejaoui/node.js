const http = require('http');

const server = http.createServer((req, res) => {
    //definir heder
    res.writeHead(200, {"Content-Type": 'text/html'})
    //send response
    res.end('<h1>Bonjour Node !!!!</h1>');
});

server.listen(4000, () => {
    console.log('Serveur démarré sur http://localhost:3000/');
});
