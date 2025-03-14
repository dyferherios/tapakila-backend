import { Router } from 'express';
import { TicketController } from '../controllers/TicketController.js';
const router = Router();
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
