export default class User {
    id: string;
    name: string;
    contact: string;
    email: string;
    adress: string;
    image: string;
    constructor(id: string, name: string, contact: string, email: string, adress: string, image: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.adress = adress;
        this.image = image;
    }

    public getId(): string {
        return this.id;
    } 

    public getName(): string {
        return this.name;
    }

    public getContact(): string {
        return this.contact;
    }

    public getEmail(): string {
        return this.email;
    }

    public getAdress(): string {
        return this.adress;
    }

    public getImage(): string {
        return this.image;
    }

}