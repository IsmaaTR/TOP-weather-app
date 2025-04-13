import { appController } from "./appController";

window.UIModule = (function() {
    let useCelsius = true; // Estado inicial: Celsius

    function init(appController) {
        const form = document.getElementById("search-city-form");
        const toggleUnitButton = document.getElementById("toggle-unit");

        // Listener para el formulario
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita que el formulario recargue la página
            const cityName = document.getElementById("cityName").value;
            appController.getActualTemp(cityName, useCelsius);
        });

        // Listener para alternar entre Celsius y Fahrenheit
        toggleUnitButton.addEventListener("click", function() {
            useCelsius = !useCelsius; // Cambia el estado
            toggleUnitButton.innerHTML = useCelsius ? "<b>C</b> / F" : "C / <b>F</b>";
        });
    }

    return { init };
})();

UIModule.init();