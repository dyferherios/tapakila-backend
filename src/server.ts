import express, { Request, Response } from 'express';
import userRoutes from './routes/UserRoutes.js';
import roleRoutes from './routes/RoleRoutes.js';
import countryRoutes from './routes/CountryRoutes.js';

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/roles", roleRoutes);
app.use("/countries", countryRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
