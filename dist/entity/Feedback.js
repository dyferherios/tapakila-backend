export class Feedback {
    constructor(id, user, subject, message, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.user = user;
        this.subject = subject;
        this.message = message;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getUser() {
        return this.user;
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
    setUser(user) {
        this.user = user;
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
