export default class Event {
    constructor(id, eventName, eventDate, startTime, endTime, eventLocation, allReservation, numberOfTicketsToSellWithType, eventDescription, organisateur, createAt, updateAt, deleteAt) {
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
    addReservation(newResevation) {
        this.allReservation.push(newResevation);
    }
    addNumberOfTicketsToSellWithType(TicketType) {
        this.numberOfTicketsToSellWithType.push(TicketType);
    }
    addOrganisateur(newOrganisateur) {
        this.organisateur.push(newOrganisateur);
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
    getCreateAt() {
        return this.createAt;
    }
    getUpdateAt() {
        return this.updateAt;
    }
    getDeleteAt() {
        return this.deleteAt;
    }
}
