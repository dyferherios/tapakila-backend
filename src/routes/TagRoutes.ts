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
router.post("/", TagController.saveTag);
router.put("/", TagController.saveTag);
router.delete("/:tagId", async (req, res) => {
  const tagId = req.params.tagId;
  const id = tagId.toString();
  try {
    if (typeof id !== "string" || !id) {
      return res
        .status(400)
        .json({ error: "TagId is required and must be a string" });
    }
    const result = await TagController.deleteTagById(id);
    res.status(200).json(result);
  } catch (error: any) {
    if (error.message === "Tag not found") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});
export default router;
