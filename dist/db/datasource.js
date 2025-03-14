import * as dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config();
const dataSource = new Pool({
    connectionString: process.env.DATABASE_URL,
});
dataSource
    .connect()
    .then(() => console.log("✅ Connecté à Supabase"))
    .catch((err) => console.error("❌ Erreur de connexion :", err));
export default dataSource;
