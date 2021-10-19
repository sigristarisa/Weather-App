const search = document.getElementById("search");
const cityName = document.getElementById("cityName");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const feelsLike = document.getElementById("feelsLike");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=b75119bca09124d69520a444216b1db2`
)
  .then((response) => response.json())
  .then((data) => {
    cityName.innerText = `${data.name}, ${data.sys.country}`;
    weather.innerText = data.weather[0].main;
    temperature.innerText = data.main.temp;
    feelsLike.innerText = data.main.feels_like;
    wind.innerText = data.wind.speed;
    humidity.innerText = data.main.humidity;
    console.log(data);
  });
