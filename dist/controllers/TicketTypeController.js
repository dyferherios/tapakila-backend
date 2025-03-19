var _a;
import pool from "../db/datasource.js";
import { TicketType } from "../entity/TicketType.js";
import { CurrencyController } from "./CurrencyController.js";
import { EventController } from "./EventController.js";
class TicketTypeController {
}
_a = TicketTypeController;
TicketTypeController.getTicketTypes = async (request, response) => {
    try {
        const results = await pool.query("SELECT * FROM public.ticket_type");
        const ticketTypes = await Promise.all(results.rows.map(async (row) => {
            const eventId = row.event_id.toString();
            const currencyId = row.currency_id.toString();
            const event = await EventController.getEventById(eventId);
            const currency = await CurrencyController.getCurrencyById(currencyId);
            return new TicketType(row.id.toString(), event, row.title, row.slug, row.description, row.available_ticket, row.price, currency, row.created_at, row.updated_at);
        }));
        response.status(200).json(ticketTypes);
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
TicketTypeController.getTicketTypeById = async (ticketTypeId) => {
    try {
        const result = await pool.query("SELECT * FROM public.ticket_type WHERE id = $1", [ticketTypeId]);
        const ticketType = result.rows[0];
        const eventId = ticketType.event_id.toString();
        const currencyId = ticketType.currency_id.toString();
        const event = await EventController.getEventById(eventId);
        const currency = await CurrencyController.getCurrencyById(currencyId);
        return new TicketType(ticketType.id.toString(), event, ticketType.title, ticketType.slug, ticketType.description, ticketType.available_ticket, ticketType.price, currency, ticketType.created_at, ticketType.updated_at);
    }
    catch (error) {
        throw new Error("Failed to retrieve user");
    }
};
TicketTypeController.getTicketTypeByIdOfAnEvent = async (eventId) => {
    try {
        console.log("getTicketTypeByIdOfAnEvent called with eventId:", eventId);
        const result = await pool.query("SELECT * FROM public.ticket_type WHERE event_id = $1", [eventId]);
        console.log(result);
        const ticketTypes = await Promise.all(result.rows.map(async (row) => {
            const currencyId = row.currency_id.toString();
            const event = await EventController.getEventById(eventId);
            const currency = await CurrencyController.getCurrencyById(currencyId);
            return new TicketType(row.id.toString(), event, row.title, row.slug, row.description, row.available_ticket, row.price, currency, row.created_at, row.updated_at);
        }));
        return ticketTypes;
    }
    catch (error) {
        throw new Error("Failed to retrieve user");
    }
};
export { TicketTypeController };
