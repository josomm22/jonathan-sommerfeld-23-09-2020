import axios from 'axios';
import {message} from 'antd';

// const corsUrl = "https://cors-anywhere.herokuapp.com/";
// const corsUrl = "";

const API_KEY = "fqKRY7vAp6lLURLdSrIOBtwsRynCDTyL";
const baseUrl = "https://dataservice.accuweather.com/"


export async function handleSearch(value) {
    const endPoint = "locations/v1/cities/autocomplete"
    try {
        const response = await axios.get(`${baseUrl}${endPoint}?apikey=${API_KEY}&q=${value}`);
        return response.data;
    } catch (err) {
        message.error('Unable to autocomplete.')

    };

};

export async function getCurrentConditions(id) {
    const endPoint = "currentconditions/v1/"
    try {
        const response = await axios.get(`${baseUrl}${endPoint}${id}?apikey=${API_KEY}`);
        return response.data;
    } catch (err) {
        message.error('Unable to get current weather conditions.')

    };
};

export async function get5DayForecast(id) {
    const endPoint = "forecasts/v1/daily/5day/"
    try {
        const response = await axios.get(`${baseUrl}${endPoint}${id}?apikey=${API_KEY}&metric=true`);
        return response.data;
    } catch (err) {
        message.error('Unable to get current weather conditions.')

    };
}

export async function fetchLocation(obj) {
    const endPoint = "locations/v1/cities/geoposition/search"
    try {
        const response = await axios.get(`${baseUrl}${endPoint}?apikey=${API_KEY}&q=${obj.latitude+','+obj.longitude}`);
        return response.data;

    } catch (err) {
        message.error('Unable to get current location name.')

    };
};