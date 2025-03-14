var _a;
import pool from '../db/datasource.js';
import { Currency } from '../entity/Currency.js';
class CurrencyController {
}
_a = CurrencyController;
CurrencyController.getCurrencies = async (request, response) => {
    try {
        const results = await pool.query('SELECT * FROM currency');
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
        const result = await pool.query('SELECT * FROM currency WHERE id = $1', [currencyId]);
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
export { CurrencyController };
