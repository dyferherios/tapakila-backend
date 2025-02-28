import User from "./User.js";
export default class Organisateur extends User {
    constructor(id, name, contact, email, adress, image, role) {
        super(id, name, contact, email, adress, image);
        this.role = role;
    }
}
