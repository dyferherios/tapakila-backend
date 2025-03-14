export class Ticket {
    constructor(id, eventId, ticketType, userId, ticketNumber, amountPaid, currencyId, paymentConfirmed, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.eventId = eventId;
        this.ticketType = ticketType;
        this.userId = userId;
        this.ticketNumber = ticketNumber;
        this.amountPaid = amountPaid;
        this.currencyId = currencyId;
        this.paymentConfirmed = paymentConfirmed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getEventId() {
        return this.eventId;
    }
    getticketType() {
        return this.ticketType;
    }
    getUserId() {
        return this.userId;
    }
    getTicketNumber() {
        return this.ticketNumber;
    }
    getAmountPaid() {
        return this.amountPaid;
    }
    getCurrencyId() {
        return this.currencyId;
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
    setEventId(eventId) {
        this.eventId = eventId;
    }
    setticketType(ticketType) {
        this.ticketType = ticketType;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    setTicketNumber(ticketNumber) {
        this.ticketNumber = ticketNumber;
    }
    setAmountPaid(amountPaid) {
        this.amountPaid = amountPaid;
    }
    setCurrencyId(currencyId) {
        this.currencyId = currencyId;
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
