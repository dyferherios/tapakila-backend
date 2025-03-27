export class EventDTO {
    constructor(id, eventHallId, hostId, userId, title, slug, description, startDate, startTime, endDate, endTime, ageLimit, createdAt, updatedAt, eventImage, category, allTicket) {
        this.id = id;
        this.eventHallId = eventHallId;
        this.hostId = hostId;
        this.userId = userId;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.ageLimit = ageLimit;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.eventImage = eventImage;
        this.category = category;
        this.allTicket = allTicket;
    }
    getAllTicket() {
        return this.allTicket;
    }
    getTicketTypeSold() {
        const ticketTypes = this.getAllTicket().map((ticket) => {
            return ticket.getticketType();
        });
        let ticketTypesSetted = new Set(ticketTypes);
        Array.from(ticketTypesSetted).forEach(ticketType => {
            const tickets = ticketTypes.filter(e => e.id == ticketType.getId());
            ticketTypesSetted;
        });
        return [];
    }
}
