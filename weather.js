    let getDiv = document.getElementById('main');

    function search() {
    let getsearch = document.getElementById('search');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getsearch.value}&appid=2a831d6720747b6ceeddcdf7015c04fa&units=metric`)
        .then(res => res.json())
        .then(data => {
        getDiv.innerHTML = `
            <div class="card" style="width: 22rem;">
            <img src="https://cdn.dribbble.com/userupload/19513647/file/original-39f618b6373ffe558829e1e3dad570a2.gif" class="card-img-top" alt="weather image">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="temp">${Math.round(data.main.temp)}°C</p>
                <p class="detail">Feels like: ${Math.round(data.main.feels_like)}°C</p>
                <p class="detail">Humidity: ${data.main.humidity}%</p>
            </div>
            </div>
        `;
        })
        .catch(err => {
        getDiv.innerHTML = `<p class="text-danger">City not found. Try again!</p>`;
        console.error("Error fetching weather data:", err);
        });

    getsearch.value = '';
    }
