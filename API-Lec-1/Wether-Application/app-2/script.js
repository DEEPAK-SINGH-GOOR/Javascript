const apiKey = "e6b6613d70f60c1ab55573888415632d";

    function getWeatherIcon(weatherMain) {
        switch (weatherMain.toLowerCase()) {
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

    async function checkWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        const weatherMain = data.weather[0].main;
        const weatherIcon = getWeatherIcon(weatherMain);
        document.getElementById("weather-icon").src = weatherIcon;
    }

    document.getElementById("search-btn").addEventListener("click", () => {
        const city = document.getElementById("city-input").value;
        checkWeather(city);
    });