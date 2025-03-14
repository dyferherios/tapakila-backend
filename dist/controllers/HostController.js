var _a;
import pool from '../db/datasource.js';
import { Host } from '../entity/Host.js';
class HostController {
}
_a = HostController;
HostController.getHosts = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM host');
        const hosts = results.rows.map((row) => {
            return new Host(row.id.toString(), row.name, row.decsription, row.createdAt, row.updatedAt);
        });
        response.status(200).json(hosts);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
HostController.getHostById = async (hostId) => {
    try {
        const result = await pool.query('SELECT * FROM host WHERE id = $1', [hostId]);
        if (result.rows.length === 0) {
            throw new Error('Host not found');
        }
        const host = result.rows[0];
        return new Host(host.id.toString(), host.name, host.decsription, host.createdAt, host.updatedAt);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
export { HostController };
