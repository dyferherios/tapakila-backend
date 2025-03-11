import { Router } from 'express';
import {
  TicketVerificationController
} from '../controllers/TicketVerificationConctroller.js'

const router = Router();

router.get("/", TicketVerificationController.getTicketVerifications);
router.get("/:id", async (req, res) => {
  try {
    const ticketVerification = await TicketVerificationController.getTicketVerificationById(req.params.id)
    res.json(ticketVerification)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the ticket verification" })
  }
})

export default router;
