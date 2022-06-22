/* weather.js */
export const getWeather = city => {
    fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
    .then(response => response.json())
    .then(data => showTemperature(data.current.temperature))
}

// Do NOT modify the code below
const result = document.querySelector("#result");
const showTemperature = temperature => {
  result.textContent = `It's ${temperature} degrees celsius.`;
}