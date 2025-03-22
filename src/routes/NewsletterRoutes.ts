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
router.post("/", NewsletterController.saveNewsletter);
router.put("/", NewsletterController.saveNewsletter);
router.delete("/:newsLetterId", async (req, res) => {
  const newsLetterId = req.params.newsLetterId;
  const id = newsLetterId.toString();
  try {
    if (typeof newsLetterId !== "string" || !newsLetterId) {
      return res
        .status(400)
        .json({ error: "newsletterId is required and must be a string" });
    }
    await NewsletterController.deleteNewsLetterById(newsLetterId);
    res.status(201).json("Newsletter deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting newsletter" });
  }
});
export default router;