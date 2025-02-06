require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { sequelize } = require("./config/db");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Import des routes
app.use("/api/auth", require("./routes/authRoutes"));

// Connexion à MySQL
sequelize.sync()
  .then(() => console.log("MySQL connecté et synchronisé"))
  .catch(err => console.error("Erreur MySQL:", err));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
