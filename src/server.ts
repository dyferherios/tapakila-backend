import express, { Request, Response } from 'express';
import userRoutes from './routes/UserRoutes.js';
import roleRoutes from './routes/RoleRoutes.js';
import countryRoutes from './routes/CountryRoutes.js';
import tagRoutes from './routes/TagController.js'
import hostRoutes from './routes/HostRoutes.js'
import eventHallRoutes from './routes/EventHallRoutes.js'
import currencyRoutes from './routes/CurrencyRoutes.js'
import newsLetterRoutes from './routes/NewsletterRoutes.js'
import feedbackRoutes from './routes/FeedbackRoutes.js'
import eventRoutes from './routes/EventRoutes.js'
import ticketTypesRoutes from './routes/TicketTypeRoutes.js'
import ticketRoutes from './routes/TicketRoutes.js'
import ticketVerificationRoutes from './routes/TicketVerificationRoutes.js'

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use("/roles", roleRoutes);
app.use("/countries", countryRoutes);
app.use("/tags", tagRoutes);
app.use("/hosts", hostRoutes);
app.use("/eventHalls",eventHallRoutes);
app.use("/currencies", currencyRoutes);
app.use("/newsletters", newsLetterRoutes);
app.use("/feedbacks", feedbackRoutes);
app.use("/events", eventRoutes);
app.use("/ticketTypes", ticketTypesRoutes);
app.use("/tickets", ticketRoutes);
app.use("/ticketVerifications", ticketVerificationRoutes);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on : ${PORT}`);
});
