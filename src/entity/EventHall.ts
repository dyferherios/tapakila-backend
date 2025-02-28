export default class EventHall {
    id: string;
    name: string;
    description: string; 
    adress: string;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;
    constructor(id: string, name: string, description: string, adress: string, createAt: Date, updateAt: Date, deleteAt: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.adress = adress;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }

    public getId(): string {
        return this.id
    }


    public getName(): string {
        return this.name
    }

    public getDescription(): string {
        return this.description
    }

     public getAdress(): string {
        return this.adress
    }


    public getCreateAt() : Date {
        return this.createAt;
    }

    public getUpdateAt() : Date {
        return this.updateAt;
    }

    public getDeleteAt() : Date {
        return this.deleteAt;
    }
}