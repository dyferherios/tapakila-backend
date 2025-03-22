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
router.post("/save", RoleController.saveRole);
router.delete("/delete", async (req, res) => {
    const roleId = req.query.roleId;
    try {
        if (typeof roleId !== "string" || !roleId) {
            return res
                .status(400)
                .json({ error: "roleId is required and must be a string" });
        }
        await RoleController.deleteRoleById(roleId);
        res.status(201).json("Role deleted succefully");
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while deleting role" });
    }
});
export default router;
