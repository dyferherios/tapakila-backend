import pool from '../db/datasource.js';
import { EventHall } from '../entity/EventHall.js';

class EventHallController {
    static getEventHalls = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM public.event_hall');
            const EventHalls: EventHall[] = results.rows.map((row) => {
                return new EventHall(
                    row.id.toString(),
                    row.name,
                    row.decsription,
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
        const result = await pool.query('SELECT * FROM public.event_hall WHERE id = $1', [eventHallId]);
        if (result.rows.length === 0) {
            throw new Error('EventHall not found');
        }
            const eventHall = result.rows[0]
            return new EventHall(
                    eventHall.id.toString(),
                    eventHall.name,
                    eventHall.decsription,
                    eventHall.createdAt,
                    eventHall.updatedAt
                );
        } catch (error) {
            throw error;
        }
    };

}

export {
    EventHallController
}