/* Clase que representa un anuciante de algun automovil en nuestra API */
class User {

    constructor(id, username, firstName, lastName, typeOfUser, phone, email, password, location, bio, profilePhoto, announcementList, purchaseRequestsList) {
            this.id = id;
            this.username = username;
            this.firstName = firstName;
            this.lastName = lastName;
            this.typeOfUser = typeOfUser;
            this.phone = phone;
            this.email = email;
            this.password = password;
            this.location = location;
            this.bio = bio;
            this.profilePhoto = profilePhoto;
            this.announcementList = announcementList;
            this.purchaseRequestsList = purchaseRequestsList;
    }
}

module.exports = User;