import pool from '../db/datasource.js';
import { User } from '../entity/User.js';

const getUsers = async (request: any, response: any) => {
  try {
    const results = await pool.query('SELECT * FROM users');
    const users: User[] = results.rows.map((row) => {
      return new User(
        row.id.toString(),
        row.name,
        row.contact,
        row.email,
        row.adress,
        row.image,
        row.password,
        row.created_at,
        row.updated_at,
        row.deleted_at,
        row.role
      );
    });
    response.status(200).json(users);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error });
  }
};
const getUserById = async (request: any, response: any) => {
  const id = parseInt(request.params.id);

  try {
    const results = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (results.rows.length === 0) {
      return response.status(404).json({ message: 'User not found' });
    }
    response.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error });
  }
};

const createUser = async (request: any, response: any) => {
  const { name, email } = request.body;

  try {
    const results = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    response.status(201).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error });
  }
};

const updateUser = async (request: any, response: any) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  try {
    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    response.status(200).json({ message: `User modified with ID: ${id}` });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error });
  }
};

const deleteUser = async (request: any, response: any) => {
  const id = parseInt(request.params.id);

  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    response.status(200).json({ message: `User deleted with ID: ${id}` });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error });
  }
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
