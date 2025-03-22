import { Router } from 'express';
import { RoleController } from '../controllers/RoleController.js';
const router = Router();
router.get("/", RoleController.getRoles);
router.get("/:id", async (req, res) => {
    try {
        const role = await RoleController.getRoleById(req.params.id);
        res.json(role);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the role" });
    }
});
router.post("/", RoleController.saveRole);
router.put("/", RoleController.saveRole);
router.delete("/:roleId", async (req, res) => {
    const roleId = req.params.roleId;
    const id = roleId.toString();
    try {
        if (typeof id !== "string" || !id) {
            return res
                .status(400)
                .json({ error: "roleId is required and must be a string" });
        }
        const result = await RoleController.deleteRoleById(id);
        res.status(200).json(result);
    }
    catch (error) {
        if (error.message === "role not found") {
            res.status(404).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: error.message });
        }
    }
});
export default router;
