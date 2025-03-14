export class Country {
    constructor(id, name, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
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
    setName(name) {
        this.name = name;
    }
    setCreated(createdAt) {
        this.createdAt = createdAt;
    }
    setUpdated(updatedAt) {
        this.updatedAt = updatedAt;
    }
    setDeleted(deletedAt) {
        this.deletedAt = deletedAt;
    }
}
