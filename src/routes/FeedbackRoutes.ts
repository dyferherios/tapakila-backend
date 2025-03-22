import { Router } from 'express';
import {
  FeedbackController
} from '../controllers/FeedBackController.js'

const router = Router();

router.get("/", FeedbackController.getFeedbacks);
router.get("/:id", async (req, res) => {
  try {
    const feedback = await FeedbackController.getFeedbackById(req.params.id);
    res.json(feedback);  // Retourner l'objet utilisateur
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching the feedback" });
  }
});

router.post("/", FeedbackController.saveFeedback);
router.put("/", FeedbackController.saveFeedback);
router.delete("/:feedBackId", async (req, res) => {
  const feedBackId = req.params.feedBackId;
  try {
    if (typeof feedBackId !== "string" || !feedBackId) {
      return res
        .status(400)
        .json({ error: "feedBackId is required and must be a string" });
    }
    await FeedbackController.deleteFeedbackById(feedBackId);
    res.status(201).json("Feedback deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting Feedback" });
  }
});

export default router;
