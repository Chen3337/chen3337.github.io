var theCityNameArray = {
    name : []
};
var theStoreage = JSON.parse(localStorage.getItem("theCityNameArray"));
if(theStoreage === null){

}
else{
    theCityNameArray = theStoreage;
    addCity();
}
$("#searchBtn").on("click", function(){
    var theCityName = $("#theCityInput").val();
    theAjaxCall(theCityName, true);
});
$("#theCityDisplay").on("click", function(event){
    var cityName1 = event.target.getAttribute("data-name");
    theAjaxCall(cityName1, false);
});
function addCity(cityName){
    if(cityName === undefined){
    }
    else{
        $("#theCityDisplay").empty();
         var checkArray = theCityNameArray.name.indexOf(cityName.toLowerCase())
         if(checkArray === -1){
             theCityNameArray.name.push(cityName);
         }
        localStorage.setItem("theCityNameArray", JSON.stringify(theCityNameArray));
    }
    for(i=0; i < theCityNameArray.name.length; i++){
        var newDiv = $("<div>");
        newDiv.text(theCityNameArray.name[i]);
        newDiv.addClass("cityNameTag btn btn-primary btn-block");
        newDiv.attr("data-name", theCityNameArray.name[i]);
        $("#theCityDisplay").append(newDiv);
    }
}
function theAjaxCall(cityName, x){
    var city = cityName.replace( " ", "%20");
    var theWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2c9429a7f45eac540b72e1c276819bfd";
    $.ajax({
        url: theWeatherUrl,
        method: "GET"
    }).then(function(response) {
        changeTodayInformation(response);
        if(x){
        addCity(cityName);
        }
    }).fail(function(){
        $("#message").html("ERROR NOT A CITY NAME");
        setTimeout(function () {
            $("#message").html("");
        }, 3000); 
    });
}
function changeTodayInformation(response){
    var degreeKelvin = response.main.temp;
    var degreeF = degreeKelvin * (9/5) - 459.67;
    $("#cityname").text(response.name);
    $("#todayIcon").attr("src","https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
    $("#todaydate").text(moment().format('L'));
    $("#temp").text(degreeF.toFixed(1) + "F");
    $("#humidity").text(response.main.humidity + "%");
    $("#wind").text(response.wind.speed + "MPH");
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    var UVIndexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=2c9429a7f45eac540b72e1c276819bfd&lat=" + lat + "&lon=" + lon;
    $.ajax({
        url : UVIndexURL,
        method: "GET"
    }).then(function(response){
        $("#UV").text(response.value);
        $("#UV").addClass("UVColor");
    });
    fiveDayForecast(lat,lon);
}
function fiveDayForecast(lat,lon){
    for(i=1; i < 6; i++){
        $("#forecastDate" + i).text(moment().add(i, 'days').format('L'));
    };
    var theForecastURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=2c9429a7f45eac540b72e1c276819bfd";
    $.ajax({
        url : theForecastURL,
        method : "GET"
    }).then(function(response){
        forecastCalculations(response);
    });
}
// the other one is not free so this one is used
function forecastCalculations(response){
    var dayOneHumidity = 0;
    var dayTwoHumidity = 0;
    var dayThreeHumidity = 0;
    var dayFourHumidity = 0;
    var dayFiveHumidity = 0;
    var dayOneTemp = 0;
    var dayTwoTemp = 0;
    var dayThreeTemp = 0;
    var dayFourTemp = 0;
    var dayFiveTemp = 0;
    for(i=0; i < 40; i++){
        var humidity = response.list[i].main.humidity;
        var Temp = response.list[i].main.temp;
        
        if(i < 8){
            dayOneHumidity = dayOneHumidity + humidity;
            dayOneTemp = dayOneTemp + Temp;
        }
        else if(i < 16){
            dayTwoHumidity = dayTwoHumidity + humidity;
            dayTwoTemp = dayTwoTemp + Temp;
        }
        else if(i < 24){
            dayThreeHumidity = dayThreeHumidity + humidity;
            dayThreeTemp = dayThreeTemp + Temp;
        }
        else if(i < 32){
            dayFourHumidity = dayFourHumidity + humidity;
            dayFourTemp = dayFourTemp + Temp;
        }
        else{
            dayFiveHumidity = dayFiveHumidity + humidity;
            dayFiveTemp = dayFiveTemp + Temp;
        }
    }
    dayOneTemp = (dayOneTemp/8) * (9/5) - 459.67;
    dayTwoTemp = (dayTwoTemp/8) * (9/5) - 459.67;
    dayThreeTemp = (dayThreeTemp/8) * (9/5) - 459.67;
    dayFourTemp = (dayFourTemp/8) * (9/5) - 459.67;
    dayFiveTemp = (dayFiveTemp/8) * (9/5) - 459.67;
    $("#fHunmidity1").text("humidity: " + (dayOneHumidity/8).toFixed(0) + "%");
    $("#fHunmidity2").text("humidity: " + (dayTwoHumidity/8).toFixed(0) + "%");
    $("#fHunmidity3").text("humidity: " + (dayThreeHumidity/8).toFixed(0) + "%");
    $("#fHunmidity4").text("humidity: " + (dayFourHumidity/8).toFixed(0) + "%");
    $("#fHunmidity5").text("humidity: " + (dayFiveHumidity/8).toFixed(0) + "%");
    $("#temp1").text("temp: " + dayOneTemp.toFixed(2) + "F");
    $("#temp2").text("temp: " + dayTwoTemp.toFixed(2) + "F");
    $("#temp3").text("temp: " + dayThreeTemp.toFixed(2) + "F");
    $("#temp4").text("temp: " + dayFourTemp.toFixed(2) + "F");
    $("#temp5").text("temp: " + dayFiveTemp.toFixed(2) + "F");
    $("#fImg1").attr("src","http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png");
    $("#fImg2").attr("src","http://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png");
    $("#fImg3").attr("src","http://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png");
    $("#fImg4").attr("src","http://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png");
    $("#fImg5").attr("src","http://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png");
    $("img").css("visibility", "visible");
}