import pkg from "pg";
import dotenv from "dotenv";
// Charger les variables d'environnement
dotenv.config({ path: "../../.env" });
const { Pool } = pkg;
// Validation des variables d'environnement
const requiredEnv = ["DB_USER", "DB_HOST", "DB_NAME", "DB_PASSWORD", "DB_PORT"];
requiredEnv.forEach((envVar) => {
    if (!process.env[envVar]) {
        throw new Error(`❌ Erreur : La variable d'environnement ${envVar} est manquante.`);
    }
});
const datasource = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
    ssl: {
        rejectUnauthorized: false,
    },
});
console.log(process.env.PGPASSWORD);
// Vérification de la connexion
datasource
    .connect()
    .then(() => console.log("✅ Connexion réussie à la base de données PostgreSQL !"))
    .catch((err) => console.error("❌ Erreur de connexion :", err));
// Export du pool pour l'utiliser ailleurs dans l'application
export default datasource;
