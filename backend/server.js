const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

/**
 * DB connexion
 */
require("./config/dbConfig");

const app = express();

// middleware to treatment of request
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// middleware for debug on dev mode
app.use(morgan("dev"));

/**
 * User routes
 */
app.use("/user/auth", require("./routes/auth.routes"));
app.use("/user", require("./routes/user.routes"));
app.use("/user/orders", require("./routes/order.routes"));
app.use("/comments", require("./routes/comment.routes"));

// Ajout de la route pour les produits dans le fichier server.js. Toutes les routes pour vérification commencent par /products.
app.use("/products", require("./routes/products.routes"));

// Route pour les ventes
app.use("/sale", require("./routes/sales.routes"));

// Route pour les catégories
app.use("/categories", require("./routes/categories.routes"));

/**
 * Starting Express Server
 */
app.listen(PORT, () => {
    console.log("====================================");
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
    console.log("====================================");
});
