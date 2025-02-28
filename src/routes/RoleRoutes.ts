import { Router } from 'express';
import {
  RoleController
} from '../controllers/RoleController.js'

const router = Router();

router.get("/", RoleController.getRoles);
router.get("/:id", async (req, res) => {
  try {
    const role = await RoleController.getRoleById(req.params.id)
    res.json(role)
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the role" })
  }
})
router.post("/", RoleController.saveRole); 

export default router;
