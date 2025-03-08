import pool from '../db/datasource.js';
import { Role } from '../entity/Role.js';

class RoleController {

    static getRoles = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM role');
            const roles: Role[] = results.rows.map((row) => {
                return new Role(
                    row.id.toString(),
                    row.title,
                    row.created_at,
                    row.updated_at
                );
            });
            response.status(200).json(roles);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };
    static getRoleById = async (roleId: string) => {
    try {
        const result = await pool.query('SELECT * FROM role WHERE id = $1', [roleId]);
        if (result.rows.length === 0) {
            throw new Error('Role not found');
        }
            const role = result.rows[0];
            const roleObject = new Role(
                role.id.toString(),
                role.title,
                role.created_at,
                role.updated_at
            );
            return roleObject;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
}

export {
    RoleController,
};
