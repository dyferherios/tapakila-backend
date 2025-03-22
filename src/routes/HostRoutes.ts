import { Router } from 'express';
import {
  HostController
} from '../controllers/HostController.js'

const router = Router();

router.get("/", HostController.getHosts);
router.get("/:id", async (req, res) => {
  try {
    const host = await HostController.getHostById(req.params.id)
    res.json(host)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the host" })
  }
})
router.post("/", HostController.saveHost);
router.put("/", HostController.saveHost);
router.delete("/:hostId", async (req, res) => {
  const hostId = req.params.hostId;
  try {
    if (typeof hostId !== "string" || !hostId) {
      return res
        .status(400)
        .json({ error: "hostId is required and must be a string" });
    }
    await HostController.deleteHostById(hostId);
    res.status(201).json("Host deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting host" });
  }
});

export default router;
