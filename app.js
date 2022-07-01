let getWeatherData = () => {
    let city = document.getElementById("city").value;

    axios.get(`https://api.weatherapi.com/v1/current.json?key=b52a1217af194e27bfa155504223006&q=${city}`)
        .then(function (response) {
            const data = response.data;
            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");

            // Getting weather icons
            document.getElementById(`weather_icon`).src = icon;

            // Getting temperatures
            document.getElementById(`tempC`).innerText = `${data.current.temp_c}°C`;
            // document.getElementById(`tempF`).innerText = `Temp in Fahrenheit: ${data.current.temp_f} °F`;

            // Getting feels like
            document.getElementById(`feels_like`).innerText = `Feels like: ${data.current.feelslike_c}°C`;

            // Getting location
            document.getElementById(`city_name`).innerText = `${data.location.name}`;

            // Getting weather condition
            document.getElementById(`weather_condition`).innerText = data.current.condition.text;
            
            // Getting Humidity
            document.getElementById(`humidity`).innerText = `Humidity: ${data.current.humidity}%`;

            // Getting Visibility
            document.getElementById(`visibility`).innerText = `Visibility: ${data.current.vis_km}Kms`;

            // Getting Windspeed
            document.getElementById(`wind_speed`).innerText = `Wind speed: ${data.current.wind_kph}Km/h`;
        })
}
