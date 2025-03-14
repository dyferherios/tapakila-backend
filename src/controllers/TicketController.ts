import pool from "../db/datasource.js";
import { Ticket } from "../entity/Ticket.js";
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
                    const ticketTypeId = row.ticket_type_id
                      ? row.ticket_type_id.toString()
                      : null;
                    const userId = row.user_id ? row.user_id.toString() : null;
                    const currencyId = row.currency_id
                      ? row.currency_id.toString()
                      : null;
                    const eventId = row.event_id
                      ? row.event_id.toString()
                      : null;
                    if (!ticketTypeId || !userId || !currencyId || !eventId) {
                      console.error("One of the required IDs is missing:", row);
                      return null; 
                    }
                    const ticketType = await TicketTypeController.getTicketTypeById(ticketTypeId);
                    const user = await UserController.getUserById(userId);
                    const currency = await CurrencyController.getCurrencyById(currencyId);
                    const event = await EventController.getEventById(eventId);
                    return new Ticket(
                      row.id.toString(),
                        event,
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
            const eventId = ticket.event_id.toString();
            const ticketType = await TicketTypeController.getTicketTypeById(ticketTypeId);
            const user = await UserController.getUserById(userId);
            const currency = await CurrencyController.getCurrencyById(currencyId);
            const event = await EventController.getEventById(eventId);  
            return new Ticket(
                ticket.id.toString(),
                event,
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
            throw new Error("Failed to retrieve ticket");
        }
    };
  
  static getReservation = async (eventId: string) => {
    try {
      const results = await pool.query("SELECT * FROM ticket WHERE event_id = $1", [eventId]);
      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id.toString();
          const userId = row.user_id.toString();
          const currencyId = row.currency_id.toString();
          const eventId = row.event_id.toString();
          const ticketType = await TicketTypeController.getTicketTypeById(ticketTypeId);
          const user = await UserController.getUserById(userId);
          const currency = await CurrencyController.getCurrencyById(currencyId);
          const event = await EventController.getEventById(eventId);
          
          return new Ticket(
            row.id.toString(),
            event,
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
      
      return tickets;
    } catch (error) {
      throw error;
    }
  }}

export { TicketController };
