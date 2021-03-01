/* Clase que representa un anuciante de algun automovil en nuestra API */
class User {

    constructor(id, userName, firstName, lastName, phone, email, password, location, bio, profilePhoto) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.location = location;
        this.bio = bio;
        this.profilePhoto = profilePhoto;
        this.announcesList = [];
        this.purchaseRequestsList = [];
    }
}

module.exports = User;