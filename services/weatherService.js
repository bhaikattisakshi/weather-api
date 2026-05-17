const axios = require("axios");

const fetchWeather = async (city) => {

    const apiKey =
    process.env.WEATHER_API_KEY;

    const url =
`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`;

    const response =
    await axios.get(url);

    return response.data;
};

module.exports = fetchWeather;