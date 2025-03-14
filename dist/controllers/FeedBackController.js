var _a;
import pool from '../db/datasource.js';
import { Feedback } from '../entity/Feedback.js';
import { UserController } from './UserControllers.js';
class FeedbackController {
}
_a = FeedbackController;
FeedbackController.getFeedbacks = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.feedbacks');
        const feedBacks = await Promise.all(results.rows.map(async (row) => {
            const user = await UserController.getUserById(row.user_id);
            return new Feedback(row.id.toString(), user, row.subject, row.message, row.created_at, row.updated_at, row.deleted_at);
        }));
        response.status(200).json(feedBacks);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
FeedbackController.getFeedbackById = async (hostId) => {
    try {
        const result = await pool.query("SELECT * FROM public.feedbacks WHERE id = $1", [hostId]);
        if (result.rows.length === 0) {
            throw new Error('Feedback not found');
        }
        const feedBack = result.rows[0];
        const user = await UserController.getUserById(feedBack.user_id);
        return new Feedback(feedBack.id.toString(), user, feedBack.subject, feedBack.message, feedBack.created_at, feedBack.updated_at, feedBack.deleted_at);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
export { FeedbackController };
