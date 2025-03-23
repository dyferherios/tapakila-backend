import { Router } from "express";
import { EventController } from "../controllers/EventController.js";


const router = Router();
router.get("/tickets", EventController.getEventWithAllTickets);
router.get("/allEventsId", EventController.getAllEventId);
router.get("/", EventController.getEvents);
router.get("/:id", async(req, res) => {
    try {
        const eventId = req.params.id;
        const event = await EventController.getEventById(eventId);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({error: "An error occured while fetching event."})
    }
})
router.post("/", EventController.saveEvent);
router.put("/", EventController.saveEvent);
router.delete("/:eventId", async (req, res) => {
    const eventId = req.params.eventId;
    try {
        if (typeof eventId !== "string" || !eventId) {
            return res
                .status(400)
                .json({ error: "eventId is required and must be a string" });
        }
        await EventController.deleteEventById(eventId);
        res.status(201).json("Event deleted succefully");
    } catch (error) {
        res.status(500).json({ error: "An error occured while deleting event" });
    }
})

export default router;