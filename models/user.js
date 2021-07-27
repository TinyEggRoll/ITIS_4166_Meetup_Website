class User {
    constructor(userID, fName, lName, email) {
        this.userID = userID;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
    }
    //Gets & Sets User ID
    getUserID() {
        return this.userID;
    }
    setUserID(data) {
        this.userID = data;
    }
    //Gets & Sets First Name
    getfName() {
        return this.fname;
    }
    setfName(data) {
        this.fname = data;
    }
    //Gets & Sets Last Name
    getLName() {
        return this.lName;
    }
    setLName(data) {
        this.lName = data;
    }
    //Gets & Sets Email
    getEmail() {
        return this.email;
    }
    setEmail(data) {
        this.email = data;
    }

}

module.exports = User;