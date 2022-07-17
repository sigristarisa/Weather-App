import createWeatherPage from "./src/createWeatherPage.js";
import createWeatherIcon from "./src/createWeatherIcon.js";

search.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=b75119bca09124d69520a444216b1db2`
    )
      .then((response) => response.json())
      .then((data) => {
        createWeatherPage(data);
        createWeatherIcon(data);
      })
      .catch((error) => console.error("SOMETHING IS WRONG", error));
  }
});
