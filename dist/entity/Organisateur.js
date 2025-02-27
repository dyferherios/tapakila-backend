import User from "./User.js";
export default class Organisateur extends User {
    constructor(id, name, contact, email, adress, role) {
        super(id, name, contact, email, adress);
        this.role = role;
    }
}
