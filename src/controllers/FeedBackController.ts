import pool from '../db/datasource.js';
import { Feedback } from '../entity/Feedback.js';
import { UserController } from './UserControllers.js';

class FeedbackController {

    static getFeedbacks = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM public.feedbacks;');
            const feedBacks = await Promise.all(
            results.rows.map(async (row) => {

            const user = await UserController.getUserById(row.user_id);
            return new Feedback(
                row.id.toString(),
                user,
                row.subject,
                row.message,
                row.created_at,
                row.updated_at,
                row.deleted_at
            );
        })
      );

            response.status(200).json(feedBacks);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };

    static getFeedbackById = async (feedbackId: string) => {
    try {
        const result = await pool.query('SELECT * FROM public.feedbacks WHERE id = $1', [feedbackId]);
        if (result.rows.length === 0) {
            throw new Error('Feedback not found');
        }
            const feedBack = result.rows[0];
            const user = await UserController.getUserById(feedBack.user_id);
            return new Feedback(
                feedBack.id.toString(),
                user,
                feedBack.subject,
                feedBack.message,
                feedBack.created_at,
                feedBack.updated_at,
                feedBack.deleted_at
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    static saveFeedback = async (request: any, response: any) => {
        const {id, userId, subject, message } = request.body;
    
        try {
          const result = await pool.query(
            "SELECT * FROM public.feedbacks WHERE id = $1",
            [id]
          );
    
          if (result.rows.length > 0) {
            const feedBack = result.rows[0];
            await pool.query(
              "UPDATE public.feedbacks SET user_id = $1, subject = $2, message = $3, updated_at = NOW() WHERE id = $4",
              [userId, subject, message, id]
            );
    
            const updatedFeedbacks = new Feedback(
              feedBack.id.toString(),
              userId,
              subject,
              message,
              feedBack.created_at,
              new Date()
            );
            return response.status(200).json(updatedFeedbacks);
          } else {
            const newFeedback = await pool.query(
              "INSERT INTO public.feedbacks (user_id, subject, message, created_at, updated_at) VALUES ($1, $2, $3 NOW(), NOW()) RETURNING *",
              [userId, subject, message]
            );
    
            const createdFeedback = newFeedback.rows[0];
            const feedBackObject = new Feedback(
              createdFeedback.id.toString(),
              createdFeedback.userId,
              createdFeedback.subject,
              createdFeedback.message,
              createdFeedback.created_at,
              createdFeedback.updated_at
            );
    
            return response.status(201).json(feedBackObject);
          }
        } catch (error) {
          response
            .status(500)
            .json({ error: "An error occurred while saving/updating the feedback" });
        }
      };
    
        static deleteFeedbackById = async (feedbackId: string) => {
            try {
                await pool.query("DELETE FROM public.feedbacks WHERE id=$1", [
                  feedbackId,
                ]);
            } catch (error) {
                throw error;
            }
        }

}

export {
    FeedbackController
}