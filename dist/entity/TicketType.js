export default class name {
    constructor(id, ticket, description, price, number) {
        this.id = id;
        this.ticket = ticket;
        this.description = description;
        this.price = price;
        this.number = number;
    }
    getId() {
        return this.id;
    }
    getTicket() {
        return this.ticket;
    }
    getDescrition() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getNumber() {
        return this.number;
    }
}
