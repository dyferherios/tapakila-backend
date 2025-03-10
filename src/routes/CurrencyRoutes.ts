import { Router } from "express";
import { CurrencyController } from "../controllers/CurrencyController.js";

const router = Router();
router.get("/", CurrencyController.getCurrencies);
router.get("/:id", async(req, res) => {
    try {
        const currency = await CurrencyController.getCurrencyById(req.params.id);
        res.json(currency);
    } catch (error) {
        res.status(500).json({error: "An error occured while fetching currency"})
    }
})

export default router;