var dbConnection = require("./../models/connectionSchema").dbConnection;

class ConnectionDB {
    constructor() { }
    //Returns All Connections
    getConnections() {
        return dbConnection.find({}, function (err, data) {
            if (err) return console.error(err);
        });
    };
    //Searches For Matching Single Connection And Returns
    getConnection(connectionID1) {
        return dbConnection.findOne({ connectionID: connectionID1 }, function (err, data) {
            if (err) return console.error(err);
        });
    }
    //Creates Connection And Adds to DataBase
    setConnection(data) {
        var tempConnection = new dbConnection({
            connectionID: data.connectionID,
            connectionName: data.connectionName,
            connectionTopic: data.connectionTopic,
            details: data.details,
            connectionDateTime: data.connectionDateTime
        });

        tempConnection.save(function (err, data) {
            if (err) return console.error(err);
        });
    }

}


module.exports = ConnectionDB;