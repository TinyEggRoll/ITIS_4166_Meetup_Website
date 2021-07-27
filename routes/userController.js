var express = require('express');
var router = express.Router();
var userProfile = require('./../models/userProfile');
var userProfileDB = require('./../models/userProfileDB');
var connectionDB = require('./../models/connectionDB');

var allUserConnections;
var userProfile1 = new userProfile("Norm");
var userProfileDB1 = new userProfileDB();
var connectionDB1 = new connectionDB();
//Handles Sign Out Page, Destroys Session
router.get('/signOut', async (req, res) => {
    req.session.destroy();
    res.render("index", { inSession: undefined });
})
//Handles Main Index for Users
router.get('/', async (req, res) => {
    allUserConnections = await userProfileDB1.getConnections();
    res.render('savedConnections', { data: allUserConnections });
})
//Handles Post for Users
router.post('/', async (req, res) => {
    // If the userdasboard receives a POST with the body parameter = delete, find the connection and delete the connection FROM DB
    // render the page.
    if (req.body.status === "delete") {
        var doesConnectionExist = await userProfileDB1.getConnection(req.body.connectionIDTemp);
        userProfileDB1.removeConnection(doesConnectionExist);
        allUserConnections = await userProfileDB1.getConnections();
        res.render('savedConnections', { data: allUserConnections });
    }
    else if (req.body.status === "update") {
        //If User Hits Update, redirect to the matching Connection Page
        res.redirect('/connections/' + req.body.connectionIDTemp);
    }
    // if Get a RSVP Value, then find the connection, if it does not exist then create the connection and add to DB, else
    // Update the RSVP value of the connection in DB
    else if (req.body.rsvp === 'yes' || req.body.rsvp === 'no' || req.body.rsvp === 'maybe') {
        var doesConnectionExist = await userProfileDB1.getConnection(req.body.connectionIDTemp);
        if (doesConnectionExist === null) {
            // if connection does not exist, then we add the new connection
            var tempConnection = await connectionDB1.getConnection(req.body.connectionIDTemp);
            userProfileDB1.setConnection(tempConnection, req.body.rsvp);

            allUserConnections = await userProfileDB1.getConnections();
            allUserConnections = await userProfileDB1.getConnections();

            res.render('savedConnections', { data: allUserConnections });

        } else { // if connection exists, we update the connection
            var tempConnection = await userProfileDB1.getConnection(req.body.connectionIDTemp);
            userProfileDB1.updateConnection(tempConnection, req.body.rsvp);
            allUserConnections = await userProfileDB1.getConnections();
            res.render('savedConnections', { data: allUserConnections });
        }
    }
    else { // trying to sign in; initializes the user session
        req.session.userProfile = userProfile1;
        allUserConnections = await userProfileDB1.getConnections();
        res.render('savedConnections', { data: allUserConnections });
    }
})




module.exports = router;