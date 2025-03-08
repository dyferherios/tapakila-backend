import { Router } from "express";
import { EventHallController } from "../controllers/EventHallController.js";
const router = Router();

router.get("/", EventHallController.getEventHalls);
router.get("/:id", async(req, res)=>{
    try {
        const eventHall = await EventHallController.getEventHallById(req.params.id);
        res.json(eventHall)
    } catch (error) {
        res.status(500).json({error: "An error occured while fetching eventhall"})
    }
})

export default router;