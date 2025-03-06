import { Ticket } from "./Ticket.js";

export default class TicketType {
    id: string;
    ticket: Ticket;
    description: string;
    price: number;
    number: number;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;
    constructor(id: string, ticket: Ticket, description: string, price: number, number: number, createAt: Date, updateAt: Date, deleteAt: Date) {
        this.id = id;
        this.ticket = ticket;
        this.description = description;
        this.price = price;
        this.number = number;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }
    
    public getId(): string {
        return this.id;
    } 

    public getTicket(): Ticket {
        return this.ticket;
    } 

    public getDescrition(): string {
        return this.description;
    } 

    public getPrice(): number {
        return this.price;
    } 

    public getNumber(): number {
        return this.number;
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