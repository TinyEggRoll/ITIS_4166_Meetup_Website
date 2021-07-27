var express = require('express');
var router = express.Router();

//Handles Main Index
router.get('/', (req, res) => {
    res.render('index', { inSession: req.session.userProfile });
})
//Handles Main Index
router.get('/index', (req, res) => {
    res.render('index', { inSession: req.session.userProfile });
})
//Handles About Page
router.get('/about', (req, res) => {
    res.render('about');
})
//Handles Contact Page
router.get('/contact', (req, res) => {
    res.render('contact');
})
//Handles Saved Connections Page
router.get('/savedConnections', (req, res) => {
    res.render('savedConnections', { inSession: req.session.userProfile });
})
//Handles New Connection Page
router.get('/newConnection', (req, res) => {
    if (req.session.userProfile === undefined) {
        res.render('index', { inSession: req.session.userProfile });
    }
    else {
        res.render('newConnection', { inSession: req.session.userProfile });
    }
})

module.exports = router;