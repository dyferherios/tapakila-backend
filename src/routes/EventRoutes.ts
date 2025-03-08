import { Router } from "express";
import { EventController } from "../controllers/EventController.js";


const router = Router();
router.get("/", EventController.getEvents);
router.get("/:id", async(req, res) => {
    try {
        const event = await EventController.getEventById(req.params.id);
        res.json(event);
    } catch (error) {
        res.status(500).json({error: "An error occured while fetching event."})
    }
})

export default router;