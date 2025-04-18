import { Router } from "express";
import { EventController } from "../controllers/EventController.js";


const router = Router();
router.get("/tickets", EventController.getEventWithAllTickets);
router.get("/tickets/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const event =
      await EventController.getEventWithAllTicketsOfOneEvent(
        eventId
      );
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching event." });
  }
});

router.get("/ticketDTOs", EventController.getEventWithAllTicketsDTO)

router.get("/ticketDTOs/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const event = await EventController.getEventWithAllTicketsDTOfOneEvent(
      eventId
    );
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching event." });
  }
});

router.get("/allEventsId", async (req, res) => {
  try {
    const eventIds = await EventController.getAllEventId();
    res.status(200).json(eventIds);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching event IDs." });
  }
});

router.get(
  "/tag/:tagId",
 async (req, res) => {
  try {
    const tagId = req.params.tagId;
    const events = await EventController.getEventWithAllTicketsByTag(
      tagId
    );
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching events by tag." });
  }
});

router.get("/", EventController.getEvents);

router.get("/:id", async(req, res) => {
    try {
        const eventId = req.params.id;
        const event = await EventController.getEventById(eventId);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({error: "An error occured while fetching event by id."})
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