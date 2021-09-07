const weatherApi=
{
    key:"6f9a487d6e61a44829d6e489cb66a6a6",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather",
}
const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});
// Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://www.clickprophotographers.com/dailyproject/wp-content/uploads/2015/06/Green-Hills-and-Blue-Sky-with-Cloud-Frosting.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2t4v9iGDj39jZ1wWxW8J2L3mbwxkZtpvFw&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Haze' || weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkg7aB-KnqJPWcilTtNVrnN7A9V5THlF_sQ&usqp=CAU')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYtUrk13h7GK0rFspxEWga5zruZrLTA2Cig&usqp=CAU')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUst8is19AtYhPMVCuKO8Ky6Y4dXckdic_Q&usqp=CAU')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBKRVa0OZoGWwbI6YdCNDbLDE3-zPv-NGDg&usqp=CAU')";
        
    } 
 }

// Date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
