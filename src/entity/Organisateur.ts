import User from "./User.js";

export default class Organisateur extends User{
    role: string;
    constructor(id: string, name: string, contact: string, email: string, adress: string, role: string){
        super(id, name, contact, email, adress);
        this.role = role;
    }
}