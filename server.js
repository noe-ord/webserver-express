const express = require('express');
const app = express();//aqui podemos utilizar express como quiera
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3020;

// middleware
// Carpeta publica (DE dominio publico)
// __dirname (hace o toma toda la ruta de nuestro sitio no importa y le agrega lo demas)
app.use( express.static(__dirname + '/public') );
// Express HBS engine(Se declara el uso de hbs como motor de renderizado de paginas)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




// cunado entren por / pasara lo que esta en la funcion
app.get('/', function (req, res) {
    // res.send('Esto es el inicio');
//   Para enviar variables a hbs cuando renderiso lo puedo hacer 
// Como segundo parametro en forma de objeto y asignado los valores
// de las variables que declara en la pagina a renderizar
    res.render('home', {
        nombre: 'Noe'
    });

})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/data', function (req, res) {
    res.send(`esto es data en ${req.url}`);

})

app.listen(port, () => {
    console.log(`El puerto del servidor es ${port}`);
});