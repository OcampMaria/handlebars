const express = require('express');
var PORT = process.env.PORT || 8080;
const exphbs = require('express-handlebars');
const app = express();
// var sassMiddleware = require("node-sass-middleware");
// app.use(sassMiddleware({
//     src: __dirname + "/sass",
//     dest: '/public'
//   }));

app.use(express.static("public"));


app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('./users/registration');
});

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  