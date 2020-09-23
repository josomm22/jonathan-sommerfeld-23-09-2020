import axios from 'axios';
import {message} from 'antd';

const API_KEY = "VlbDqUWC7TBfuUqAAKJTcQc9EFAJytm5";
const corsUrl = "https://cors-anywhere.herokuapp.com/";


//GET /locations/v1/cities/autocomplete?apikey=VlbDqUWC7TBfuUqAAKJTcQc9EFAJytm5&q=tel HTTP/1.1

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
    debugger
    try {
        const response = await axios.get(`${corsUrl}${url}${id}?apikey=${API_KEY}`);
        return response.data;
    } catch (err) {
        // console.log("error", err)
        message.error('Unable to get curretn weather conditions.')

    };
};