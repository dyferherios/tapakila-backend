var _a;
import pool from '../db/datasource.js';
import { EventHall } from '../entity/EventHall.js';
class EventHallController {
}
_a = EventHallController;
EventHallController.getEventHalls = async (request, response) => {
    try {
        const results = await pool.query("SELECT * FROM public.event_hall");
        const EventHalls = results.rows.map((row) => {
            return new EventHall(row.id.toString(), row.name, row.decsription, row.created_at, row.updated_at);
        });
        response.status(200).json(EventHalls);
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
EventHallController.getEventHallById = async (eventHallId) => {
    try {
        const result = await pool.query("SELECT * FROM public.event_hall WHERE id = $1", [eventHallId]);
        if (result.rows.length === 0) {
            throw new Error("EventHall not found");
        }
        const eventHall = result.rows[0];
        return new EventHall(eventHall.id.toString(), eventHall.name, eventHall.decsription, eventHall.createdAt, eventHall.updatedAt);
    }
    catch (error) {
        throw error;
    }
};
EventHallController.saveEventHall = async (request, response) => {
    const { id, name, description } = request.body;
    try {
        const result = await pool.query("SELECT * FROM public.event_hall WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            const eventHall = result.rows[0];
            await pool.query("UPDATE public.event_hall SET name=$1, description=$2, updated_at = NOW() WHERE id = $3", [name, description, id]);
            const updatedEventHall = new EventHall(eventHall.id.toString(), name, description, eventHall.created_at, new Date());
            return response.status(200).json(updatedEventHall);
        }
        else {
            const newEventHall = await pool.query("INSERT INTO public.event_hall (name,description, created_at) VALUES ($1, $2, NOW()) RETURNING *", [name, description]);
            const createdEventHall = newEventHall.rows[0];
            const eventHall = new EventHall(createdEventHall.id.toString(), createdEventHall.name, createdEventHall.description, createdEventHall.created_at, createdEventHall.updated_at);
            return response.status(201).json(eventHall);
        }
    }
    catch (error) {
        response
            .status(500)
            .json({
            error: "An error occurred while saving/updating the event hall",
        });
    }
};
EventHallController.deleteEventHallById = async (eventHallId) => {
    try {
        await pool.query("DELETE FROM public.event_hall WHERE id=$1", [
            eventHallId,
        ]);
    }
    catch (error) {
        throw error;
    }
};
export { EventHallController };
