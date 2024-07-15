const apiKey = "e6b6613d70f60c1ab55573888415632d";

function getWeatherIcon(diffcase) {
    switch (diffcase.toLowerCase()) {
        case 'clear':
            return 'img-files/clear.png';
        case 'clouds':
            return 'img-files/clouds.png';
        case 'rain':
            return 'img-files/rain.png';
        case 'drizzle':
            return 'img-files/drizzle.png';
        case 'thunderstorm':
            return 'img-files/thunderstorm.png';
        case 'snow':
            return 'img-files/snow.png';
        case 'mist':
        case 'fog':
        case 'haze':
            return 'img-files/mist.png';
        default:
            return 'img-files/default.png';
    }
}

async function checkweather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    const diffcase = data.weather[0].main;
    const weatherIcon = getWeatherIcon(diffcase);
    document.getElementById("weather-icon").src = weatherIcon;
}

// Taking Data
document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    checkweather(city);
});