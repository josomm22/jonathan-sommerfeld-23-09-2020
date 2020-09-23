import React, { useState, useEffect, useCallback } from 'react';
import Search from '../../components/Search';
import { getCurrentConditions } from '../../API/fetch';

export default function Weather({ locationID, locationName }) {

    const getWeather = async id => {
        if (id) {
            const response = await getCurrentConditions(id);
            console.log("weather", response);

        }
    };

    useEffect(() => {
        getWeather(locationID)
    }, [locationID])

    return (

        <div className="weather-container">
            <div className="weather-top">
                {locationName}
            </div>
            <div className="weather-middle"></div>
            <div className="weather-bottom"></div>
        </div>
    )
};