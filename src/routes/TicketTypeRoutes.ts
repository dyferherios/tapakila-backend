import { Router } from 'express';
import {
  TicketTypeController
} from '../controllers/TicketTypeController.js'

const router = Router();

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
