import displayForecast from './displayForecast';

const kelvinToCelcius = (kelvin) => (kelvin - 273.15).toFixed(0);
const kelvinToFaren = (kelvin) => (((kelvin - 273.15) * 1.8000) + 32.00).toFixed(0);
const formatDate = (date) => date.toString().split(' ').slice(0, 4).join(' ');

const queryWeather = async (location, measure = '', country = '') => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&APPID=7d85f627bb20c38d33d2070d1f9de960`;

  const forecastRequest = await fetch(api, { mode: 'cors' })
    .then(res => res.json())
    .then(async data => {
      const { temp, humidity } = await data.main;
      const { description } = await data.weather[0];

      const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const locationDate = formatDate(new Date(data.dt * 1000));

      const displayedTemp = measure === 0 ? `${kelvinToCelcius(temp)} º C` : `${kelvinToFaren(temp)} º F`;
      displayForecast(`${data.name} ${data.sys.country}`, displayedTemp, icon, description, humidity, locationDate);

      return data;
    })
    .catch(error => new Error('Promise not fullfilled'));

  return forecastRequest;
};

export default queryWeather;