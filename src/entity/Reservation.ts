import { Ticket } from "./Ticket.js";
import User from "./User.js";

export default class Reservation{
    id: string;
    user: User;
    ticketType: Ticket;
    isPayed: boolean;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;
    
    constructor(id: string, user: User, ticketType: Ticket, isPayed: boolean, createAt: Date, updateAt: Date, deleteAt: Date){
        this.id = id;
        this.user = user;
        this.ticketType = ticketType;
        this.isPayed = isPayed;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }

    public getId(): string {
        return this.id;
    }

    public getUser(): User {
        return this.user;
    }

    public getTicket(): Ticket {
        return this.ticketType;
    }

    public getIsPayed(): boolean {
        return this.isPayed;
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