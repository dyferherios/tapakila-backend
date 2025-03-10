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

}

export {
    TagController
}