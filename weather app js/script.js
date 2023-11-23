const API_Key = '50c807b4685a6df1e1756bb73cf5ecb4';
const API_Url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchbtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
async function getWeather(city) {

    const response = await fetch(API_Url + city + `&appid=${API_Key}`)
    const data = await response.json();
    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humitidy').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/hr'

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            break;
        default:
            break;

    }

}
searchbtn.addEventListener('click', () => {
    const searchbox = document.querySelector('.search input')
    getWeather(searchbox.value.toLowerCase())
})

