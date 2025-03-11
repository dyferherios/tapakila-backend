import { Router } from 'express';
import { 
  NewsletterController
} from '../controllers/NewsLetterController.js'

const router = Router();

router.get("/", NewsletterController.getNewsletters);
router.get("/:id", async (req, res) => {
  try {
    const host = await NewsletterController.getNewsletterById(req.params.id)
    res.json(host)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the news letter" })
  }
})

export default router;