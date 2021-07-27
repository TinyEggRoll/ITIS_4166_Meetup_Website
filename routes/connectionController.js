var express = require('express');
var router = express.Router();
var connectionDB = require('./../models/connectionDB');
var connection1 = require('./../models/connection');

var connectionDB1 = new connectionDB();
var allConnections;
// Get Handler for all Request with a connectionID on the Path
router.get('/:connectID', async (req, res) => {
    //Gets the connectionID from URL
    var tempID = req.params.connectID;
    //Finds the Connection from DB
    var canFindSingleConnection = await connectionDB1.getConnection(tempID);
    // If Connection is found, render the Page with the Connection else render no Connection
    if (canFindSingleConnection !== null) {
        res.render('connection', { data: canFindSingleConnection, inSession: req.session.userProfile });
    }
    else {
        res.render('connection', { data: "No Connection", inSession: req.session.userProfile });
    }
})
// Get Handler for all Connections
router.get('/', async (req, res) => {
    //Renders All Connections Page with all Connections from DB
    allConnections = await connectionDB1.getConnections();
    res.render('connections', { data: allConnections, inSession: req.session.userProfile });
})
// Post Handler for All Connections
router.post('/', async (req, res) => {
    //Generate a Random Number 1-1000, and Create a Connection Object Based on Body Parameters. Adds to DB and Render all Connections Page
    var tempNewConnection = new connection1(Math.round((Math.random() * 10000)), req.body.namebox, req.body.topicbox, req.body.details, req.body.when);
    connectionDB1.setConnection(tempNewConnection);
    allConnections = await connectionDB1.getConnections();
    res.render('connections', { data: allConnections, inSession: req.session.userProfile });
})



module.exports = router;