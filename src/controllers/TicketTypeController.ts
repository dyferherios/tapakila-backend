import pool from "../db/datasource.js";
import { TicketType } from "../entity/TicketType.js";
import { CurrencyController } from "./CurrencyController.js";
import { EventController } from "./EventController.js";
import { Currency } from '../entity/Currency';
import { create } from "domain";

class TicketTypeController {
  static getTicketTypes = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.ticket_type");
      const ticketTypes = await Promise.all(
        results.rows.map(async (row) => {
          const eventId = row.event_id.toString();
          const currencyId = row.currency_id.toString();
          const event = await EventController.getEventById(eventId);
          const currency = await CurrencyController.getCurrencyById(currencyId);
          return new TicketType(
            row.id.toString(),
            event,
            row.title,
            row.slug,
            row.description,
            row.available_ticket,
            row.price,
            currency,
            row.created_at,
            row.updated_at
          );
        })
      );

      response.status(200).json(ticketTypes);
    } catch (error) {
      response.status(500).json({ error });
    }
  };

  static getTicketTypeById = async (ticketTypeId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.ticket_type WHERE id = $1",
        [ticketTypeId]
      );

      if (result.rows.length === 0) {
        throw new Error("Ticket type not found");
      }

      const ticketType = result.rows[0];
      const eventId = ticketType.event_id.toString();
      const currencyId = ticketType.currency_id.toString();

      const event = await EventController.getEventById(eventId);
      const currency = await CurrencyController.getCurrencyById(currencyId);

      return new TicketType(
        ticketType.id.toString(),
        event,
        ticketType.title,
        ticketType.slug,
        ticketType.description,
        ticketType.available_ticket,
        ticketType.price,
        currency,
        ticketType.created_at,
        ticketType.updated_at
      );
    } catch (error: unknown) {
      if (error instanceof Error && error.message === "Ticket type not found") {
        throw error;
      } else {
        throw new Error("Failed to retrieve ticket type");
      }
    }
  };
  static getTicketTypeByEventId = async (eventId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.ticket_type WHERE event_id = $1",
        [eventId]
      );
      const ticketTypes = await Promise.all(
        result.rows.map(async (row) => {
          const currencyId = row.currency_id.toString();
          const event = await EventController.getEventById(eventId);
          const currency = await CurrencyController.getCurrencyById(currencyId);
          return new TicketType(
            row.id.toString(),
            event,
            row.title,
            row.slug,
            row.description,
            row.available_ticket,
            row.price,
            currency,
            row.created_at,
            row.updated_at
          );
        })
      );
      return ticketTypes;
    } catch (error) {
      throw new Error("Failed to retrieve user");
    }
  };

  static saveTicketType = async (request: any, response: any) => {
    try {
      const {
        id,
        title,
        slug,
        description,
        availableTicket,
        price,
        currency,
        event,
        createdAt,
        updatedAt,
      } = request.body;
      const result = await pool.query(
        "select * from public.ticket_type where id = $1",
        [id]
      );
      const currencyId = currency.id.toString();
      const eventId = event.id.toString();
      if (result.rows.length > 0) {
        const ticketTypeUpdated = await pool.query(
          "UPDATE public.ticket_type SET title = $1, slug = $2, description = $3, available_ticket = $4, price = $5, currency_id = $6, event_id = $7, created_at=$8, updated_at=NOW() WHERE id = $9 RETURNING id",
          [
            title,
            slug,
            description,
            availableTicket,
            price,
            currencyId,
            eventId,
            createdAt,
            id,
          ]
        );
        const ticketType = await TicketTypeController.getTicketTypeById(
          ticketTypeUpdated.rows[0].id
        );
        response.status(200).json(ticketType);
      } else {
        const ticketTypeCreated = await pool.query(
          "INSERT INTO public.ticket_type (title, slug, description, available_ticket, price, currency_id, event_id,created_at,updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7,NOW(),$8) RETURNING id",
          [
            title,
            slug,
            description,
            availableTicket,
            price,
            currencyId,
            eventId,
            updatedAt,
          ]
        );
        const ticketType = await TicketTypeController.getTicketTypeById(
          ticketTypeCreated.rows[0].id
        );
        response.status(200).json(ticketType);
      }
    } catch (error) {
      response.status(500).json({ error });
    }
  };

  static deleteTicketTypeById = async (ticketTypeId: string) => {
    try {
      const result = await pool.query(
        "select * from public.ticket_type where id = $1",
        [ticketTypeId]
      );
      if (result.rows.length > 0) {
        await pool.query("DELETE FROM public.ticket_type WHERE id = $1", [
          ticketTypeId,
        ]);
        return {
          success: true,
          message: "Ticket type deleted successfully",
          data: null,
        };
      } else {
        throw new Error("Ticket type not found");
      }
    } catch (error) {
      throw new Error("An error occurred while deleting the ticket type");
    }
  };
}

export { TicketTypeController };


