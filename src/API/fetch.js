import axios from 'axios';
import {message} from 'antd';

const API_KEY = "VlbDqUWC7TBfuUqAAKJTcQc9EFAJytm5";
const corsUrl = "https://cors-anywhere.herokuapp.com/";

// const testValueCurrentWeather = [
//     {"LocalObservationDateTime":"2020-09-25T16:16:00+03:00","EpochTime":1601039760,"WeatherText":"Clouds and sun","WeatherIcon":4,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":29.4,"Unit":"C","UnitType":17},"Imperial":{"Value":85.0,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}
// ]

export async function handleSearch(value) {
    const url = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    try {
        const response = await axios.get(`${corsUrl}${url}?apikey=${API_KEY}&q=${value}`);
        return response.data;
    } catch (err) {
        // console.log("error", err)
        message.error('Unable to autocomplete.')

    };

};

export async function getCurrentConditions(id) {
    const url = "http://dataservice.accuweather.com/currentconditions/v1/"
    try {
        const response = await axios.get(`${corsUrl}${url}${id}?apikey=${API_KEY}`);
        return response.data;
        // const response = testValueCurrentWeather;
        // return response;
    } catch (err) {
        // console.log("error", err)
        message.error('Unable to get current weather conditions.')

    };
};

export async function get5DayForecast(id) {
    const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    try {
        const response = await axios.get(`${corsUrl}${url}${id}?apikey=${API_KEY}&metric=true`);
        return response.data;
    } catch (err) {
        // console.log("test err",err)
        message.error('Unable to get current weather conditions.')

    };
}