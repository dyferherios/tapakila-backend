import { Router } from 'express';
import {
  TagController
} from '../controllers/TagController.js'

const router = Router();

router.get("/", TagController.getTags);
router.get("/:id", async (req, res) => {
  try {
    const tag = await TagController.getTagById(req.params.id)
    res.json(tag)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the tag" })
  }
})
router.post("/save", TagController.saveTag);
router.delete("/delete", async (req, res) => {
  const tagId = req.query.tagId;
  try {
    if (typeof tagId !== "string" || !tagId) {
      return res
        .status(400)
        .json({ error: "TagId is required and must be a string" });
    }
    await TagController.deleteTagById(tagId);
    res.status(201).json("Tag deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting tag" });
  }
});

export default router;
