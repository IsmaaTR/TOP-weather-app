import "../styles.css";
import { weatherModule } from "./weatherModule";
import { format } from "date-fns";

export const appController = (function() {

    const actualDate = format(new Date(), 'yyyy-MM-dd');

    async function getActualTemp(city, celsius) {
        const weatherInfo = await weatherModule.getWeatherInfo(city.toLowerCase(), actualDate, null);
        const weatherInfoJson = await weatherInfo.json();
        let temperature = weatherInfoJson.currentConditions.temp;
        let minTemperature = weatherInfoJson.days[0].tempmin;
        let maxTemperature = weatherInfoJson.days[0].tempmax;
        if (celsius) {
            temperature = fahrenheitToCelsius(temperature);
            minTemperature = fahrenheitToCelsius(minTemperature);
            maxTemperature = fahrenheitToCelsius(maxTemperature);
        }
        let sky = weatherInfoJson.currentConditions.icon;
        return { temperature, minTemperature, maxTemperature, sky }
    }

    function fahrenheitToCelsius(fahrenheit) {
        let temperature = (fahrenheit - 32) * (5/9);
        temperature = Number(temperature.toFixed(1));
        return temperature;
    }

    return { getActualTemp }
})();