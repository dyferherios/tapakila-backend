import express, { Request, Response } from 'express';
import userRoutes from './routes/UserRoutes.js';

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
