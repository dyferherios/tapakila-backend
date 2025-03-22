import pool from '../db/datasource.js';
import { Tag } from '../entity/Tag.js';

class TagController {
  static getTags = async (request: any, response: any) => {
    try {
      const results = await pool.query("SELECT * FROM public.tag");

      const tags: Tag[] = results.rows.map((row: any) => {
        return new Tag(
          row.id.toString(),
          row.title,
          row.description,
          row.created_at,
          row.updated_at,
          row.deleted_at
        );
      });
      response.status(200).json(tags);
    } catch (error) {
      console.error(error);
      response.status(500).json({ error });
    }
  };
  static getTagById = async (tagId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.tag WHERE id = $1",
        [tagId]
      );
      if (result.rows.length === 0) {
        throw new Error("Tag not found");
      }
      const tag = result.rows[0];
      const tagObject = new Tag(
        tag.id.toString(),
        tag.title,
        tag.decsription,
        tag.created_at,
        tag.updated_at,
        tag.deleted_at
      );
      return tagObject;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static saveTag = async (request: any, response: any) => {
    const { id, title, description } = request.body;
    if (!title) {
      return response.status(400).json({ error: "Title is required" });
    }
    try {
      if (id) {
        const result = await pool.query("SELECT * FROM tag WHERE id = $1", [
          id,
        ]);

        if (result.rows.length > 0) {
          await pool.query(
            "UPDATE tag SET title = $1, description = $2, updated_at = NOW() WHERE id = $3",
            [title, description, id]
          );
          const updatedTag = {
            id: id,
            title: title,
            description: description,
            created_at: result.rows[0].created_at,
            updated_at: new Date(),
          };
          return response.status(200).json(updatedTag);
        } else {
          return response.status(404).json({ error: "Tag not found" });
        }
      } else {
        const newTag = await pool.query(
          "INSERT INTO tag (title, description, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *",
          [title, description]
        );
        const createdTag = newTag.rows[0];
        const tagObject = {
          id: createdTag.id.toString(),
          title: createdTag.title,
          description: createdTag.description,
          created_at: createdTag.created_at,
          updated_at: createdTag.updated_at,
        };
        return response.status(201).json(tagObject);
      }
    } catch (error: unknown) {
      console.error("Error saving/updating tag:", error);
      response
        .status(500)
        .json({
          error: "An error occurred while saving/updating the tag",
          details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
  };
  static deleteTagById = async (tagId: string) => {
    try {
      const result = await pool.query(
        "SELECT * FROM public.tag WHERE id = $1",
        [tagId]
      );

      if (result.rows.length > 0) {
        await pool.query("DELETE FROM public.tag WHERE id = $1", [tagId]);
        return {
          success: true,
          message: "Tag deleted successfully",
          data: result.rows[0],
        };
      } else {
        throw new Error("Tag not found");
      }
    } catch (error) {
      throw new Error("An error occurred while deleting the tag");
    }
  };
}

export {
    TagController
}