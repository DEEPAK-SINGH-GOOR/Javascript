const apiKey = 'e6b6613d70f60c1ab55573888415632d';

const fetchWeather = async () => {
    const city = document.getElementById('city-input').value || 'surat';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let req = await fetch(apiUrl);
    let res = await req.json();

    if (res.cod !== 200) {
        console.error(`Error: ${res.message}`);
        return;
    }

    document.getElementById("city-name").innerHTML = `Weather in ${res.name}`;
    document.getElementById("temperature").innerHTML = `Temperature: ${res.main.temp}°C`;
    document.getElementById("description").innerHTML = `Weather: ${res.weather[0].description}`;
    document.getElementById("humidity").innerHTML = `Humidity: ${res.main.humidity}%`;

    const weatherCondition = res.weather[0].main.toLowerCase();

    const weatherIcons = {
        rain: 'https://img.icons8.com/color/100/000000/rain.png',
        clouds: 'https://img.icons8.com/color/100/000000/cloud.png',
        clear: 'https://img.icons8.com/color/100/000000/sun.png',
        haze: 'https://img.icons8.com/color/100/000000/fog-day.png',
        fog: 'https://img.icons8.com/color/100/000000/fog-day.png',
    };

    document.getElementById('weather-icon').src = weatherIcons[weatherCondition] || 'https://img.icons8.com/color/100/000000/partly-cloudy-day.png';
};

document.addEventListener("DOMContentLoaded", fetchWeather);
document.getElementById('get-weather-btn').addEventListener('click', fetchWeather);
