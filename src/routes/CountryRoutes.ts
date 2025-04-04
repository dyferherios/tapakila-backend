import { Router } from "express";
import { CountryController } from "../controllers/CountryController.js";
const router = Router();

router.get("/", CountryController.getCountry);
router.get("/:id", async (req, res) => {
  try {
    const country = await CountryController.getCountryById(req.params.id);
    res.json(country);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the country" });
  }
});
router.post("/", CountryController.saveCountry);
router.put("/", CountryController.saveCountry);
router.delete("/:countryId", async (req, res) => {
  const countryId = req.params.countryId;
  try {
    if (typeof countryId !== "string" || !countryId) {
      return res
        .status(400)
        .json({ error: "countryId is required and must be a string" });
    }
    await CountryController.deleteCountryById(countryId);
    res.status(201).json("Country deleted succefully");
  } catch (error) {
    res.status(500).json({ error: "An error occured while deleting country" });
  }
});

export default router;
