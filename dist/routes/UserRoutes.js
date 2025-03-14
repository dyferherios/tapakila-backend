import { Router } from 'express';
import { UserController } from '../controllers/UserControllers.js';
const router = Router();
router.get("/", UserController.getUsers);
router.get("/:id", async (req, res) => {
    try {
        const user = await UserController.getUserById(req.params.id);
        res.json(user); // Retourner l'objet utilisateur
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching the user" });
    }
});
export default router;
