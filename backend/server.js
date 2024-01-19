const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

// middleware to traitement of request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// middleware for debug on dev mode
app.use(morgan("dev"));

/**
 * TEST ROUTE
 */
app.get("/", (req, res) => {
    res.send("hello");
});

/**
 * Starting Express Server
 */
app.listen(PORT, () => {
    console.log("====================================");
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
    console.log("====================================");
});
