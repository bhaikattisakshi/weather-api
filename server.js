require("dotenv").config();

const express = require("express");

const rateLimit = require("express-rate-limit");

const app = express();

const weatherRoutes = require("./routes/weatherRoutes");


// Rate Limiter
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,

    message: "Too many requests, please try again later."

});

app.use(limiter);

app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
    res.send("Weather API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
