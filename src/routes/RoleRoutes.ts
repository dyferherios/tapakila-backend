import { Router } from 'express';
import {
  RoleController
} from '../controllers/RoleController.js'
import { Role } from '../entity/Role.js';

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
router.delete("/:id", async (req, res) => {
  try {
    await RoleController.deleteRoleById(req.params.id);
    res.status(201).json("Role deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting role" });
  }
})

export default router;
