import { Ticket } from "./Ticket.js";

export default class name {
    id: string;
    ticket: Ticket;
    description: string;
    price: number;
    number: number;
    constructor(id: string, ticket: Ticket, description: string, price: number, number: number) {
        this.id = id;
        this.ticket = ticket;
        this.description = description;
        this.price = price;
        this.number = number;
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

}