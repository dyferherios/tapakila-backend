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
  const ticketTypeId = req.params.id;
  try {
    const ticketType = await TicketTypeController.getTicketTypeById(
      ticketTypeId
    );
    res.json(ticketType)
  } catch (error) {
    throw error;
    //res.status(500).json({ error: "An error occurred while fetching the ticket type" })
  }
})
router.post("/", TicketTypeController.saveTicketType);
router.put("/", TicketTypeController.saveTicketType);
router.delete("/:ticketTypeId", async (req, res) => {
  const ticketTypeId = req.params.ticketTypeId;
  try {
    await TicketTypeController.deleteTicketTypeById(ticketTypeId);
    res.status(200).json({ message: "Ticket type deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting ticket type" });
  }
});
export default router;
