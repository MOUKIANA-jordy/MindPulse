import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 5000,
    logging: false,
    dialectOptions: {
      connectTimeout: 30000, // Augmente le délai de connexion à 30 secondes
    },
  }
);

export { sequelize };
