import Organisateur from "./Organisateur.js";
import Reservation from "./Reservation.js";
import { Ticket } from "./Ticket.js";

export interface TicketsNumberWithPrice {
    type: Ticket,
    number: number,
    ticketPrice: number
}

export default class Event{
    id: string;
    eventName: string;
    eventDate: Date;
    eventDescription: string;
    eventLocation: string;
    allReservation: Reservation[];
    numberOfTicketsToSellWithType: TicketsNumberWithPrice[];
    organisateur: Organisateur;
    constructor(id: string, eventName: string, eventDate: Date, allReservation: Reservation[], numberOfTicketsToSellWithType: TicketsNumberWithPrice[], eventDescription: string, eventLocation: string, organisateur: Organisateur) {
        this.id = id;
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.allReservation = allReservation;
        this.numberOfTicketsToSellWithType = numberOfTicketsToSellWithType;
        this.eventDescription = eventDescription;
        this.eventLocation = eventLocation;
        this.organisateur = organisateur;
    }

    public addReservation(newResevation: Reservation): void{
        this.allReservation.push(newResevation);
    }

    public addTicketsNumberWithPrice(ticketsNumberWithPrice: TicketsNumberWithPrice): void{
        this.numberOfTicketsToSellWithType.push(ticketsNumberWithPrice);
    }

    
    public getId() : string {
        return this.id;
    }

    public getEventName() : string {
        return this.eventName;
    }
    
    public getEventDate() : Date {
        return this.eventDate;
    }

    public getAllReservation() : Reservation[] {
        return this.allReservation;
    }

    public getNumberOfTicketsToSellWithType() : TicketsNumberWithPrice[] {
        return this.numberOfTicketsToSellWithType;
    }

    public getOrganisateur(): Organisateur{
        return this.organisateur;
    }
}