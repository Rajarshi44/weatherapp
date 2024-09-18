const key = '904b3b12ba092ce98a74445951383a6d';
const result = document.getElementById('result'); 

document.querySelector('.search-btn').addEventListener('click', function (event) {
    event.preventDefault(); 
    const city = document.querySelector('.search-input').value; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <div class="weather-header">
                    <h2>&#x1F3D9; ${data.name}</h2>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                </div>
                <div class="weather-details">
                    <p><i class="fas fa-thermometer-half"></i> ${data.main.temp} °C</p>
                    <p><i class="fas fa-tint"></i> ${data.main.humidity}% Humidity</p>
                    <p><i class="fas fa-wind"></i> ${data.wind.speed} m/s Wind</p>
                </div>
            `;
            result.innerHTML = weatherData;
        })
        .catch(error => {
            result.innerHTML = `
                <h2 class="error-message">City not found</h2>
            `;
        });
});
