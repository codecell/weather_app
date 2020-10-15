import '../css/style.css';
import queryWeather from './components/queryWeather';

queryWeather('Lagos');

const forecastBtns = document.querySelectorAll('.btn');

forecastBtns.forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); 

    const city = document.querySelector('#city');

    if (city.value == '') {
      alert('No Location specified');
      return;
    }

    queryWeather(city.value, idx);
  });
})

