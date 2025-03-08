import { request } from 'http'
import pool from '../db/datasource.js'
import { Currency } from '../entity/Currency.js'

class CurrencyController {
    static getCurrencies = async(request: any, response: any) => {
        try {
            const results =  await pool.query('SELECT * FROM currency');
            const Currencies: Currency[] = results.rows.map((row) => {
                return new(
                    row.id.toString(),
                    row.title,
                    row.decsription,
                    row.createdAt,
                    row.updatedAt,
                    row.deleteAt
                );
            });
            response.status(200).json(Currencies);
        } catch (error) {
            console.error(error);
            response.status(500).json([error]);
        }
    };

    static getCurrencyById = async(currencyId: string) => {
        try {
            const result = await pool.query('SELECT * FROM currency WHERE id = $1', [currencyId]);
            if (result.rows.length === 0) throw new Error('Currency not found');
            const currency = result.rows[0];
            return new Currency(
                currency.id.toString(),
                currency.title,
                currency.decsription,
                currency.createdAt,
                currency.updatedAt,
                currency.deleteAt
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export {
    CurrencyController
}