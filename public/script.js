async function getWeather() {

    const city =
    document.getElementById("city").value;

    if(city === ""){

        alert("Please enter a city name");

        return;
    }

    try{

        document.getElementById("result").innerHTML =
        "<p>Loading...</p>";

        const response =
        await fetch(`/api/weather/${city}`);

        const data =
        await response.json();

        // Already in Celsius
        const tempC =
        data.days[0].temp;

        const humidity =
        data.days[0].humidity;

        document.getElementById("result").innerHTML = `

            <div class="weather-card">

                <h2>
                    🌍 ${data.resolvedAddress}
                </h2>

                <p>
                    🌡 Temperature:
                    ${tempC} °C
                </p>

                <p>
                    💧 Humidity:
                    ${humidity}%
                </p>

            </div>

        `;

    }
    catch(error){

        document.getElementById("result").innerHTML = `

            <p style="color:red;">
                City not found
            </p>

        `;
    }
}