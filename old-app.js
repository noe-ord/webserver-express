const http = require('http');


http.createServer( (req, res) => {
    res.writeHead(200, {'content-Type': 'application/json'});
    // res.write('hola Mundo');
    let salida = {
        nombre: 'noe',
        edad: '34',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);
console.log('Esto es el servicio de htttp');
