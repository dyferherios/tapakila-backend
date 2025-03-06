export default class TicketType {
    constructor(id, ticket, description, price, number, createAt, updateAt, deleteAt) {
        this.id = id;
        this.ticket = ticket;
        this.description = description;
        this.price = price;
        this.number = number;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
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
    getCreateAt() {
        return this.createAt;
    }
    getUpdateAt() {
        return this.updateAt;
    }
    getDeleteAt() {
        return this.deleteAt;
    }
}
