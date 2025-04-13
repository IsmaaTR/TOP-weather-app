export const weatherModule = (function() {

    const APIKey = 'BTR9NVTMGCBT7KJ62TM7D5PK5';
    const visualCrossingBaseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

    async function getWeatherInfo(cityName, date1, date2) {
        let url = visualCrossingBaseUrl + cityName;
        if (date1 !== null) url += '/' + date1;
        if (date2 !== null) url += '/' + date2;
        url += '?key=' + APIKey;
        const weatherInformation = await fetch(url);
        return weatherInformation;
    }

    return { getWeatherInfo }

})();