const apikey="d2eb3bdae36bead2a80650f20faedf82";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");


// var cityname=document.querySelector("input").value; 
const weatherIcon=document.querySelector(".weather-icon");
// const display=document.querySelector(".weather");

async function checkweather(cityname){
    const response=await fetch(apiUrl+`${cityname}&appid=${apikey}&units=metric`);
    
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        
        
        var data=await response.json();
        console.log(data);
        document.querySelector(".city-name").innerHTML=data.name;
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"<sup>°c</sup>";
        
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Drizzel"){
            weatherIcon.src="images/drizzel.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        } 
        
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}

searchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value);
});

searchbox.addEventListener("keypress",()=>{
    if(event.key==="Enter"){
        checkweather(searchbox.value);
    }
});

checkweather(cityname);