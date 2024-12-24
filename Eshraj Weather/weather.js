
    
     function ajaxcall(city) {
        
        fetch(`https://api.weatherapi.com/v1/current.json?key=116a8897e45f476da74180353241204&q=${city}`)
        .then(response=>response.json())
        .then((val)=>{
          document.querySelector(".image").innerHTML="";
          console.log(val);
          var weather_Humidity = val.current.humidity;
          var weather_Temperature = val.current.temp_c;
          var weatehr_windSpeed = val.current.wind_kph;
          var weather_img = val.current.condition.icon;
          var weather_FeelsLike =val.current.feelslike_c;
          var weather_state = val.location.name;
          var weather_country = val.location.country;
          var weather_climate = val.current.condition.text;
        //   console.log(weather_img);

          document.querySelector(".para-humidity").innerHTML = weather_Humidity;
          document.querySelector(".para-windSpeed").innerHTML = weatehr_windSpeed;
          document.querySelector(".para-temperature").innerHTML = weather_Temperature;
          document.querySelector(".para-feels").innerHTML = weather_FeelsLike;
          document.querySelector("#state").innerHTML = weather_state;
          document.querySelector("#country").innerHTML = weather_country;
          document.querySelector(".climate-name").innerHTML = weather_climate;

          var ImgTag = document.createElement("img");
          ImgTag.src = weather_img;

          document.querySelector(".image").append(ImgTag);
          
          
        })
        

       

    }
    
    
    document.querySelector(".Select-Button").onclick = function () {
    //   console.log("Test");
        var city = document.querySelector(".form-control").value;
        console.log(city);
        ajaxcall(city)

        
    }