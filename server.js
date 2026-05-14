
require("dotenv").config();

const express = require("express");

const app = express();

const weatherRoutes = require("./routes/weatherRoutes");

app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
    res.send("Weather API Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
