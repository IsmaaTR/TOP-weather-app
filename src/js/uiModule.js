import { appController } from "./appController";

window.UIModule = (function() {
    let useCelsius = true; // Estado inicial: Celsius

    const form = document.getElementById("search-city-form");
    const toggleUnitButton = document.getElementById("toggle-unit");
    const cityNameParagraph = document.querySelector('#city-name');
    const temperatureParagraph = document.querySelector('#temperature');
    const skyParagraph = document.querySelector('#sky');
    const minMaxTempsParagraph = document.querySelector('#min-max-temps');

    function init() {

        // Listener para el formulario
        form.addEventListener("submit",async function(event) {
            event.preventDefault(); // Evita que el formulario recargue la página
            const cityName = document.getElementById("cityName").value;
            const info = await appController.getWeatherInfo(cityName, useCelsius);
            renderWeatherInfo(cityName, info);
        });

        // Listener para alternar entre Celsius y Fahrenheit
        toggleUnitButton.addEventListener("click", function() {
            useCelsius = !useCelsius; // Cambia el estado
            toggleUnitButton.innerHTML = useCelsius ? "<b>C</b> / F" : "C / <b>F</b>";
        });
    }

    function renderWeatherInfo(city, info) {
        cityNameParagraph.innerHTML = city;
        temperatureParagraph.innerHTML = useCelsius ? info.temperature + '°C' : info.temperature + '°F';
        skyParagraph.innerHTML = info.sky;
        if (useCelsius) {
            minMaxTempsParagraph.innerHTML = 'Max. ' + info.maxTemperature + ' °C Min. ' + info.minTemperature + '°C';       
        } else {
            minMaxTempsParagraph.innerHTML = 'Max. ' + info.maxTemperature + ' °F Min. ' + info.minTemperature + '°F';       
        }
    }

    return { init };
})();

UIModule.init();