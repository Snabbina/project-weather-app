
const apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3d0d86970b5aff224fe8f40e9b4e2e78'
const container = document.getElementById('main');
const weatherElement = document.getElementById('weatherInfo');
const filteredForecast = document.getElementById('weatherFiveDays');

fetch(apiWeatherUrl)

.then((response) => {
  return response.json();
})
.then((weatherArray) => {
  
  console.log(weatherArray)

  // Step **2 - Present city, temp, description, data on your web app.**

  weatherElement.innerHTML = weatherArray.name;

  const temperatureElement = document.getElementById('temperature'); 
  const y = weatherArray.main.temp;
  const x = Math.round(y);
  temperatureElement.innerText = x; 
  
  const  weatherTypeElement = document.getElementById('weatherType');
  weatherTypeElement.innerText = weatherArray.weather[0].description;

 // Show the time for sunrise and sunset in a readable time format.
// Sunrise 
  const sunriseElement = document.getElementById('sunrise');
  const sunriseUnix = weatherArray.sys.sunrise * 1000
  const sunriseDate = new Date (sunriseUnix)
  const sunriseHour = sunriseDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', hour12: false,})
  sunriseElement.innerText = sunriseHour;
  console.log(sunriseHour)

  //  Sunset 
  const sunsetElement = document.getElementById('sunset');
  const sunsetUnix = weatherArray.sys.sunset * 1000
  const sunsetDate = new Date (sunsetUnix)
  const sunsetHour = sunsetDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit', hour12: false,})
  sunsetElement.innerText = sunsetHour;
  console.log(sunsetHour)
  
});  


// ## Step **4 - Weather forecast** Show a forecast for the next 5 days. Show the min and max temperature for each day.

const apiWeatherFiveDaysUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Stockholm,Sweden&units=metric&APPID=3d0d86970b5aff224fe8f40e9b4e2e78'

fetch(apiWeatherFiveDaysUrl)

.then((response) => {
  return response.json();
})
.then((item) => {
  
  console.log(item)

  const filteredForecast = item.list.filter(item => item.dt_txt.includes('12:00')) 
  console.log(filteredForecast)

  const minTemp = filteredForecast[0].main.temp_min
  const minTempElement = document.getElementById('minTemp')
  minTempElement.innerText = minTemp
  console.log(minTemp)
  // gör samma sak med maxTemp

  const dayOne = document.getElementById('dayOne');
  const dayOneUnix = filteredForecast[0].dt * 1000
  const dayOneDate = new Date (dayOneUnix)
  const commingFiveDays = dayOneDate.toLocaleDateString('en-US', {weekday: 'long'})
  console.log(commingFiveDays) 
  dayOne.innerText = commingFiveDays


})



// //  //extract element called list which is an array, from the object. Get info from array called list!

// const listArray = item.list;
// weatherFiveDays.innerText = listArray.list[0];

// // console.log(`List of weather forecast: ${listArray}`);


// //  // Next 5 days but for every third hour. info from 12:00 each day. 
  
//   console.log(`Filtered array: ${filteredForecast}`);

// });




