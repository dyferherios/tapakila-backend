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
TicketTypeController.getTicketTypeByEventId = async (eventId) => {
    try {
        const result = await pool.query("SELECT * FROM public.ticket_type WHERE event_id = $1", [eventId]);
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
TicketTypeController.saveTicketType = async (request, response) => {
    try {
        const { id, title, slug, description, available_ticket, price, currency_id, event_id, } = request.body;
        const result = await pool.query("select * from ticket_type where id = $1", [id]);
        if (result.rows.length > 0) {
            const ticketTypeUpdated = await pool.query("UPDATE public.ticket_type SET title = $1, slug = $2, description = $3, available_ticket = $4, price = $5, currency_id = $6, event_id = $7 WHERE id = $8 RETURNING *", [
                title,
                slug,
                description,
                available_ticket,
                price,
                currency_id,
                event_id,
                id,
            ]);
            response.status(200).json(ticketTypeUpdated);
        }
        else {
            const ticketTypeCreated = await pool.query("INSERT INTO public.ticket_type (title, slug, description, available_ticket, price, currency_id, event_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [
                title,
                slug,
                description,
                available_ticket,
                price,
                currency_id,
                event_id
            ]);
            response.status(201).json(ticketTypeCreated.rows[0]);
        }
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
TicketTypeController.deleteTicketType = async (request, response) => {
    try {
        const { id } = request.params;
        const result = await pool.query("select * from publit.ticket_type where id = $1", [id]);
        if (result.rows.length > 0) {
            const ticketTypeDeleted = await pool.query("DELETE FROM public.ticket_type WHERE id = $1", [id]);
            response.status(200).json(ticketTypeDeleted);
        }
        else {
            response.status(404).json({ error: "Ticket type not found" });
        }
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
export { TicketTypeController };
