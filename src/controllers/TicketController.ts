import pool from "../db/datasource.js";
import { Ticket } from "../entity/Ticket.js";
import { TicketType } from "../entity/TicketType.js";
import { CurrencyController } from "./CurrencyController.js";
import { EventController } from "./EventController.js";
import { TicketTypeController } from "./TicketTypeController.js";
import { UserController } from "./UserControllers.js";

class TicketController {
    static getTickets = async (request: any, response: any) => {
        try {
            const results = await pool.query("SELECT * FROM ticket");
            const tickets = await Promise.all(
                results.rows.map(async (row) => {
                    const ticketTypeId = row.ticket_type_id.toString();
                    const userId = row.user_id.toString();
                    const currencyId = row.currency_id.toString();
                    const ticketType = await TicketTypeController.getTicketTypeById(ticketTypeId);
                    const user = await UserController.getUserById(userId);
                    const currency = await CurrencyController.getCurrencyById(currencyId);
                    return new Ticket(
                        row.id.toString(),
                        ticketType,
                        user,
                        row.ticket_number,
                        row.amount_paid,
                        currency,
                        row.payment_confirmed,
                        row.created_at,
                        row.updated_at
                    );
                })
            );

            response.status(200).json(tickets);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };
    static getTicketById = async (ticketId: string) => {
        try {
            const result = await pool.query(
                "SELECT * FROM ticket WHERE id = $1",
                [ticketId]
            );
            const ticket = result.rows[0];
            const ticketTypeId = ticket.ticket_type_id.toString();
            const userId = ticket.user_id.toString();
            const currencyId = ticket.currency_id.toString();
            const ticketType = await TicketTypeController.getTicketTypeById(ticketTypeId);
            const user = await UserController.getUserById(userId);
            const currency = await CurrencyController.getCurrencyById(currencyId);
            return new Ticket(
                ticket.id.toString(),
                ticketType,
                user,
                ticket.ticket_number,
                ticket.amount_paid,
                currency,
                ticket.payment_confirmed,
                ticket.created_at,
                ticket.updated_at
            );
        } catch (error) {
            console.error(error);
            throw new Error("Failed to retrieve ticket");
        }
    };
}

export { TicketController };
