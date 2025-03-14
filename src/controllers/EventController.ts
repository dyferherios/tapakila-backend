import pool from '../db/datasource.js';
import { Event } from '../entity/Event.js';
import { HostController } from './HostController.js';
import { UserController } from './UserControllers.js';
import { EventHallController } from './EventHallController.js';
import { TicketController } from './TicketController.js';
import { EventDTO } from '../entity/EventDTO.js';

class EventController {
  static getEvents = async (request: any, response: any) => {
    try {
      const results = await pool.query('SELECT * FROM public.event');
      const Events = await Promise.all(
        results.rows.map(async (row) => {
          const eventhallId = row.event_hall_id.toString();
          const hostId = row.host_id.toString();
          const userId = row.user_id.toString();
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          return new Event(
            row.id.toString(),
            eventHall,
            host,
            user,
            row.title,
            row.slug,
            row.description,
            row.start_date,
            row.start_time,
            row.end_date,
            row.end_time,
            row.age_limit,
            row.created_at,
            row.updated_at
          );
        })
      );

      response.status(200).json(Events);
    } catch (error) {
      response.status(500).json({ error });
    }
  };
  static getEventById = async (eventId: string) => {
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
      return new Event(
        event.id.toString(),
        eventHall,
        host,
        user,
        event.title,
        event.slug,
        event.description,
        event.startDate,
        event.startTime,
        event.endDate,
        event.endTime,
        event.ageLimit,
        event.created_at,
        event.updated_at
      );
    } catch (error) {
      throw error;
    }
  };

  static getEventWithAllReservation = async (request: any, response: any) => {
    try {
      const results = await pool.query('SELECT * FROM public.event');
      const events = await Promise.all(
        results.rows.map(async (row) => {
          const eventhallId = row.event_hall_id.toString();
          const hostId = row.host_id.toString();
          const userId = row.user_id.toString();
          const eventId = row.id.toString();
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          const reservations = await TicketController.getReservation(
            eventId
          );
          return new EventDTO(
            row.id.toString(),
            eventHall,
            host,
            user,
            row.title,
            row.slug,
            row.description,
            row.start_date,
            row.start_time,
            row.end_date,
            row.end_time,
            row.age_limit,
            row.created_at,
            row.updated_at,
            reservations
          );
        })
      );

      response.status(200).json(events);
    } catch (error) {
      response.status(500).json({ error });
    }
  };

  static getEventWithAllReservationOfOneEvent = async (eventId: string) => {
   try {
     const result = await pool.query('SELECT * FROM public.event WHERE id = $1', [
       eventId,
     ]);
     const event = result.rows[0];
     const eventhallId = event.event_hall_id.toString();
     const hostId = event.host_id.toString();
     const userId = event.user_id.toString();
     const reservations = await TicketController.getReservation(eventId);
     const eventHall = await EventHallController.getEventHallById(eventhallId);
     const host = await HostController.getHostById(hostId);
     const user = await UserController.getUserById(userId);
     
     const eventDto = new EventDTO(
       event.id.toString(),
       eventHall,
       host,
       user,
       event.title,
       event.slug,
       event.description,
       event.startDate,
       event.startTime,
       event.endDate,
       event.endTime,
       event.ageLimit,
       event.created_at,
       event.updated_at,
        reservations
     );
     eventDto.getTicketTypeSold();
     
     return eventDto;
   } catch (error) {
     throw error;
   }
  };

}

export {
    EventController
}