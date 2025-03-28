import { EventHall } from "./EventHall.js";
import { Host } from "./Host.js";
import { Tag } from "./Tag.js";
import { Ticket } from "./Ticket.js";
import { TicketType } from "./TicketType.js";
import { User } from "./User.js";

export class EventDTO {
    id: string;
    eventHallId: EventHall;
    hostId: Host;
    userId: User;
    title: string;
    slug: string;
    description: string;
    startDate: Date;
    startTime: string;
    endDate: Date;
    endTime: string;
    ageLimit: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    eventImage: string;
    tag: Tag;
    allTicket: Ticket[];
    constructor(
        id: string,
        eventHallId: EventHall,
        hostId: Host,
        userId: User,
        title: string,
        slug: string,
        description: string,
        startDate: Date,
        startTime: string,
        endDate: Date,
        endTime: string,
        ageLimit: string,
        createdAt: Date,
        updatedAt: Date,
        eventImage: string,
        tag: Tag,
        allTicket: Ticket[]
    ) {
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
        this.tag = tag;
        this.allTicket = allTicket;
    }

    public getAllTicket(): Ticket[]{
        return this.allTicket;
    }

    public getTicketTypeSold(): TicketType[] {
        
        const ticketTypes = this.getAllTicket().map((ticket) => {
          return ticket.getticketType();
        });

        let ticketTypesSetted = new Set<TicketType>(ticketTypes);

        Array.from(ticketTypesSetted).forEach(ticketType => {
            const tickets = ticketTypes.filter(e => e.id == ticketType.getId());
            ticketTypesSetted
        });
        
        return [];
    }    
}