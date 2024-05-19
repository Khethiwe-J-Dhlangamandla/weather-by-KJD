function showWeather(response) {
  //funtion that will respond with JSON object from the api.
  let temperatureElement = document.querySelector("#temperature");
  let currentTemp = response.data.temperature.current;
  let newCity = document.querySelector("#weather-app-city"); //this allows for h1 to change after every input
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let dayElement = document.querySelector("#day");
  let date = new Date(response.data.time * 1000);

  newCity.innerHTML = response.data.city;
  //dayElement.innerHTML = formatDate(date);
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windspeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(currentTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes} `;
}

function searchCity(city) {
  //for api call and change user interface.
  let apiKey = "taa4b4dc4dfdof46c00d6401f73a1f23";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function submitSearchInformation(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input"); //data that is being inputed into the search bar

  searchCity(searchInput.value); //user searches on web for city,value will go to searchCityFunction
}

let searchForm = document.querySelector("#search-form"); //gets the search engine or form to be used
searchForm.addEventListener("submit", submitSearchInformation);

//used seperate functions so that they will be able to do one action at a time(and do it well) but they work together
