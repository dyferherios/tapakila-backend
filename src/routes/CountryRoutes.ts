import { Router } from 'express';
import {
  CountryController
} from '../controllers/CountryController.js'
const router = Router();

router.get("/", CountryController.getCountry);
router.get("/:id", async (req, res) => {
  try {
    const country = await CountryController.getCountryById(req.params.id);
    res.json(country);  // Retourner l'objet pays
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching the country" });
  }
});

export default router;
