import { Router } from 'express';
import { TicketTypeController } from '../controllers/TicketTypeController.js';
const router = Router();
router.get("/", TicketTypeController.getTicketTypes);
router.get("/:id", async (req, res) => {
    try {
        const ticketTYpe = await TicketTypeController.getTicketTypeById(req.params.id);
        res.json(ticketTYpe);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the ticket type" });
    }
});
router.get("/events/:id", async (req, res) => {
    try {
        const ticketTypes = await TicketTypeController.getTicketTypeByOfAnEvent(req.params.id);
        res.json(ticketTypes);
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while fetching the ticket type of an event" });
    }
});
export default router;
