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
UserController.saveUser = async (request, response) => {
    const { id, role_id, username, name, email, email_verified_at, password, image_url, country_id } = request.body;
    try {
        const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [id]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            await pool.query('UPDATE public."user" SET role_id = $1, username = $2, name = $3, email = $4, email_verified_at = $5, password = $6, image_url = $7, country_id = $8, updated_at = NOW() WHERE id = $9', [role_id.getId(), username, name, email, email_verified_at, password, image_url, country_id.getId(), id]);
            const userUpdated = await _a.getUserById(id);
            response.status(200).json(userUpdated);
        }
        else {
            const newUser = await pool.query('INSERT INTO public."user" (role_id, username, name, email, email_verified_at, password, image_url, country_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())', [
                role_id.getId(),
                username,
                name,
                email,
                email_verified_at,
                password,
                image_url,
                country_id.getId(),
            ]);
            const userCreated = await _a.getUserById(newUser.rows[0].id);
            response.status(200).json(userCreated);
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
UserController.deleteUser = async (request, response) => {
    const { id } = request.params;
    try {
        const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            response.status(404).json({ error: "User not found" });
        }
        else {
            await pool.query('DELETE FROM public."user" WHERE id = $1', [id]);
            response.status(200).json({ message: "User deleted successfully" });
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
export { UserController };
