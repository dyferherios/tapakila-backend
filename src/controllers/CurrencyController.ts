import pool from '../db/datasource.js'
import { Currency } from '../entity/Currency.js'

class CurrencyController {
    static getCurrencies = async(request: any, response: any) => {
        try {
            const results =  await pool.query('SELECT * FROM currency');
            const currencies: Currency[] = results.rows.map((row) => {
                return new Currency(
                    row.id.toString(),
                    row.title,
                    row.description,
                    row.created_at,
                    row.updated_at,
                    row.delete_at
                );
            });
            response.status(200).json(currencies);
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
                currency.description,
                currency.created_at,
                currency.updated_at,
                currency.delete_at
            );
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static saveCurrency = async (request: any, response: any) => {
        const { id, title, description } = request.body;
    
        try {
          const result = await pool.query("SELECT * FROM currency WHERE id = $1", [id]);
    
          if (result.rows.length > 0) {
            const currency = result.rows[0];
            await pool.query(
              "UPDATE currency SET title = $1, description = $2, updated_at = NOW() WHERE id = $3",
              [title, description, id]
            );
    
            const updatedCurrency = new Currency(
              currency.id.toString(),
              title,
              description,
              currency.created_at,
              new Date()
            );
    
            return response.status(200).json(updatedCurrency);
          } else {
            const newCurrency = await pool.query(
              "INSERT INTO currency (title, description, created_at, updated_at) VALUES ($1, $2 NOW(), NOW()) RETURNING *",
              [title, description]
            );
    
            const createdCurrency= newCurrency.rows[0];
            const currencyObject = new Currency(
              createdCurrency.id.toString(),
              createdCurrency.title,
              createdCurrency.description,
              createdCurrency.created_at,
              createdCurrency.updated_at
            );
    
            return response.status(201).json(currencyObject);
          }
        } catch (error) {
          console.error(error);
          response
            .status(500)
            .json({ error: "An error occurred while saving/updating the currency" });
        }
      };
    
        static deleteCurrencyById = async (currencyId: string) => {
            try {
                await pool.query('DELETE FROM currency WHERE id=$1', [currencyId]);
            } catch (error) {
                throw error;
            }
        }
}

export {
    CurrencyController
}