import { Router } from 'express';
import {
  UserController
} from '../controllers/UserControllers.js'

const router = Router();

router.get("/", UserController.getUsers);
router.get("/:id", async (req, res) => {
  try {
    const user = await UserController.getUserById(req.params.id);
    res.json(user); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching the user" });
  }
});

router.post("/", UserController.saveUser);
router.put("/", UserController.saveUser);
router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (typeof userId !== "string" || !userId) {
    return res
      .status(400)
      .json({ error: "userId is required and must be a string" });
  } else {
    try {
      await UserController.deleteUserById(userId);
      res.status(201).json("User deleted succefully");
    } catch (error) {
      res.status(500).json({ error: "An error occured while deleting user" });
    }
  }
})

export default router;

// user.routes.ts
// router.post('/refresh-token', (req, res) => {
//   const { refreshToken } = req.body;
//   const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET!);
//   const newAccessToken = AuthService.generateToken(decoded);
//   res.json({ accessToken: newAccessToken });
// });


