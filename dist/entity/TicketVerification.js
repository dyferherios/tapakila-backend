export class TicketVerification {
    constructor(id, ticketId, userId, paymentConfirmed, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.ticketId = ticketId;
        this.userId = userId;
        this.paymentConfirmed = paymentConfirmed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getTicketId() {
        return this.ticketId;
    }
    getUserId() {
        return this.userId;
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
    setTicketId(ticketId) {
        this.ticketId = ticketId;
    }
    setUserId(userId) {
        this.userId = userId;
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
