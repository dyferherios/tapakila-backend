import Organisateur from "./Organisateur.js";
import Reservation from "./Reservation.js";
import TicketType from "./TicketType.js";


export default class Event{
    id: string;
    eventName: string;
    eventDate: Date;
    eventDescription: string;
    eventLocation: string;
    startTime: TimeRanges;
    endTime: TimeRanges;
    allReservation: Reservation[];
    numberOfTicketsToSellWithType: TicketType[];
    organisateur: Organisateur;
    constructor(id: string, eventName: string, eventDate: Date,startTime: TimeRanges, endTime: TimeRanges,eventLocation: string, allReservation: Reservation[], numberOfTicketsToSellWithType: TicketType[], eventDescription: string,  organisateur: Organisateur) {
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
    }

    public addReservation(newResevation: Reservation): void{
        this.allReservation.push(newResevation);
    }

    public addNumberOfTicketsToSellWithType(TicketType: TicketType): void{
        this.numberOfTicketsToSellWithType.push(TicketType);
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

    public getStartTIme() : TimeRanges {
        return this.startTime;
    }

    public getEndTIme() : TimeRanges {
        return this.endTime;
    }


    public getNumberOfTicketsToSellWithType() : TicketType[] {
        return this.numberOfTicketsToSellWithType;
    }

    public getOrganisateur(): Organisateur{
        return this.organisateur;
    }


}