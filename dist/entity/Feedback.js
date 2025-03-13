export class Feedback {
    constructor(id, userId, subject, message, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.userId = userId;
        this.subject = subject;
        this.message = message;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.userId;
    }
    getSubject() {
        return this.subject;
    }
    getMessage() {
        return this.message;
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
    setUserId(userId) {
        this.userId = userId;
    }
    setSubject(subject) {
        this.subject = subject;
    }
    setMessage(message) {
        this.message = message;
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
