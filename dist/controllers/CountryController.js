var _a;
import pool from "../db/datasource.js";
import { Country } from "../entity/Country.js";
class CountryController {
}
_a = CountryController;
CountryController.getCountry = async (request, response) => {
    try {
        const results = await pool.query("SELECT * FROM public.country");
        const countries = results.rows.map((row) => {
            return new Country(row.id.toString(), row.name, row.created_at, row.updated_at);
        });
        response.status(200).json(countries);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error });
    }
};
CountryController.getCountryById = async (countryId) => {
    try {
        const result = await pool.query("SELECT * FROM public.country WHERE id = $1", [countryId]);
        if (result.rows.length === 0) {
            throw new Error("Country not found");
        }
        const country = result.rows[0];
        const countryObject = new Country(country.id.toString(), country.name, country.created_at, country.updated_at);
        return countryObject;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
CountryController.saveCountry = async (request, response) => {
    const { id, name } = request.body;
    try {
        const result = await pool.query("SELECT * FROM public.country WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            const country = result.rows[0];
            await pool.query("UPDATE public.country SET name=$1, updated_at = NOW() WHERE id = $2", [name, id]);
            const updatedCountry = new Country(country.id.toString(), name, country.created_at, new Date());
            return response.status(200).json(updatedCountry);
        }
        else {
            const newCountry = await pool.query("INSERT INTO public.country (name, created_at) VALUES ($1, NOW()) RETURNING *", [name]);
            const createdCountry = newCountry.rows[0];
            const country = new Country(createdCountry.id.toString(), createdCountry.name, createdCountry.created_at, createdCountry.updated_at);
            return response.status(201).json(country);
        }
    }
    catch (error) {
        response.status(500).json({
            error: "An error occurred while saving/updating the country",
        });
    }
};
CountryController.deleteCountryById = async (countryById) => {
    try {
        const result = await pool.query("select * from public.country where id=$1", [countryById]);
        if (result.rows.length > 0) {
            await pool.query("delete from public.country where id=$1", [
                countryById,
            ]);
            return {
                success: true,
                message: "Country deleted successfully",
                data: null,
            };
        }
    }
    catch (error) {
        throw Error("Error occured while deleting country");
    }
};
export { CountryController };
