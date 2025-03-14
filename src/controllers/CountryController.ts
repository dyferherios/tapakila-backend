import pool from '../db/datasource.js';
import { Country } from '../entity/Country.js';

class CountryController {

    static getCountry = async (request: any, response: any) => {
        try {
            const results = await pool.query('SELECT * FROM public.country');
            const countries: Country[] = results.rows.map((row) => {
                return new Country(
                    row.id.toString(),
                    row.name,
                    row.created_at,
                    row.updated_at
                );
            });
            response.status(200).json(countries);
        } catch (error) {
            console.error(error);
            response.status(500).json({ error });
        }
    };
    static getCountryById = async (countryId: string) => {
    try {
        const result = await pool.query('SELECT * FROM public.country WHERE id = $1', [countryId]);
        if (result.rows.length === 0) {
            throw new Error('Country not found');
        }
        const country = result.rows[0];
        const countryObject = new Country(
            country.id.toString(),
            country.name,
            country.created_at,
            country.updated_at
        );
        return countryObject;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

}

export {
    CountryController
};
