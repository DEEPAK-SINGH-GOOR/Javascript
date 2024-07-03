const button = document.getElementById('get-location-button');

async function getData(lat, long) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${lat},${long}&units=metric&appid=`;
    const promise = await fetch(``)
    return await promise.json();
}

async function gotlocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedToGet() {
    console.log('Failed to get location');
}

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(gotlocation, failedToGet);
});