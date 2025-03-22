import { Router } from 'express';
import { TicketController } from '../controllers/TicketController.js';
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
        const tickets = await TicketController.getAllTicketsByEventIdAndTicketTypeId(eventId, ticketTypeId);
        res.json(tickets);
    }
    catch (error) {
        console.error("Error in /tickets:", error);
        res.status(500).json({
            error: "An error occurred while fetching the ticket type of an event",
        });
    }
});
router.get("/", TicketController.getTickets);
router.get("/:id", async (req, res) => {
    try {
        const ticket = await TicketController.getTicketById(req.params.id);
        res.json(ticket);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the ticket" });
    }
});
export default router;
