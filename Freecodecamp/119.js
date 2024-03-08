const LOCAL_FORECAST = {
    today: { min: 64, max: 77 },
    tomorrow: { min: 68, max: 80 }
  };
  
function getMaxOfTmrw(forecast){
    "use strict";

    const { tomorrow: { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}
    
console.log(getMaxOfTmrw(LOCAL_FORECAST));