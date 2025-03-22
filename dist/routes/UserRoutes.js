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
// router.post("/save", UserController.saveUser);
// router.delete("delete", async (req, res) => {
//   const userId = req.query.id;
//   if (typeof userId !== "string" || !userId) {
//     return res
//       .status(400)
//       .json({ error: "userId is required and must be a string" });
//   } else {
//     try {
//       await UserController.deleteUser(req, res);
//       res.status(201).json("User deleted succefully");
//     } catch (error) {
//       res.status(500).json({ error: "An error occured while deleting user" });
//     }
//   }
// })
export default router;
