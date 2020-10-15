const displayForecast = (city, temp, icon, description, humidity, date) => {
  const weatherCard = document.querySelector('#weatherCard');

  weatherCard.innerHTML = `
      <h2 id="cityName" class="city-name">${city}</h2>
      <h4>${date}</h4>
      <h2>${temp}</h2>
      <img src="${icon}" class="weather-icon"></img>
      <h2>Description: ${description}</h2>
      <h2>Humidity: ${humidity} %</h2>    
    `;
  return weatherCard;
};

export default displayForecast;