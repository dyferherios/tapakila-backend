import { Router } from 'express';
import {
  TicketController
} from '../controllers/TicketController.js'

const router = Router();

router.get("/event", async (req, res) => {
  try {
     const eventId = req.query.eventId;
     const ticketTypeId = req.query.ticketTypeId;
     if (typeof eventId !== "string" || !eventId) {
       return res
         .status(400)
         .json({ error: "eventId is required and must be a string" });
     }

     if (typeof ticketTypeId !== "string" || !ticketTypeId) {
       return res
         .status(400)
         .json({ error: "ticketTypeId is required and must be a string" });
     }

    const tickets = await TicketController.getAllTicketsByEventIdAndTicketTypeId(eventId, ticketTypeId)
    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching the ticket type of an event",
    });
  }
});

router.get("/allTicketsId", TicketController.getAllTicketId)

router.get("/", TicketController.getTickets);
router.get("/:id", async (req, res) => {
  try {
    const ticket = await TicketController.getTicketById(req.params.id)
    res.json(ticket)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the ticket" })
  }
})

router.get("/user/:userId", async (req, res) => {
  try {
    const ticket = await TicketController.getAllTicketsDTOByUserId(req.params.userId);
    res.json(ticket);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the ticket" });
  }
});


router.post("/", TicketController.saveTicket);
router.put("/", TicketController.saveTicket);
router.delete("/:ticketId", async (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    if (typeof ticketId !== "string" || !ticketId) {
      return res
        .status(400)
        .json({ error: "ticketId is required and must be a string" });
    }
    const ticketdeleted = await TicketController.deleteTicketById(ticketId);
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    throw Error("An error occured while deleting ticket");
  }
})

export default router;
