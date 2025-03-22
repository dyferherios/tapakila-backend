export class Ticket {
    constructor(id, event, ticketType, user, ticketNumber, amountPaid, currency, paymentConfirmed, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.event = event;
        this.ticketType = ticketType;
        this.user = user;
        this.ticketNumber = ticketNumber;
        this.amountPaid = amountPaid;
        this.currency = currency;
        this.paymentConfirmed = paymentConfirmed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getEvent() {
        return this.event;
    }
    getticketType() {
        return this.ticketType;
    }
    getUser() {
        return this.user;
    }
    getTicketNumber() {
        return this.ticketNumber;
    }
    getAmountPaid() {
        return this.amountPaid;
    }
    getCurrency() {
        return this.currency;
    }
    getPaymentConfirmed() {
        return this.paymentConfirmed;
    }
    getCreated() {
        return this.createdAt;
    }
    getUpdated() {
        return this.updatedAt;
    }
    getDeleted() {
        return this.deletedAt;
    }
    setId(id) {
        this.id = id;
    }
    setEvent(event) {
        this.event = event;
    }
    setticketType(ticketType) {
        this.ticketType = ticketType;
    }
    setUser(user) {
        this.user = user;
    }
    setTicketNumber(ticketNumber) {
        this.ticketNumber = ticketNumber;
    }
    setAmountPaid(amountPaid) {
        this.amountPaid = amountPaid;
    }
    setCurrency(currency) {
        this.currency = currency;
    }
    setPaymentConfirmed(paymentConfirmed) {
        this.paymentConfirmed = paymentConfirmed;
    }
    setCreated(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdated(updatedAt) {
        this.updatedAt = updatedAt;
    }
}
