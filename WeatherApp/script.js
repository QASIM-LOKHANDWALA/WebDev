// Data
// variable to store data
// function to get data from weather api
// mainpulate the variable of already created elements

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("Humidity");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const WeatherStatus = document.getElementById("WeatherStatus");

const getData = async () => {
    event.preventDefault();
    if(!inputBox.value){
        alert("PLEASE ENTER THE CITY NAME PROPERLY!");
        return;
    }

    const city = inputBox.value;

    // FETCH DATA FROM API
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f008af732614647b0d101612232612&q=${city}`);
    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    // DISPLAYING THE DATA IN HTML
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph + " KMPH";
    temperature.innerHTML = data.current.temp_c + " *C";
    WeatherStatus.innerHTML = data.current.condition.text;
    logoImage.src = data.current.condition.icon;

}
