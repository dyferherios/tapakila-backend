var _a;
import pool from '../db/datasource.js';
import { Event } from '../entity/Event.js';
import { HostController } from './HostController.js';
import { UserController } from './UserControllers.js';
import { EventHallController } from './EventHallController.js';
import { TicketController } from './TicketController.js';
import { EventDTO } from '../entity/EventDTO.js';
class EventController {
}
_a = EventController;
EventController.getEvents = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.event');
        const Events = await Promise.all(results.rows.map(async (row) => {
            const eventhallId = row.event_hall_id.toString();
            const hostId = row.host_id.toString();
            const userId = row.user_id.toString();
            const eventHall = await EventHallController.getEventHallById(eventhallId);
            const host = await HostController.getHostById(hostId);
            const user = await UserController.getUserById(userId);
            return new Event(row.id.toString(), eventHall, host, user, row.title, row.slug, row.description, row.start_date, row.start_time, row.end_date, row.end_time, row.age_limit, row.created_at, row.updated_at);
        }));
        response.status(200).json(Events);
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
EventController.getEventById = async (eventId) => {
    try {
        const result = await pool.query('SELECT * FROM public.event WHERE id = $1', [
            eventId,
        ]);
        if (result.rows.length === 0) {
            throw new Error("EventHall not found");
        }
        const event = result.rows[0];
        const eventhallId = event.event_hall_id.toString();
        const hostId = event.host_id.toString();
        const userId = event.user_id.toString();
        const eventHall = await EventHallController.getEventHallById(eventhallId);
        const host = await HostController.getHostById(hostId);
        const user = await UserController.getUserById(userId);
        return new Event(event.id.toString(), eventHall, host, user, event.title, event.slug, event.description, event.startDate, event.startTime, event.endDate, event.endTime, event.ageLimit, event.created_at, event.updated_at);
    }
    catch (error) {
        throw error;
    }
};
EventController.getEventWithAllTickets = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.event');
        const events = await Promise.all(results.rows.map(async (row) => {
            const eventhallId = row.event_hall_id.toString();
            const hostId = row.host_id.toString();
            const userId = row.user_id.toString();
            const eventId = row.id.toString();
            const eventHall = await EventHallController.getEventHallById(eventhallId);
            const host = await HostController.getHostById(hostId);
            const user = await UserController.getUserById(userId);
            const reservations = await TicketController.getAllTicketsByEventId(eventId);
            return new EventDTO(row.id.toString(), eventHall, host, user, row.title, row.slug, row.description, row.start_date, row.start_time, row.end_date, row.end_time, row.age_limit, row.created_at, row.updated_at, reservations);
        }));
        response.status(200).json(events);
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
EventController.getEventWithAllTicketsOfOneEvent = async (eventId) => {
    try {
        const result = await pool.query('SELECT * FROM public.event WHERE id = $1', [
            eventId,
        ]);
        const event = result.rows[0];
        const eventhallId = event.event_hall_id.toString();
        const hostId = event.host_id.toString();
        const userId = event.user_id.toString();
        const reservations = await TicketController.getAllTicketsByEventId(eventId);
        const eventHall = await EventHallController.getEventHallById(eventhallId);
        const host = await HostController.getHostById(hostId);
        const user = await UserController.getUserById(userId);
        const eventDto = new EventDTO(event.id.toString(), eventHall, host, user, event.title, event.slug, event.description, event.startDate, event.startTime, event.endDate, event.endTime, event.ageLimit, event.created_at, event.updated_at, reservations);
        eventDto.getTicketTypeSold();
        return eventDto;
    }
    catch (error) {
        throw error;
    }
};
EventController.getAllEventId = async (request, response) => {
    try {
        const result = await pool.query("select id from public.event");
        const eventsId = await Promise.all(result.rows.map(row => {
            return row.id.toString();
        }));
        response.status(200).json(eventsId);
    }
    catch (error) {
        throw new Error("An error occured while fetching eventId");
    }
};
EventController.saveEvent = async (request, response) => {
    const { id, eventHall, host, user, title, slug, description, startDate, startTime, endDate, endTime, ageLimit, createdAt, updatedAt } = request.body;
    try {
        const result = await pool.query("select * from public.event where id = $1", [id]);
        if (result.rows.length > 0) {
            await pool.query("update public.event set event_hall_id=$1, host_id=$2, user_id=$3, title=$4, slug=$5,description=$6, start_date=$7, start_time=$8, end_date=$9, end_time=$10, age_limit=$11, created_at=$12, updated_at=NOW() where id=$13", [
                eventHall.getId(),
                host.getId(),
                user.getId(),
                title,
                slug,
                description,
                startDate,
                startTime,
                endDate,
                endTime,
                ageLimit,
                createdAt
            ]);
            const eventUpdated = await _a.getEventById(id);
            response.status(200).json(eventUpdated);
        }
        else {
            const result = await pool.query("insert into public.event (event_hall_id, host_id, user_id, title, slug, description, start_date, start_time, end_date, end_time, age_limit, created_at, updated_at) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13)", [
                eventHall.getId(),
                host.getId(),
                user.getId(),
                title,
                slug,
                description,
                startDate,
                startTime,
                endDate,
                endTime,
                ageLimit,
                createdAt,
                updatedAt,
            ]);
            const eventCreated = await _a.getEventById(id);
            response.status(200).json(eventCreated);
        }
    }
    catch (error) {
        throw error;
    }
};
EventController.deleteEventById = async (eventId) => {
    try {
        const result = await pool.query("delete from public.event where id = $1", [eventId]);
        if (result.rows.length > 0) {
            await pool.query("delete from public.ticket where event_id = $1", [
                eventId,
            ]);
            return {
                success: true,
                message: "Event deleted successfully",
                data: null
            };
        }
    }
    catch (error) {
        throw Error("An error occured while deleting event");
    }
};
export { EventController };
