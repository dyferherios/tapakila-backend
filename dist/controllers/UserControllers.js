var _a;
import pool from '../db/datasource.js';
import { User } from '../entity/User.js';
import AuthService from '../services/auth.services.js';
import { CountryController } from './CountryController.js';
import { RoleController } from './RoleController.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
class UserController {
    static getProfile(arg0, authenticate, getProfile) {
        throw new Error("Method not implemented.");
    }
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
            throw new Error("User not found");
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
        throw new Error("Failed to retrieve user");
    }
};
// static saveUser = async (request: any, response: any) => {
//   const {
//     id,
//     role,
//     username,
//     name,
//     email,
//     email_verified_at,
//     password,
//     image_url,
//     country,
//   } = request.body;
//   try {
//     const result = await pool.query(
//       'SELECT * FROM public."user" WHERE id = $1',
//       [id]
//     );
//     const roleId = role.id.toString();
//     const countryId = country.id.toString();
//     if (result.rows.length > 0) {
//       await pool.query(
//         'UPDATE public."user" SET role_id = $1, username = $2, name = $3, email = $4, email_verified_at = $5, password = $6, image_url = $7, country_id = $8, updated_at = NOW() WHERE id = $9',
//         [
//           roleId,
//           username,
//           name,
//           email,
//           email_verified_at,
//           password,
//           image_url,
//           countryId,
//           id,
//         ]
//       );
//       const userUpdated = await UserController.getUserById(id);
//       response.status(200).json(userUpdated);
//     } else {
//       const newUser = await pool.query(
//         'INSERT INTO public."user" (role_id, username, name, email, email_verified_at, password, image_url, country_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) returning id',
//         [
//           roleId,
//           username,
//           name,
//           email,
//           email_verified_at,
//           password,
//           image_url,
//           countryId,
//         ]
//       );
//       const newUserId = newUser.rows[0].id;
//       const userCreated = await UserController.getUserById(newUserId);
//       response.status(200).json(userCreated);
//     }
//   } catch (error) {
//     response
//       .status(500)
//       .json({ error: "An error occured while saving user" });
//   }
// };
// Ajouter ces méthodes à votre classe UserController
UserController.register = async (req, res) => {
    const { username, name, email, password, country, role } = req.body;
    const countryId = country.id.toString();
    const roleId = role.id.toString();
    // Vérifier si tous les champs sont remplis
    if (!username || !email || !password || !country || !role) {
        return res.status(400).json({ error: "Tous les champs sont requis" });
    }
    try {
        // Vérifier si l'utilisateur existe déjà
        const userCheck = await pool.query('SELECT * FROM public."user" WHERE email = $1', [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ error: "Email déjà utilisé" });
        }
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insérer l'utilisateur dans la base de données
        const newUser = await pool.query('INSERT INTO public."user" (role_id, username, name, email, password, country_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING id', [roleId, username, name, email, hashedPassword, countryId]);
        res.status(201).json({ message: "Utilisateur créé avec succès" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'inscription" });
    }
};
// Modifier la méthode saveUser pour hacher le mot de passe
UserController.saveUser = async (request, response) => {
    const { id, role, username, name, email, email_verified_at, password, image_url, country, } = request.body;
    try {
        const roleId = role.id.toString();
        const countryId = country.id.toString();
        // Hacher le mot de passe si fourni
        const hashedPassword = password
            ? await AuthService.hashPassword(password)
            : password;
        if (id) {
            // Mise à jour d'un utilisateur existant
            const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [id]);
            if (result.rows.length > 0) {
                // Si un mot de passe est fourni, le mettre à jour, sinon garder l'ancien
                let passwordToUpdate = hashedPassword;
                if (!password) {
                    passwordToUpdate = result.rows[0].password;
                }
                await pool.query('UPDATE public."user" SET role_id = $1, username = $2, name = $3, email = $4, email_verified_at = $5, password = $6, image_url = $7, country_id = $8, updated_at = NOW() WHERE id = $9', [
                    roleId,
                    username,
                    name,
                    email,
                    email_verified_at,
                    passwordToUpdate,
                    image_url,
                    countryId,
                    id,
                ]);
                const userUpdated = await _a.getUserById(id);
                response.status(200).json(userUpdated);
            }
            else {
                response.status(404).json({ error: "Utilisateur non trouvé" });
            }
        }
        else {
            // Création d'un nouvel utilisateur
            const newUser = await pool.query('INSERT INTO public."user" (role_id, username, name, email, email_verified_at, password, image_url, country_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) returning id', [
                roleId,
                username,
                name,
                email,
                email_verified_at,
                hashedPassword,
                image_url,
                countryId,
            ]);
            const newUserId = newUser.rows[0].id;
            const userCreated = await _a.getUserById(newUserId);
            response.status(201).json(userCreated);
        }
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            error: "Une erreur est survenue lors de l'enregistrement de l'utilisateur",
        });
    }
};
UserController.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email et mot de passe requis" });
    }
    try {
        // Vérifier si l'utilisateur existe
        const result = await pool.query('SELECT * FROM public."user" WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res
                .status(401)
                .json({ error: "Email ou mot de passe incorrect" });
        }
        const user = result.rows[0];
        // Vérifier le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res
                .status(401)
                .json({ error: "Email ou mot de passe incorrect" });
        }
        // Générer un token JWT
        const token = jwt.sign({ id: user.id, role: user.role_id }, process.env.JWT_SECRET_KEY || (() => { throw new Error("JWT_SECRET_KEY is not defined in environment variables"); })(), { expiresIn: "1h" });
        res.status(200).json({
            message: "Connexion réussie",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role_id,
            },
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la connexion" });
    }
};
UserController.deleteUserById = async (userId) => {
    try {
        const result = await pool.query('SELECT * FROM public."user" WHERE id = $1', [userId]);
        if (result.rows.length > 0) {
            await pool.query('delete from public."user" where id=$1', [userId]);
            return {
                success: true,
                message: "user deleted succefully",
                data: null,
            };
        }
    }
    catch (error) {
        throw Error("An error occured while deleting user");
    }
};
UserController.getUserByEmail = async (email) => {
    try {
        const result = await pool.query('SELECT * FROM public."user" WHERE email = $1', [email]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const roleId = user.role_id.toString();
            const countryId = user.country_id.toString();
            const role = await RoleController.getRoleById(roleId);
            const country = await CountryController.getCountryById(countryId);
            const userObject = new User(user.id.toString(), role, user.username, user.name, user.email, user.email_verified_at, user.password, user.image_url, country, user.created_at, user.updated_at, user.deleted_at);
            return userObject;
        }
    }
    catch (error) {
        throw new Error("Failed to retrieve user");
    }
};
export { UserController };
