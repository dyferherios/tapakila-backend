import { Router } from 'express';
import { HostController } from '../controllers/HostController.js';
const router = Router();
router.get("/", HostController.getHosts);
router.get("/:id", async (req, res) => {
    try {
        const host = await HostController.getHostById(req.params.id);
        res.json(host);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the host" });
    }
});
export default router;
