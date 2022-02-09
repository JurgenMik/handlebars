// application packages
// express  kasutusle võtmine
// MVC model - view - controllers pattern

const express = require('express')
const app = express()
const path = require('path')

// add template engine
// Renderdus toimub vastavalt template vormistusele
const hbs = require('express-handlebars');

// setup template engine dir and file extensions
// määrab ära , kus ja mis file laiendiga template engine saab kasutada
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine ({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
}))

// setup static public directory
app.use(express.static('public'));

// Töötleb andmeid, mis tulevad läbi route requestide
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

// Defineerime , kus controller response asuvad
const articleRoutes = require('./routes/article'); // import article route
const authorRoutes = require('./routes/author');

// to use article route
// Vastavalt URL endpointile -> võta kasutusele määratud response controllerite kaustades
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', authorRoutes);

// app start
app.listen(3000, () => {
    console.log("APP iS started at http://localhost:3000");
});