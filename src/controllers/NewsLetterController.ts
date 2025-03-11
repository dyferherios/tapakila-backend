import pool from '../db/datasource.js';
import { Newsletter } from '../entity/NewsLetter.js';

class NewsletterController {
    static getNewsletters = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM newsletter');
            const Newsletters: Newsletter[] = results.rows.map((row) => {
                return new Newsletter(
                    row.id.toString(),
                    row.name,
                    row.decsription,
                    row.createdAt,
                    row.updatedAt
                );
            });
            response.status(200).json(Newsletter);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };
    static getNewsletterById = async (hostId: string) => {
    try {
        const result = await pool.query('SELECT * FROM newsletter WHERE id = $1', [hostId]);
        if (result.rows.length === 0) {
            throw new Error('Newsletter not found');
        }
            const newsletter = result.rows[0];
            return new Newsletter(
                    newsletter.id.toString(),
                    newsletter.name,
                    newsletter.decsription,
                    newsletter.createdAt,
                    newsletter.updatedAt
                );
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

}

export {
    NewsletterController
}