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
