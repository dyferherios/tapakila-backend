import pool from "../db/datasource.js";
import { Event } from "../entity/Event.js";
import { HostController } from "./HostController.js";
import { UserController } from "./UserControllers.js";
import { EventHallController } from "./EventHallController.js";
import { TicketController } from "./TicketController.js";
import { EventDTO } from "../entity/EventDTO.js";
import { Response } from "express";
import express from 'express';
import { TagController } from "./TagController.js";

class EventController {
  static getEvents = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.event");
      const Events = await Promise.all(
        results.rows.map(async (row) => {
          const eventhallId = row.event_hall_id.toString();
          const hostId = row.host_id.toString();
          const userId = row.user_id.toString();
          const tagId = row.tag_id.toString();
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          const tag = await TagController.getTagById(tagId);
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
            row.updated_at,
            row.event_image,
            tag
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
      const result = await pool.query(
        "SELECT * FROM public.event WHERE id = $1",
        [eventId]
      );
      if (result.rows.length === 0) {
        throw new Error("Event not found");
      }
      const event = result.rows[0];
      const eventhallId = event.event_hall_id.toString();
      const hostId = event.host_id.toString();
      const userId = event.user_id.toString();
      const tagId = event.tag_id.toString();
      const tag = await TagController.getTagById(tagId);
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
        event.start_date,
        event.start_time,
        event.end_date,
        event.end_time,
        event.age_limit,
        event.created_at,
        event.updated_at,
        event.event_image,
        tag
      );
    } catch (error) {
      throw error;
    }
  };

  static getEventWithAllTickets = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.event");
      const events = await Promise.all(
        results.rows.map(async (row) => {
          const eventhallId = row.event_hall_id.toString();
          const hostId = row.host_id.toString();
          const userId = row.user_id.toString();
          const eventId = row.id.toString();
          const tagId = row.tag_id.toString();
          const tag = await TagController.getTagById(tagId);
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          const reservations = await TicketController.getAllTicketsByEventId(
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
            row.event_image,
            tag,
            reservations
          );
        })
      );

