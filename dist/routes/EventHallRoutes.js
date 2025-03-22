import { Router } from "express";
import { EventHallController } from "../controllers/EventHallController.js";
const router = Router();
router.get("/", EventHallController.getEventHalls);
router.get("/:id", async (req, res) => {
    try {
        const eventHall = await EventHallController.getEventHallById(req.params.id);
        res.json(eventHall);
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while fetching eventhall" });
    }
});
router.post("/save", EventHallController.saveEventHall);
router.delete("/delete", async (req, res) => {
    const eventHallId = req.query.eventHallId;
    try {
        if (typeof eventHallId !== "string" || !eventHallId) {
            return res
                .status(400)
                .json({ error: "eventHallId is required and must be a string" });
        }
        await EventHallController.deleteEventHallById(eventHallId);
        res.status(201).json("Event hall deleted succefully");
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while deleting event hall" });
    }
});
export default router;
