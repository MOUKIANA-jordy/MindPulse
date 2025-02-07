import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./auth.js";
import { sequelize } from "./config/db.js";

// Charger les variables d'environnement
dotenv.config();

const app = express()

// Middleware pour parser le JSON
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

// Test de la connexion Sequelize
sequelize.authenticate()
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

// route principale
app.get("/", (req,res)=>{
    res.send("Server MindPulse is ready")
})

app.get("/api/user",(req,res)=>{
    res.send(users)
})
const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`)
})
