import "../styles.css";
import { weatherModule } from "./weatherModule";
import { format } from "date-fns";

window.appController = (function() {

    const actualDate = format(new Date(), 'yyyy-MM-dd');

    function getActualTemp(city, celsius) {
        weatherModule.getWeatherInfo(city.toLowerCase(), actualDate, null)
        .then(weatherInfo => {
            return weatherInfo.json();
        })
        .then(weatherInfoJson => {
            let temperature = weatherInfoJson.currentConditions.temp;
            if (celsius) {
                temperature = (temperature - 32) * (5/9);
                temperature = Number(temperature.toFixed(1));
            } 
            console.log(temperature);
        }).catch(error => {
            console.error("An error ocurred during the execution: " + error);
        });
    }

    return { getActualTemp }
})();