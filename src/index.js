function displayWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${city}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}
let apiKey = "4e90fb6f67e7658d1094eddbcb1d7180";
let city = "sydney";
let unit = "metric";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

axios.get(url).then(displayWeather);
