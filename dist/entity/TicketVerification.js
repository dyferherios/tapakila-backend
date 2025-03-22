export class TicketVerification {
    constructor(id, ticket, user, paymentConfirmed, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.ticket = ticket;
        this.user = user;
        this.paymentConfirmed = paymentConfirmed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getTicket() {
        return this.ticket;
    }
    getUser() {
        return this.user;
    }
    getPaymentConfirmed() {
        return this.paymentConfirmed;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getDeletedAt() {
        return this.deletedAt;
    }
    setId(id) {
        this.id = id;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    setUser(user) {
        this.user = user;
    }
    setPaymentConfirmed(paymentConfirmed) {
        this.paymentConfirmed = paymentConfirmed;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
    setDeletedAt(deletedAt) {
        this.deletedAt = deletedAt;
    }
}
