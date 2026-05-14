<<<<<<< HEAD
const express = require("express");

const router = express.Router();

const {
    getWeather
} = require("../controllers/weatherController");

router.get("/:city", getWeather);

module.exports = router;
=======
const express = require("express");

const router = express.Router();

router.get("/:city", (req, res) => {

    const city = req.params.city;

    res.json({
        city: city,
        message: "Weather route working"
    });
});

module.exports = router;
>>>>>>> 4132f22335f5aac8eef3e4d2ad886e334d0bee1b
