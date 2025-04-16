const apiKey = "264685f3f3f2e6226660fa95dd1c7446";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city + "&appid=" + apiKey);

        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();

            document.querySelector(".weather-icon").src = "images/" + data.weather[0].main.toLowerCase() + ".png";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°C</sup>";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            document.querySelector(".error").style.display = "none"; // hide error if previously shown
            document.querySelector(".weather").style.display = "block";
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

// Click event
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city !== "") {
        checkWeather(city);
    }
});

// Enter key event
searchBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const city = searchBox.value.trim();
        if (city !== "") {
            checkWeather(city);
        }
    }
});
