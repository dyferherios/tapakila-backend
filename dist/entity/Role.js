export class Role {
    constructor(id, title, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
    getCreatedAt() { return this.createdAt; }
    getUpdatedAt() { return this.updatedAt; }
    setTitle(title) { this.title = title; }
    setUpdatedAt(updatedAt) { this.updatedAt = updatedAt; }
}
