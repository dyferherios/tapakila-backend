import { Router } from "express";
import { CurrencyController } from "../controllers/CurrencyController.js";
const router = Router();
router.get("/", CurrencyController.getCurrencies);
router.get("/:id", async (req, res) => {
    try {
        const currency = await CurrencyController.getCurrencyById(req.params.id);
        res.json(currency);
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while fetching currency" });
    }
});
router.post("/", CurrencyController.saveCurrency);
router.put("/", CurrencyController.saveCurrency);
router.delete("/:currencyId", async (req, res) => {
    const currencyId = req.params.currencyId;
    try {
        if (typeof currencyId !== "string" || !currencyId) {
            return res
                .status(400)
                .json({ error: "currencyId is required and must be a string" });
        }
        await CurrencyController.deleteCurrencyById(currencyId);
        res.status(201).json("Currency deleted succefully");
    }
    catch (error) {
        res.status(500).json({ error: "An error occured while deleting currency" });
    }
});
export default router;
