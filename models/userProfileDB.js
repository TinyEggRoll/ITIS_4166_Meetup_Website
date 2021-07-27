var userDBConnection = require("./../models/connectionSchema").userDBConnection;

class userProfileDB {
    constructor() { }
    //Returns all Connections
    getConnections() {
        return userDBConnection.find(function (err, data) {
            if (err) return console.error(err);
        });
    };
    //Finds Single Matching Connection and Returns
    getConnection(connectionNumber) {
        return userDBConnection.findOne({ connectionID: connectionNumber }, function (err, data) {
            if (err) return console.error(err);
        })
    }
    //Creates Connection and Adds Connection To DB
    setConnection(data, rsvpID) {
        var tempConnection = new userDBConnection({
            connectionID: data.connectionID,
            connectionName: data.connectionName,
            connectionTopic: data.connectionTopic,
            details: data.details,
            connectionDateTime: data.connectionDateTime,
            rsvp: rsvpID
        });
        tempConnection.save(function (err, data) {
            if (err) return console.error(err);
        });
    }
    //Update's Connection Based On Different Value
    updateConnection(data, rsvpID) {
        userDBConnection.findOneAndUpdate({ connectionID: data.connectionID }, { rsvp: rsvpID }, { new: true }, (err, doc) => {
            if (err) return console.error(err);
        });
    }
    //Removes Matching Connection and Deletes from DB
    removeConnection(data) {
        userDBConnection.deleteOne({ connectionID: data.connectionID }, function (err, data) {
            if (err) return console.error(err);
        })
    }
}

module.exports = userProfileDB;