      response.status(200).json(events);
    } catch (error) {
      response.status(500).json({ error });
    }
  };

  static getEventWithAllTicketsDTO = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.event");
      const events = await Promise.all(
        results.rows.map(async (row) => {
          const eventhallId = row.event_hall_id.toString();
          const hostId = row.host_id.toString();
          const userId = row.user_id.toString();
          const eventId = row.id.toString();
          const tagId = row.tag_id.toString();
          const tag = await TagController.getTagById(tagId);
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          const reservations = await TicketController.getAllTicketsDTOByEventId(
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
            row.event_image,
            tag,
            reservations
          );
        })
      );

      response.status(200).json(events);
    } catch (error) {
      response.status(500).json({ error });
    }
  };

  static getEventWithAllTicketsOfOneEvent = async (eventId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.event WHERE id = $1",
        [eventId]
      );
      const event = result.rows[0];
      const eventhallId = event.event_hall_id.toString();
      const hostId = event.host_id.toString();
      const userId = event.user_id.toString();
      const tagId = event.tag_id.toString();
      const tag = await TagController.getTagById(tagId);
      const reservations = await TicketController.getAllTicketsByEventId(
        eventId
      );
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
        event.event_image,
        tag,
        reservations
      );

      // eventDto.getTicketTypeSold();

      return eventDto;
    } catch (error) {
      throw error;
    }
  };

  static getEventWithAllTicketsDTOfOneEvent = async (eventId: string) => {
    try {
      const results = await pool.query(
        "SELECT * FROM public.event where id=$1",
        [eventId]
      );
      const event = results.rows[0];
          const eventhallId = event.event_hall_id.toString();
          const hostId = event.host_id.toString();
          const userId = event.user_id.toString();

          const tagId = event.tag_id.toString();
          const tag = await TagController.getTagById(tagId);
          const eventHall = await EventHallController.getEventHallById(
            eventhallId
          );
          const host = await HostController.getHostById(hostId);
          const user = await UserController.getUserById(userId);
          const reservations = await TicketController.getAllTicketsDTOByEventId(
            eventId
          );
          const eventDto = new EventDTO(
            event.id.toString(),
            eventHall,
            host,
            user,
            event.title,
            event.slug,
            event.description,
            event.start_date,
            event.start_time,
            event.end_date,
            event.end_time,
            event.age_limit,
            event.created_at,
            event.updated_at,
            event.event_image,
            tag,
            reservations
          );
          return eventDto;
    } catch (error) {
      throw error;
    }
  };

  static getEventWithAllTicketsByTag = async (tagId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.event WHERE tag_id = $1",
        [tagId]
      );
      const event = result.rows[0];
      const eventhallId = event.event_hall_id.toString();
      const hostId = event.host_id.toString();
      const userId = event.user_id.toString();
      const tag = await TagController.getTagById(tagId);
      const reservations = await TicketController.getAllTicketsByEventId(
        event.id.toString()
      );
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
        event.event_image,
        tag,
        reservations
      );
      // eventDto.getTicketTypeSold();
      return eventDto;
    } catch (error) {
      throw error;
    }
  };

  static getAllEventId = async () => {
    try {
      const result = await pool.query("SELECT id FROM public.event");
      const eventsId = result.rows.map((row) => row.id.toString());
      return eventsId;
    } catch (error) {
      console.error("Error in getAllEventId:", error);
    }
  };
  static saveEvent = async (request: any, response: any) => {
    const {
      id,
      eventHall,
      host,
      user,
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
      eventImage,
      tag,
    } = request.body;

    try {
      const eventHallId = eventHall.id.toString();
      const hostId = host.id.toString();
      const userId = user.id.toString();
      const tagId = tag.id.toString();

      if (id) {
        const result = await pool.query(
          "UPDATE public.event SET event_hall_id=$1, host_id=$2, user_id=$3, title=$4, slug=$5, description=$6, start_date=$7, start_time=$8, end_date=$9, end_time=$10, age_limit=$11, created_at=$12, updated_at=NOW(), event_image=$13,tag_id=$14 WHERE id=$15 RETURNING id",
          [
            eventHallId,
            hostId,
            userId,
            title,
            slug,
            description,
            startDate,
            startTime,
            endDate,
            endTime,
            ageLimit,
            createdAt,
            eventImage,
            tagId,
            id,
          ]
        );

        if (result.rows.length === 0) {
          throw new Error("Event not found for update");
        }

        const updatedEventId = result.rows[0].id;
        const eventUpdated = await EventController.getEventById(updatedEventId);
        response.status(200).json(eventUpdated);
      } else {
        const result = await pool.query(
          "INSERT INTO public.event (event_hall_id, host_id, user_id, title, slug, description, start_date, start_time, end_date, end_time, age_limit, created_at, updated_at, event_image, tag_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,NOW(), NOW(), $12, $13) RETURNING id",
          [
            eventHallId,
            hostId,
            userId,
            title,
            slug,
            description,
            startDate,
            startTime,
            endDate,
            endTime,
            ageLimit,
            eventImage,
            tagId,
          ]
        );

        const newEventId = result.rows[0].id;
        const eventCreated = await EventController.getEventById(newEventId);
        response.status(201).json(eventCreated);
      }
    } catch (error) {
      console.error("Error in saveEvent:", error);
      response
        .status(500)
        .json({ error: "An error occurred while saving the event." });
    }
  };

  static deleteEventById = async (eventId: string) => {
    try {
      const result = await pool.query(
        "delete from public.event where id = $1",
        [eventId]
      );
      if (result.rows.length > 0) {
        await pool.query("delete from public.event where event_id = $1", [
          eventId,
        ]);
        return {
          success: true,
          message: "Event deleted successfully",
          data: null,
        };
      }
    } catch (error) {
      throw Error("An error occured while deleting event");
    }
  };
}

export { EventController };
