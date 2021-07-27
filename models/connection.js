class Connection {
    constructor(connectionID, connectionName, connectionTopic, details, connectionDateTime) {
        this.connectionID = connectionID;
        this.connectionName = connectionName;
        this.connectionTopic = connectionTopic;
        this.details = details;
        this.connectionDateTime = connectionDateTime;
    }

    //Gets & Sets Connection ID
    getConnectionID() {
        return this.connectionID;
    }
    setConnectionId(value) {
        this.connectionID = value;
    }
    //Gets & Sets Connection Name
    getConnectionName() {
        return this.connectionID;
    }
    setConnectionName(value) {
        this.connectionID = value;
    }
    //Gets & Sets Connection Topic
    getConnectionTopic() {
        return this.connectionID;
    }
    setConnectionTopic(value) {
        this.connectionID = value;
    }
    //Gets & Sets Connection Details
    getDetails() {
        return this.connectionID;
    }
    setDetails(value) {
        this.connectionID = value;
    }
    //Gets & Sets Connection Date Time
    getConnectionDateTime() {
        return this.connectionID;
    }
    setConnectionDateTime(value) {
        this.connectionID = value;
    }
}

module.exports = Connection;