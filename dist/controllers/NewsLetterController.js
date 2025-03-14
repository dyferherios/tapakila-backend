var _a;
import pool from '../db/datasource.js';
import { Newsletter } from '../entity/NewsLetter.js';
class NewsletterController {
}
_a = NewsletterController;
NewsletterController.getNewsletters = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.newsletter');
        const newsletters = results.rows.map((row) => {
            return new Newsletter(row.id.toString(), row.name, row.email, row.createdAt, row.updatedAt);
        });
        response.status(200).json(newsletters);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
NewsletterController.getNewsletterById = async (hostId) => {
    try {
        const result = await pool.query('SELECT * FROM public.newsletter WHERE id = $1', [hostId]);
        if (result.rows.length === 0) {
            throw new Error('Newsletter not found');
        }
        const newsletter = result.rows[0];
        return new Newsletter(newsletter.id.toString(), newsletter.name, newsletter.email, newsletter.createdAt, newsletter.updatedAt);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
export { NewsletterController };
