function showWeather(response) {
  //funtion that will respond with JSON object from the api.
  let temperatureElement = document.querySelector("#temperature");
  let currentTemp = response.data.temperature.current;
  let newCity = document.querySelector("#weather-app-city"); //this allows for h1 to change after every input
  newCity.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(currentTemp);
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

searchCity(Durban);

//used seperate functions so that they will be able to do one action at a time(and do it well) but they work together
