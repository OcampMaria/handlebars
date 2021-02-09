const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});


app.get('/signUp', (req, res) => {
    res.render('signUp');
});

app.get('/register', (req, res) => {
    res.render('./users/registration');
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});