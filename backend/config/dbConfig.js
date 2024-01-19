import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbURI = process.env.DB_URI;

// DB connection
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion :"));
db.once("open", function () {
    console.log("====================================");
    console.log("Connecté à la base de données MongoDB");
    console.log("====================================");
});

/**
 * Database Disconnect Event Handler
 */
db.on("disconnected", function () {
    console.log("====================================");
    console.log("Déconnecté de la base de données MongoDB");
    console.log("====================================");
});

/**
 * Event handler for application termination
 */
process.on("SIGINT", function () {
    db.close(function () {
        console.log("====================================");
        console.log(
            "Connexion à la base de données terminée via application terminée"
        );
        console.log("====================================");

        process.exit(0);
    });
});
