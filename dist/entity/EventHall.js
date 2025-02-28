export default class EventHall {
    constructor(id, name, description, adress, createAt, updateAt, deleteAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.adress = adress;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getAdress() {
        return this.adress;
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
