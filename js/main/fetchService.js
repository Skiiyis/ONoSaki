import {fetch} from "react-native";

export function fetchWeather(cityName: string) {
    return fetch(`https://www.sojson.com/open/api/weather/json.shtml?city=${cityName}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.debug(responseJson);
        })
        .catch((error) => console.error(error));
}