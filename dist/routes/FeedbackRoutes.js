import { Router } from 'express';
import { FeedbackController } from '../controllers/FeedBackController.js';
const router = Router();
router.get("/", FeedbackController.getFeedbacks);
router.get("/:id", async (req, res) => {
    try {
        const feedback = await FeedbackController.getFeedbackById(req.params.id);
        res.json(feedback); // Retourner l'objet utilisateur
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching the feedback" });
    }
});
export default router;
