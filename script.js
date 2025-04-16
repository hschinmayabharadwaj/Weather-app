
const apiKey="264685f3f3f2e6226660fa95dd1c7446";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ "&appid=" + apiKey);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();
        
    //Weather icon(alternative method)
        // const weatherIcon = document.querySelector(".weather-icon");
        // const imgSrc = data.weather[0].main.toLowerCase();
        // weatherIcon.src="images/"+imgSrc+".png";

        document.querySelector(".weather-icon").src=" "data.weather[0].main.toLowerCase()+".png";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>°C</sup>";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/p";

        document.querySelector(".weather").style.display="block";
    }

}

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        });

        // searchBtn.addEventListener("click",function(){
        //     checkWeather(searchBox.value);
        // });

        searchBox.addEventListener("keyup",function(event){
            if(event.key=="Enter"){
                checkWeather(searchBox.value);
            }
        });
    
