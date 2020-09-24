import React, { useState, useEffect, useCallback } from 'react';
import { Button } from 'antd'
import { LoadingOutlined, HeartTwoTone } from '@ant-design/icons';
import Search from '../../components/Search';
import { get5DayForecast } from '../../API/fetch';
import { getLocalStorage, setLocalStorage } from '../../API/localStorage';
import iconFinder from '../../Helpers/iconFinder';
import { getDayOfTheWeek } from '../../Helpers/dateHelpers';

const testResponse = ({ "Headline": { "EffectiveDate": "2020-09-26T08:00:00+03:00", "EffectiveEpochDate": 1601096400, "Severity": 4, "Text": "Pleasant this weekend", "Category": "mild", "EndDate": null, "EndEpochDate": null, "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us" }, "DailyForecasts": [{ "Date": "2020-09-23T07:00:00+03:00", "EpochDate": 1600833600, "Temperature": { "Minimum": { "Value": 24.4, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 35, "IconPhrase": "Partly cloudy", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us" }, { "Date": "2020-09-24T07:00:00+03:00", "EpochDate": 1600920000, "Temperature": { "Minimum": { "Value": 23.8, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 29.8, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us" }, { "Date": "2020-09-25T07:00:00+03:00", "EpochDate": 1601006400, "Temperature": { "Minimum": { "Value": 25.1, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.3, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 3, "IconPhrase": "Partly sunny", "HasPrecipitation": false }, "Night": { "Icon": 34, "IconPhrase": "Mostly clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us" }, { "Date": "2020-09-26T07:00:00+03:00", "EpochDate": 1601092800, "Temperature": { "Minimum": { "Value": 23.9, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 29.9, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us" }, { "Date": "2020-09-27T07:00:00+03:00", "EpochDate": 1601179200, "Temperature": { "Minimum": { "Value": 24.7, "Unit": "C", "UnitType": 17 }, "Maximum": { "Value": 30.5, "Unit": "C", "UnitType": 17 } }, "Day": { "Icon": 1, "IconPhrase": "Sunny", "HasPrecipitation": false }, "Night": { "Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": false }, "Sources": ["AccuWeather"], "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us", "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us" }] })

export default function Weather({ locationID, locationName, addFavourite, removeFavourite, favourites }) {
    const [forecasts, setForecasts] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);

    const getWeather = async id => {
        if (id) {
            const response = testResponse;
            console.log("weather", response);
            setForecasts(response.DailyForecasts)

        }
    };
    const searchFavourites = (id, array) => {
        return array.findIndex(item => item.id === id)
    };

    const handleFavourites = (id) => {
        if (isFavourite) {
            removeFavourite(id)
            setIsFavourite(false)
        } else {
            addFavourite({ id: locationID, name: locationName })
            setIsFavourite(true)
        }
    };
    const handleClick = useCallback(() => {
        handleFavourites(locationID)
    });


    useEffect(() => {
        getWeather(locationID)
    }, [locationID]);

    useEffect(() => {
        if (favourites.length > 0 && locationID) {
            const favouriteIndex = searchFavourites(locationID, favourites)
            setIsFavourite(favouriteIndex >= 0 ? true : false)
        } else setIsFavourite(false)
    }, [favourites, locationID])



    return (

        <div className="weather-container">
            <div className="weather-top">
                <div className="weather-top-left">
                    {locationName}
                    <br />
                    {forecasts.length > 0 ? `${forecasts[0].Temperature.Maximum.Value} C°` : <LoadingOutlined />}
                </div>
                <div className="weather-top-right">
                    <HeartTwoTone className="favourite-icon" twoToneColor={isFavourite ? "#eb2f96" : "#D3D3D3"} />
                    <Button className="favourite-btn" onClick={handleClick}>{isFavourite ? "Remove from Favourites" : "Add to Favourites"}</Button>

                </div>
            </div>
            <div className="weather-middle">

            </div>
            <div className="weather-bottom"></div>
        </div>
    )
};