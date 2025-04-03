import { log } from "console";
import pool from "../db/datasource.js";
import { Ticket } from "../entity/Ticket.js";
import { TicketDTO } from "../entity/TicketDTO.js";
import { CurrencyController } from "./CurrencyController.js";
import { EventController } from "./EventController.js";
import { TicketTypeController } from "./TicketTypeController.js";
import { UserController } from "./UserControllers.js";


class TicketController {
  static getTickets = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.ticket");
      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id
            ? row.ticket_type_id.toString()
            : null;
          const userId = row.user_id ? row.user_id.toString() : null;
          const currencyId = row.currency_id
            ? row.currency_id.toString()
            : null;
          const eventId = row.event_id ? row.event_id.toString() : null;
          if (!ticketTypeId || !userId || !currencyId || !eventId) {
            console.error("One of the required IDs is missing:", row);
            return null;
          }
          const ticketType = await TicketTypeController.getTicketTypeById(
            ticketTypeId
          );
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
        "SELECT * FROM public.ticket WHERE id = $1",
        [ticketId]
      );
      const ticket = result.rows[0];
      const ticketTypeId = ticket.ticket_type_id.toString();
      const userId = ticket.user_id.toString();
      const currencyId = ticket.currency_id.toString();
      const eventId = ticket.event_id.toString();
      const ticketType = await TicketTypeController.getTicketTypeById(
        ticketTypeId
      );
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

  static getAllTicketId = async () => {
    try {
      const result = await pool.query("select id from public.ticket");
      const ticketIds = result.rows.map((row) => row.id.toString());
      return ticketIds;
    } catch (error) {
      throw new Error("Error while fetching ticket id");
    }
  };

  static getAllTicketsByEventId = async (eventId: string) => {
    try {
      const results = await pool.query(
        "SELECT * FROM public.ticket WHERE event_id = $1",
        [eventId]
      );
      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id.toString();
          const userId = row.user_id.toString();
          const currencyId = row.currency_id.toString();
          const eventId = row.event_id.toString();
          const ticketType = await TicketTypeController.getTicketTypeById(
            ticketTypeId
          );
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
  };

  static getAllTicketsDTOByEventId = async (eventId: string) => {
    try {
      const results = await pool.query(
        "SELECT * FROM public.ticket WHERE event_id = $1",
        [eventId]
      );
      console.log(results);

      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id.toString();
          // const userId = row.user_id.toString();
          const currencyId = row.currency_id.toString();
          const eventId = row.event_id.toString();
          const ticketType = await TicketTypeController.getTicketTypeById(
            ticketTypeId
          );
          // const user = await UserController.getUserById(userId);
          const currency = await CurrencyController.getCurrencyById(currencyId);
          const event = await EventController.getEventById(eventId);

          return new TicketDTO(
            event.title,
            event.slug,
            ticketType.title,
            ticketType.description,
            ticketType.totalTicket,
            ticketType.availableTicket,
            ticketType.price,
            currency.title,
            row.ticket_number,
            row.created_at,
            row.updated_at
          );
        })
      );
      return tickets;
    } catch (error) {
      throw error;
    }
  };

  static getAllTicketsDTOByUserId = async (userId: string) => {
    try {
      const results = await pool.query(
        "SELECT * FROM public.ticket WHERE user_id = $1",
        [userId]
      );
      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id.toString();
          const currencyId = row.currency_id.toString();
          const eventId = row.event_id.toString();
          const ticketType = await TicketTypeController.getTicketTypeById(
            ticketTypeId
          );
          const currency = await CurrencyController.getCurrencyById(currencyId);
          const event = await EventController.getEventById(eventId);

          return new TicketDTO(
            event.title,
            event.slug,
            ticketType.title,
            ticketType.description,
            ticketType.totalTicket,
            ticketType.availableTicket,
            ticketType.price,
            currency.title,
            row.ticket_number,
            row.created_at,
            row.updated_at
          );
        })
      );
      return tickets;
    } catch (error) {
      throw error;
    }
  };

  static getAllTicketsByEventIdAndTicketTypeId = async (
    eventId: string,
    ticketTypeId: string
  ) => {
    try {
      const results = await pool.query(
        "SELECT * FROM public.ticket WHERE event_id = $1 and ticket_type_id = $2",
        [eventId, ticketTypeId]
      );
      const tickets = await Promise.all(
        results.rows.map(async (row) => {
          const ticketTypeId = row.ticket_type_id.toString();
          const userId = row.user_id.toString();
          const currencyId = row.currency_id.toString();
          const eventId = row.event_id.toString();
          const ticketType = await TicketTypeController.getTicketTypeById(
            ticketTypeId
          );
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
  };

  static saveTicket = async (request: any, response: any) => {
    try {
      const {
        id,
        event,
        ticketType,
        user,
        ticketNumber,
        amountPaid,
        currency,
        paymentConfirmed,
        createdAt,
        updatedAd,
      } = request.body;
      const result = await pool.query(
        "select * from public.ticket where id = $1",
        [id]
      );
      const eventId = event.id.toString();
      const ticketTypeId = ticketType.id.toString();
      const userId = user.id.toString();
      const currencyId = currency.id.toString();
      if (result.rows.length > 0) {
        const ticketUpdated = await pool.query(
          "UPDATE public.ticket SET event_id = $1, ticket_type_id = $2, user_id = $3, ticket_number = $4, amount_paid = $5, currency_id = $6, payment_confirmed = $7, updated_at=NOW() WHERE id = $8 RETURNING *",
          [
            eventId,
            ticketTypeId,
            userId,
            ticketNumber,
            amountPaid,
            currencyId,
            paymentConfirmed,
            id,
          ]
        );
        const idTicketUpdated = ticketUpdated.rows[0].id;
        const ticket = await TicketController.getTicketById(idTicketUpdated);
        response.status(200).json(ticket);
      } else {
        const ticketType = await TicketTypeController.getTicketTypeById(
          ticketTypeId
        );

        console.log(ticketType.availableTicket);
        
        const availableTicket = ticketType.availableTicket - 1;

        if (availableTicket < 0) {
          return response
            .status(400)
            .json({ message: "No available tickets left" });
        }

        const ticketSaved = await pool.query(
          "INSERT INTO public.ticket (event_id, ticket_type_id, user_id, ticket_number, amount_paid, currency_id, payment_confirmed, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING *",
          [
            eventId,
            ticketTypeId,
            userId,
            ticketNumber,
            amountPaid,
            currencyId,
            paymentConfirmed,
          ]
        );

        await pool.query(
          "update public.ticket_type set available_ticket=$1 where id=$2",
          [availableTicket, ticketTypeId]
        );

        const idTicketSaved = ticketSaved.rows[0].id;

        const ticket = await TicketController.getTicketById(idTicketSaved);

        response.status(200).json(ticket);
      }
    } catch (error) {
      throw error;
    }
  };

  static deleteTicketById = async (ticketId: string) => {
    try {
      const result = await pool.query(
        "select * from public.ticket where id = $1",
        [ticketId]
      );
      if (result.rows.length > 0) {
        await pool.query("DELETE FROM public.ticket WHERE id = $1", [ticketId]);
        return {
          success: true,
          message: "Ticket deleted successfully",
          data: null,
        };
      } else {
        throw new Error("Ticket type not found");
      }
    } catch (error) {
      throw error;
    }
  };
}

export { TicketController };
