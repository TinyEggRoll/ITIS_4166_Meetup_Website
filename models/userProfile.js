class UserProfile {

    constructor(user) {
        this.user = user;
    }
    //Returns User
    getUser() {
        return this.user;
    }
    // Adds User
    setUser(value) {
        this.user = value;
    }

}

module.exports = UserProfile;