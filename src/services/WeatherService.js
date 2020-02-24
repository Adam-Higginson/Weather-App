
export function getWeatherForCityName(cityName) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dc93facdcf874781cabc9b5422260ef0`
    return fetch(url);
}