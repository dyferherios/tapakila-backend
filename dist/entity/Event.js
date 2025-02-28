export default class Event {
    constructor(id, eventName, eventDate, startTime, endTime, eventLocation, allReservation, numberOfTicketsToSellWithType, eventDescription, organisateur) {
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
    addReservation(newResevation) {
        this.allReservation.push(newResevation);
    }
    addNumberOfTicketsToSellWithType(TicketType) {
        this.numberOfTicketsToSellWithType.push(TicketType);
    }
    getId() {
        return this.id;
    }
    getEventName() {
        return this.eventName;
    }
    getEventDate() {
        return this.eventDate;
    }
    getAllReservation() {
        return this.allReservation;
    }
    getStartTIme() {
        return this.startTime;
    }
    getEndTIme() {
        return this.endTime;
    }
    getNumberOfTicketsToSellWithType() {
        return this.numberOfTicketsToSellWithType;
    }
    getOrganisateur() {
        return this.organisateur;
    }
}
