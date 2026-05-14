const fetchWeather = require("../services/weatherService");

const getWeather = async (req, res) => {

    try {

        const city = req.params.city;

        const weatherData = await fetchWeather(city);

        res.json(weatherData);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching weather data",
            error: error.message
        });
    }
};

module.exports = {
    getWeather
};
