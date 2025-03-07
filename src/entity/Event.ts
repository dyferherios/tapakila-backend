import EventHall from "./EventHall.js";
import Organisateur from "./Organisateur.js";
import Reservation from "./Reservation.js";
import TicketType from "./TicketType.js";

type TimeString = `${number}:${number}:${number}`;

export default class Event{
    id: string;
    eventName: string;
    eventDate: Date;
    eventDescription: string;
    eventLocation: EventHall;
    startTime: TimeString;
    endTime: TimeString;
    allReservation: Reservation[];
    numberOfTicketsToSellWithType: TicketType[];
    organisateur: Organisateur[];
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;    
    
    constructor(id: string, eventName: string, eventDate: Date,startTime: TimeString, endTime: TimeString,eventLocation: EventHall, allReservation: Reservation[], numberOfTicketsToSellWithType: TicketType[], eventDescription: string,  organisateur: Organisateur[], createAt: Date, updateAt: Date, deleteAt: Date) {
        this.id = id;
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLocation = eventLocation;
        this.allReservation = allReservation;
        this.numberOfTicketsToSellWithType = numberOfTicketsToSellWithType;
        this.eventDescription = eventDescription;
        this.organisateur = organisateur;
        this.createAt = createAt;
        this.updateAt = updateAt;
        this.deleteAt = deleteAt;
    }

    public addReservation(newResevation: Reservation): void{
        this.allReservation.push(newResevation);
    }

    public addNumberOfTicketsToSellWithType(TicketType: TicketType): void{
        this.numberOfTicketsToSellWithType.push(TicketType);
    }

    public addOrganisateur(newOrganisateur: Organisateur): void{
        this.organisateur.push(newOrganisateur);
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

    public getStartTIme() : TimeString {
        return this.startTime;
    }

    public getEndTIme() : TimeString {
        return this.endTime;
    }


    public getNumberOfTicketsToSellWithType() : TicketType[] {
        return this.numberOfTicketsToSellWithType;
    }

    public getOrganisateur(): Organisateur[]{
        return this.organisateur;
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