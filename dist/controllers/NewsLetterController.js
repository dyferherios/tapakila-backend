var _a;
import pool from '../db/datasource.js';
import { Newsletter } from '../entity/NewsLetter.js';
class NewsletterController {
}
_a = NewsletterController;
NewsletterController.getNewsletters = async (request, response) => {
    try {
        const results = await pool.query("SELECT * FROM public.newsletter");
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
        const result = await pool.query("SELECT * FROM public.newsletter WHERE id = $1", [hostId]);
        if (result.rows.length === 0) {
            throw new Error("Newsletter not found");
        }
        const newsletter = result.rows[0];
        return new Newsletter(newsletter.id.toString(), newsletter.name, newsletter.email, newsletter.createdAt, newsletter.updatedAt);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
NewsletterController.saveNewsletter = async (request, response) => {
    const { id, name, email } = request.body;
    try {
        const result = await pool.query("SELECT * FROM public.newsletter WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            const newsletter = result.rows[0];
            await pool.query("UPDATE public.newsletter SET name = $1, email = $2, updated_at = NOW() WHERE id = $3", [name, email, id]);
            const updatedNewsletter = new Newsletter(newsletter.id.toString(), name, email, newsletter.created_at, new Date());
            return response.status(200).json(updatedNewsletter);
        }
        else {
            const newNewsletter = await pool.query("INSERT INTO public.newsletter (name, email, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *", [name, email]);
            const createdNewsletter = newNewsletter.rows[0];
            const newsletterObject = new Newsletter(createdNewsletter.id.toString(), createdNewsletter.name, createdNewsletter.email, createdNewsletter.created_at, createdNewsletter.updated_at);
            return response.status(201).json(newsletterObject);
        }
    }
    catch (error) {
        response
            .status(500)
            .json({
            error: "An error occurred while saving/updating the newsletter",
        });
    }
};
NewsletterController.deleteNewsLetterById = async (newsLetterId) => {
    try {
        const result = await pool.query("SELECT * FROM public.newsLetter WHERE id = $1", [newsLetterId]);
        if (result.rows.length > 0) {
            await pool.query("DELETE FROM public.newsLetter WHERE id = $1", [newsLetterId]);
            return {
                success: true,
                message: "NewsLetter deleted successfully",
                data: result.rows[0],
            };
        }
        else {
            throw new Error("newsLetter not found");
        }
    }
    catch (error) {
        throw new Error("An error occurred while deleting the newsLetter");
    }
};
export { NewsletterController };
