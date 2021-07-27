var User = require('./user');
var Connection = require('./connection');


class userConnection {

    constructor(connection, rsvp) {
        this.connection = connection;
        this.rsvp = rsvp;
    }
    //Returns All Connections
    getConnection() {
        return this.connection;
    }
    //Adds Connection to DataBase
    setConnection(data) {
        this.connection = data;
    }
    //Returns RSVP Value of a Connection
    getRSVP() {
        return this.rsvp;
    }
    // Adds RSVP to a Connection
    setRSVP(data) {
        this.rsvp = data;
    }


}

module.exports = userConnection;