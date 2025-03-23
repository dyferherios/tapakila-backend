import pool from '../db/datasource.js';
import { User } from '../entity/User.js';
import { CountryController } from './CountryController.js';
import { RoleController } from './RoleController.js';

class UserController {

  static getUsers = async (request: any, response: any) => {
    try {
      const results = await pool.query('SELECT * FROM public."user"');
      const users = await Promise.all(
        results.rows.map(async (row) => {
          const roleId = row.role_id.toString();
          const countryId = row.country_id.toString();
          
          const role = await RoleController.getRoleById(roleId);

          const country = await CountryController.getCountryById(countryId);
          return new User(
            row.id.toString(),
            role,
            row.username,
            row.name,
            row.email,
            row.email_verified_at,
            row.password,
            row.image_url,
            country,
            row.created_at,
            row.updated_at,
            row.deleted_at
          );
        })
      );

      response.status(200).json(users);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  };
  static getUserById = async (id: string) => {
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
    const userObject = new User(
      user.id.toString(),
      role,
      user.username,
      user.name,
      user.email,
      user.email_verified_at,
      user.password,
      user.image_url,
      country,
      user.created_at,
      user.updated_at,
      user.deleted_at
    );

    return userObject;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to retrieve user');
  }
  };

  static saveUser = async (request: any, response: any) => {
    const { id, role, username, name, email, email_verified_at, password, image_url, country } = request.body;
    try {
      const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [id]);
      const roleId = role.id.toString();
      const countryId = country.id.toString();
     
      if (result.rows.length > 0) {
        await pool.query(
          'UPDATE public."user" SET role_id = $1, username = $2, name = $3, email = $4, email_verified_at = $5, password = $6, image_url = $7, country_id = $8, updated_at = NOW() WHERE id = $9',
          [roleId, username, name, email, email_verified_at, password, image_url, countryId, id]
        );
        const userUpdated = await UserController.getUserById(id);
        response.status(200).json(userUpdated);
      } else {
        const newUser = await pool.query(
          'INSERT INTO public."user" (role_id, username, name, email, email_verified_at, password, image_url, country_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) returning id',
          [
            roleId,
            username,
            name,
            email,
            email_verified_at,
            password,
            image_url,
            countryId,
          ]
        );
        const newUserId = newUser.rows[0].id;
        const userCreated = await UserController.getUserById(
          newUserId
        );
        response.status(200).json(userCreated);
      }
    } catch (error) {
      response.status(500).json({ error: "An error occured while saving user" });
    }
  };

  static deleteUserById = async (userId: string) => {
    try {
      const result = await pool.query(
        'SELECT * FROM public."user" WHERE id = $1',
        [userId]
      );
      if (result.rows.length > 0) {
        await pool.query('delete from public."user" where id=$1', [userId])
        return {
          success: true,
          message: "user deleted succefully",
          data: null
        }
      }
    } catch (error) {
      throw Error("An error occured while deleting user")
    }
  };
}
export {
  UserController
};

