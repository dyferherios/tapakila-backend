var _a;
import pool from '../db/datasource.js';
import { Host } from '../entity/Host.js';
class HostController {
}
_a = HostController;
HostController.getHosts = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.host');
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
        const result = await pool.query('SELECT * FROM public.host WHERE id = $1', [hostId]);
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
HostController.saveHost = async (request, response) => {
    const { id, name, description } = request.body;
    try {
        const result = await pool.query("SELECT * FROM public.host WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            const host = result.rows[0];
            await pool.query("UPDATE public.host SET name = $1, description = $2, updated_at = NOW() WHERE id = $3", [name, description, id]);
            const updatedHost = new Host(host.id.toString(), name, description, host.created_at, new Date());
            return response.status(200).json(updatedHost);
        }
        else {
            const newHost = await pool.query("INSERT INTO public.host (name, description, created_at, updated_at) VALUES ($1, $2 NOW(), NOW()) RETURNING *", [name, description]);
            const createHost = newHost.rows[0];
            const hostObject = new Host(createHost.id.toString(), createHost.name, createHost.description, createHost.created_at, createHost.updated_at);
            return response.status(201).json(hostObject);
        }
    }
    catch (error) {
        console.error(error);
        response
            .status(500)
            .json({ error: "An error occurred while saving/updating the host" });
    }
};
HostController.deleteHostById = async (hostId) => {
    try {
        await pool.query("DELETE FROM public.host WHERE id=$1", [hostId]);
    }
    catch (error) {
        throw error;
    }
};
export { HostController };
