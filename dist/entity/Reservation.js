export default class Reservation {
    constructor(id, user, ticketType, isPayed) {
        this.id = id;
        this.user = user;
        this.ticketType = ticketType;
        this.isPayed = isPayed;
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
}
