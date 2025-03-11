import pool from '../db/datasource.js';
import { EventHall } from '../entity/EventHall.js';

class EventHallController {
    static getEventHalls = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM event_hall');
            const EventHalls: EventHall[] = results.rows.map((row) => {
                return new EventHall(
                    row.id.toString(),
                    row.name,
                    row.decsription,
                    row.createdAt,
                    row.updatedAt
                );
            });
            response.status(200).json(EventHalls);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };
    static getEventHallById = async (eventHallId: string) => {
    try {
        const result = await pool.query('SELECT * FROM event_hall WHERE id = $1', [eventHallId]);
        if (result.rows.length === 0) {
            throw new Error('EventHall not found');
        }
            const EventHall = result.rows[0];
            return new EventHall(
                    EventHall.id.toString(),
                    EventHall.name,
                    EventHall.decsription,
                    EventHall.createdAt,
                    EventHall.updatedAt
                );
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

}

export {
    EventHallController
}