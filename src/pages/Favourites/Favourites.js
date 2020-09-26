import React, { useState, useEffect, useCallback } from 'react';
import SpreadOut from '../../components/Spreadout';
import { getCurrentConditions } from '../../API/fetch'


export default function Favourites({ favourites, updateCurrentLocation }) {
    const [weatherArray, setWeatherArray] = useState([]);

    const newCreateWeatherArray = favouritesArray => {
        Promise.all(favouritesArray.map(async locationObj => {
            const currentWeather = await getCurrentConditions(locationObj.id)
            const weatherObj = {
                id: locationObj.id,
                header: locationObj.name,
                temperature: currentWeather[0].Temperature.Metric.Value,
                icon: currentWeather[0].WeatherIcon,
                text: currentWeather[0].WeatherText,
            }
            return weatherObj
        })).then(result => {
            console.log("test result", result)
            setWeatherArray(result)
        })
    }

    useEffect(() => {
        if (favourites.length > 0) {
            newCreateWeatherArray(favourites);
        }
    }, [favourites])

    return (
        <div className="favourites-body">
            <div className="favourites-container">
                <SpreadOut
                    cardData={weatherArray.length > 0 && weatherArray}
                    isLoading={weatherArray.length === 0}
                    isClickable={true}
                />
            </div>
        </div>
    )
};