export default class User {
    constructor(id, name, contact, email, adress) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.adress = adress;
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
}
