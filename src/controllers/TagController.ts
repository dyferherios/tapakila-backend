import pool from '../db/datasource.js';
import { Tag } from '../entity/Tag.js';

class TagController {
    static getTags = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM tag');
            const tags: Tag[] = results.rows.map((row) => {
                return new Tag(
                    row.id.toString(),
                    row.title,
                    row.decsription,
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
        const result = await pool.query('SELECT * FROM tag WHERE id = $1', [tagId]);
        if (result.rows.length === 0) {
            throw new Error('Tag not found');
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
    
        try {
          const result = await pool.query("SELECT * FROM tag WHERE id = $1", [id]);
    
          if (result.rows.length > 0) {
            const tag = result.rows[0];
            await pool.query(
              "UPDATE tag SET title = $1, description = $2, updated_at = NOW() WHERE id = $3",
              [title, description, id]
            );
    
            const updatedTag= new Tag(
              tag.id.toString(),
              title,
              description,
              tag.created_at,
              new Date()
            );
    
            return response.status(200).json(updatedTag);
          } else {
            const newTag = await pool.query(
              "INSERT INTO tag (title, description, created_at, updated_at) VALUES ($1, $2 NOW(), NOW()) RETURNING *",
              [title, description]
            );
    
            const createdTag= newTag.rows[0];
            const tagObject = new Tag(
                createdTag.id.toString(),
                createdTag.title,
                createdTag.description,
                createdTag.created_at,
                createdTag.updated_at
            );
    
            return response.status(201).json(tagObject);
          }
        } catch (error) {
          console.error(error);
          response
            .status(500)
            .json({ error: "An error occurred while saving/updating the tag" });
        }
      };
    
        static deleteTagById = async (tagId: string) => {
            try {
                await pool.query('DELETE FROM currency WHERE id=$1', [tagId]);
            } catch (error) {
                throw error;
            }
        }
}

export {
    TagController
}