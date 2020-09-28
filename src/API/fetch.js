import axios from 'axios';
import {message} from 'antd';

const corsUrl = "https://cors-anywhere.herokuapp.com/";
// const corsUrl = "";

const API_KEY = "hGztxhUP0p0ytAMPxwrFG2NrUbzpRArb";


export async function handleSearch(value) {
    const url = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    try {
        const response = await axios.get(`${url}?apikey=${API_KEY}&q=${value}`);
        return response.data;
    } catch (err) {
        message.error('Unable to autocomplete.')

    };

};

export async function getCurrentConditions(id) {
    const url = "https://dataservice.accuweather.com/currentconditions/v1/"
    try {
        const response = await axios.get(`${url}${id}?apikey=${API_KEY}`);
        return response.data;
        // const response = testValueCurrentWeather;
        // return response;
    } catch (err) {
        message.error('Unable to get current weather conditions.')

    };
};

export async function get5DayForecast(id) {
    const url = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    try {
        const response = await axios.get(`${url}${id}?apikey=${API_KEY}&metric=true`);
        return response.data;
    } catch (err) {
        message.error('Unable to get current weather conditions.')

    };
}

export async function fetchLocation(obj) {
    const url = "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search"
    try {
        const response = await axios.get(`${url}?apikey=${API_KEY}&q=${obj.latitude+','+obj.longitude}`);
        return response.data;

    } catch (err) {
        message.error('Unable to get current location name.')

    };
};