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

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

/**
 * Starting Express Server
 */
app.listen(PORT, () => {
    console.log("====================================");
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
    console.log("====================================");
});
