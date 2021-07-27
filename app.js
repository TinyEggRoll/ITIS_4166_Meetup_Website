var express = require('express');
var app = express();
var path = process.cwd();
var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

var mainController = require('./routes/mainController');
var connectionController = require('./routes/connectionController');
var userController = require('./routes/userController')

app.use('/', mainController);

app.use('/connections', connectionController);

app.use('/myConnections', userController);

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.listen(3000);