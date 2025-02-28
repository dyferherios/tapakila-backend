export default class User {
    constructor(id, name, contact, email, adress, image) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.adress = adress;
        this.image = image;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getEmail() {
        return this.email;
    }
    getAdress() {
        return this.adress;
    }
    getImage() {
        return this.image;
    }
}
