var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

//Creates Schema for Single Connection
var connectionSchema = new mongoose.Schema({
    connectionID: { type: Number, required: true },
    connectionName: { type: String, required: true },
    connectionTopic: { type: String, required: true },
    details: { type: String, required: true },
    connectionDateTime: { type: Date, required: true }
});
//Creates Schema for User Connections
var userConnectionSchema = new mongoose.Schema({
    connectionID: { type: Number, required: true },
    connectionName: { type: String, required: true },
    connectionTopic: { type: String, required: true },
    details: { type: String, required: true },
    connectionDateTime: { type: Date, required: true },
    rsvp: { type: String, required: true }
});

//Creates Models for User and All Connections DB
var dbConnection = mongoose.model('dbConnection', connectionSchema);
var userDBConnection = mongoose.model('userDBConnection', userConnectionSchema);


module.exports = {
    dbConnection: dbConnection,
    userDBConnection: userDBConnection
}