function submitSearchInformation(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input"); //data that is being inputed into the search bar
  let newCity = document.querySelector("#weather-app-city"); //this allows for h1 to change after every input
  newCity.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form"); //gets the search engine or form to be used
searchForm.addEventListener("submit", submitSearchInformation);
