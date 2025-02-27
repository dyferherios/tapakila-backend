import { Ticket } from "./Ticket.js";
import User from "./User.js";

export default class Reservation{
    id: string;
    user: User;
    ticketType: Ticket;
    isPayed: boolean;
    constructor(id: string, user: User, ticketType: Ticket, isPayed: boolean){
        this.id = id;
        this.user = user;
        this.ticketType = ticketType;
        this.isPayed = isPayed;
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
}