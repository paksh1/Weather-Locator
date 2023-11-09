let weather = {
    apiKey : "58c325f61697ddbc1bdb17895aca8a2e",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+ this.apiKey +"&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.log(`There was an error fetching weather: ${error}`));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "WEATHER IN " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humid").innerText = "HUMIDITY: " + humidity + "%";
    document.querySelector(".wind").innerText = "WIND SPEED: " + speed + "KM/H";
    document.querySelector(".desc").innerText = description;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
    document.body.style.backgroundImage = "url('https:source.unsplash.com/1600x900/?"+ name +"')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search-btn").addEventListener("click", function() {
    weather.search();
    document.querySelector(".search-bar").value = "";
});
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter"){
        weather.search();
        document.querySelector(".search-bar").value = "";
    }
});