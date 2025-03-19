import { Router } from 'express';
import {
  TicketTypeController
} from '../controllers/TicketTypeController.js'

const router = Router();


router.get("/event", async (req, res) => {
  try {
    const eventId = req.query.eventId;

    if (typeof eventId !== "string" || !eventId) {
      return res
        .status(400)
        .json({ error: "eventId is required and must be a string" });
    }

    const ticketTypes = await TicketTypeController.getTicketTypeByEventId(
      eventId
    );
    res.json(ticketTypes);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the ticket type of an event",
    });
  }
});

router.get("/", TicketTypeController.getTicketTypes);
router.get("/:id", async (req, res) => {
  try {
    const ticketTYpe = await TicketTypeController.getTicketTypeById(req.params.id)
    res.json(ticketTYpe)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the ticket type" })
  }
})



export default router;
