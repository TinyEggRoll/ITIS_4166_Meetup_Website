var user = require('./../models/user');
var dbConnection = require("./../models/connectionSchema").dbConnection;

var user1 = new user();

class userDB {

    constructor() { }
    //Return User Based on Email Provided
    getUser(email) {
        dbConnection.find({ email }, function (err, data) {
            if (err) return console.error(err);
        })
    }

}

module.exports = userDB;