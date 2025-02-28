export default class Reservation {
    constructor(id, user, ticketType, isPayed, createAt, updateAt, deleteAt) {
        this.id = id;
        this.user = user;
        this.ticketType = ticketType;
        this.isPayed = isPayed;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }
    getId() {
        return this.id;
    }
    getUser() {
        return this.user;
    }
    getTicket() {
        return this.ticketType;
    }
    getIsPayed() {
        return this.isPayed;
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
