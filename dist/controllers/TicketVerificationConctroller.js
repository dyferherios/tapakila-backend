var _a;
import pool from '../db/datasource.js';
import { TicketVerification } from '../entity/TicketVerification.js';
import { TicketController } from './TicketController.js';
import { UserController } from './UserControllers.js';
class TicketVerificationController {
}
_a = TicketVerificationController;
TicketVerificationController.getTicketVerifications = async (request, response) => {
    try {
        const results = await pool.query("SELECT * FROM ticket_verification");
        const ticketVerifications = await Promise.all(results.rows.map(async (row) => {
            const ticketId = row.ticket_id.toString();
            const userId = row.user_id.toString();
            const ticket = await TicketController.getTicketById(ticketId);
            const user = await UserController.getUserById(userId);
            return new TicketVerification(row.id.toString(), ticket, user, row.payment_confirmed, row.create_at, row.update_at, row.delete_at);
        }));
        response.status(200).json(ticketVerifications);
    }
    catch (error) {
        response.status(500).json({ error });
    }
};
TicketVerificationController.getTicketVerificationById = async (ticketVerificationId) => {
    try {
        const result = await pool.query("SELECT * FROM ticket_verification WHERE id = $1", [ticketVerificationId]);
        const ticketVerification = result.rows[0];
        const ticketId = ticketVerification.ticket_id.toString();
        const userId = ticketVerification.user_id.toString();
        const ticket = await TicketController.getTicketById(ticketId);
        const user = await UserController.getUserById(userId);
        return new TicketVerification(ticketVerification.id.toString(), ticket, user, ticketVerification.payment_confirmed, ticketVerification.create_at, ticketVerification.update_at, ticketVerification.delete_at);
    }
    catch (error) {
        throw new Error("Failed to retrieve user");
    }
};
export { TicketVerificationController };
