import pool from '../db/datasource.js';
import { EventHall } from '../entity/EventHall.js';

class EventHallController {
  static getEventHalls = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.event_hall");
      const EventHalls: EventHall[] = results.rows.map((row) => {
        return new EventHall(
          row.id.toString(),
          row.name,
          row.description,
          row.created_at,
          row.updated_at
        );
      });
      response.status(200).json(EventHalls);
    } catch (error) {
      response.status(500).json({ error });
    }
  };
  static getEventHallById = async (eventHallId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.event_hall WHERE id = $1",
        [eventHallId]
      );
      if (result.rows.length === 0) {
        throw new Error("EventHall not found");
      }
      const eventHall = result.rows[0];
      return new EventHall(
        eventHall.id.toString(),
        eventHall.name,
        eventHall.description,
        eventHall.createdAt,
        eventHall.updatedAt
      );
    } catch (error) {
      throw error;
    }
  };
  static saveEventHall = async (request: any, response: any) => {
    const { id, name, description } = request.body;

    try {
      const result = await pool.query(
        "SELECT * FROM public.event_hall WHERE id = $1",
        [id]
      );

      if (result.rows.length > 0) {
        const eventHall = result.rows[0];
        await pool.query(
          "UPDATE public.event_hall SET name=$1, description=$2, updated_at = NOW() WHERE id = $3",
          [name, description, id]
        );

        const updatedEventHall = new EventHall(
          eventHall.id.toString(),
          name,
          description,
          eventHall.created_at,
          new Date()
        );
        return response.status(200).json(updatedEventHall);
      } else {
        const newEventHall = await pool.query(
          "INSERT INTO public.event_hall (name,description, created_at) VALUES ($1, $2, NOW()) RETURNING *",
          [name, description]
        );

        const createdEventHall = newEventHall.rows[0];
        const eventHall = new EventHall(
          createdEventHall.id.toString(),
          createdEventHall.name,
          createdEventHall.description,
          createdEventHall.created_at,
          createdEventHall.updated_at
        );

        return response.status(201).json(eventHall);
      }
    } catch (error) {
      response
        .status(500)
        .json({
          error: "An error occurred while saving/updating the event hall",
        });
    }
  };

  static deleteEventHallById = async (eventHallId: string) => {
    try {
      const result = await pool.query(
        "select * from public.event_hall where id=$1",
        [eventHallId]
      );
      if (result.rows.length > 0) {
        await pool.query("DELETE FROM public.event_hall WHERE id=$1", [
          eventHallId,
        ]);
        return {
          success: true,
          message: "Event hall deleted successfully",
          data: null
        }
      }
    } catch (error) {
      throw Error("An error occurred while deleting event hall");
    }
  }
}

export {
    EventHallController
}