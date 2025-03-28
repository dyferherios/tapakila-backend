var _a;
import pool from '../db/datasource.js';
import { Currency } from '../entity/Currency.js';
class CurrencyController {
}
_a = CurrencyController;
CurrencyController.getCurrencies = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM public.currency');
        const currencies = results.rows.map((row) => {
            return new Currency(row.id.toString(), row.title, row.description, row.created_at, row.updated_at, row.delete_at);
        });
        response.status(200).json(currencies);
    }
    catch (error) {
        console.error(error);
        response.status(500).json([error]);
    }
};
CurrencyController.getCurrencyById = async (currencyId) => {
    try {
        const result = await pool.query('SELECT * FROM public.currency WHERE id = $1', [currencyId]);
        if (result.rows.length === 0)
            throw new Error('Currency not found');
        const currency = result.rows[0];
        return new Currency(currency.id.toString(), currency.title, currency.description, currency.created_at, currency.updated_at, currency.delete_at);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
};
CurrencyController.saveCurrency = async (request, response) => {
    const { id, title, description } = request.body;
    try {
        const result = await pool.query("SELECT * FROM public.currency WHERE id = $1", [id]);
        if (result.rows.length > 0) {
            const currency = result.rows[0];
            await pool.query("UPDATE public.currency SET title = $1, description = $2, updated_at = NOW() WHERE id = $3", [title, description, id]);
            const updatedCurrency = new Currency(currency.id.toString(), title, description, currency.created_at, new Date());
            return response.status(200).json(updatedCurrency);
        }
        else {
            const newCurrency = await pool.query("INSERT INTO public.currency (title, description, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING *", [title, description]);
            const createdCurrency = newCurrency.rows[0];
            const currencyObject = new Currency(createdCurrency.id.toString(), createdCurrency.title, createdCurrency.description, createdCurrency.created_at, createdCurrency.updated_at);
            return response.status(201).json(currencyObject);
        }
    }
    catch (error) {
        console.error(error);
        response
            .status(500)
            .json({ error: "An error occurred while saving/updating the currency" });
    }
};
CurrencyController.deleteCurrencyById = async (currencyId) => {
    try {
        const result = await pool.query("SELECT * FROM public.currency WHERE id = $1", [currencyId]);
        if (result.rows.length > 0) {
            await pool.query("DELETE FROM public.currency WHERE id = $1", [currencyId]);
            return {
                success: true,
                message: "Currency deleted successfully",
                data: null,
            };
        }
    }
    catch (error) {
        throw Error("Error while deleting currency");
    }
};
export { CurrencyController };
