export default class Event {
    constructor(id, eventName, eventDate, allReservation, numberOfTicketsToSellWithType, eventDescription, eventLocation, organisateur) {
        this.id = id;
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.allReservation = allReservation;
        this.numberOfTicketsToSellWithType = numberOfTicketsToSellWithType;
        this.eventDescription = eventDescription;
        this.eventLocation = eventLocation;
        this.organisateur = organisateur;
    }
    addReservation(newResevation) {
        this.allReservation.push(newResevation);
    }
    addTicketsNumberWithPrice(ticketsNumberWithPrice) {
        this.numberOfTicketsToSellWithType.push(ticketsNumberWithPrice);
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
    getNumberOfTicketsToSellWithType() {
        return this.numberOfTicketsToSellWithType;
    }
    getOrganisateur() {
        return this.organisateur;
    }
}
