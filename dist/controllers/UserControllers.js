var _a;
import pool from '../db/datasource.js';
import { User } from '../entity/User.js';
import { CountryController } from './CountryController.js';
import { RoleController } from './RoleController.js';
class UserController {
}
_a = UserController;
UserController.getUsers = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public."user"');
        const users = await Promise.all(results.rows.map(async (row) => {
            const roleId = row.role_id.toString();
            const countryId = row.country_id.toString();
            const role = await RoleController.getRoleById(roleId);
            const country = await CountryController.getCountryById(countryId);
            return new User(row.id.toString(), role, row.username, row.name, row.email, row.email_verified_at, row.password, row.image_url, country, row.created_at, row.updated_at, row.deleted_at);
        }));
        response.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
UserController.getUserById = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            throw new Error('User not found');
        }
        const user = result.rows[0];
        const roleId = user.role_id.toString();
        const countryId = user.country_id.toString();
        const role = await RoleController.getRoleById(roleId);
        const country = await CountryController.getCountryById(countryId);
        const userObject = new User(user.id.toString(), role, user.username, user.name, user.email, user.email_verified_at, user.password, user.image_url, country, user.created_at, user.updated_at, user.deleted_at);
        return userObject;
    }
    catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve user');
    }
};
export { UserController };
