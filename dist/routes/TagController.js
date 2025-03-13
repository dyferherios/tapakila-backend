import { Router } from 'express';
import { TagController } from '../controllers/TagController.js';
const router = Router();
router.get("/", TagController.getTags);
router.get("/:id", async (req, res) => {
    try {
        const tag = await TagController.getTagById(req.params.id);
        res.json(tag);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the tag" });
    }
});
export default router;
