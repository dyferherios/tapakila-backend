import pool from "../db/datasource.js";
import { Role } from "../entity/Role.js";

class RoleController {
  static getRoles = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.role");
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
      const result = await pool.query(
        "SELECT * FROM public.role WHERE id = $1",
        [roleId]
      );
      if (result.rows.length === 0) {
        throw new Error("Role not found");
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

  static saveRole = async (request: any, response: any) => {
    const { id, title } = request.body;

    try {
      const result = await pool.query(
        "SELECT * FROM public.role WHERE id = $1",
        [id]
      );

      if (result.rows.length > 0) {
        const role = result.rows[0];
        await pool.query(
          "UPDATE public.role SET title = $1, updated_at = NOW() WHERE id = $2",
          [title, id]
        );

        const updatedRole = new Role(
          role.id.toString(),
          title,
          role.created_at,
          new Date()
        );

        return response.status(200).json(updatedRole);
      } else {
        const newRole = await pool.query(
          "INSERT INTO public.role (title, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING *",
          [title]
        );

        const createdRole = newRole.rows[0];
        const roleObject = new Role(
          createdRole.id.toString(),
          createdRole.title,
          createdRole.created_at,
          createdRole.updated_at
        );

        return response.status(201).json(roleObject);
      }
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .json({ error: "An error occurred while saving/updating the role" });
    }
  };

  static deleteRoleById = async (roleId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.role WHERE id = $1",
        [roleId]
      );

      if (result.rows.length > 0) {
        await pool.query("DELETE FROM public.role WHERE id = $1", [roleId]);
        return {
          success: true,
          message: "Role deleted successfully",
          data: result.rows[0],
        };
      } else {
        throw new Error("role not found");
      }
    } catch (error) {
      throw new Error("An error occurred while deleting the role");
    }
  };
}

export { RoleController };
