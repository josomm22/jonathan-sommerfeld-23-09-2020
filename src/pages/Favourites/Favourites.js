import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import SpreadOut from '../../components/Spreadout';
import { getCurrentConditions } from '../../API/fetch'


export default function Favourites({ favourites, updateCurrentLocation, theme }) {
    const [weatherArray, setWeatherArray] = useState([]);

    const history = useHistory();

    const newCreateWeatherArray = favouritesArray => {
        try {
            Promise.all(favouritesArray.map(async locationObj => {
                const currentWeather = await getCurrentConditions(locationObj.id)
                const weatherObj = {
                    id: locationObj.id,
                    header: locationObj.name,
                }
                if (currentWeather) {
                    weatherObj = {...weatherObj,
                        temperature: currentWeather[0].Temperature.Metric.Value,
                        icon: currentWeather[0].WeatherIcon,
                        text: currentWeather[0].WeatherText,
                    }
                }
                return weatherObj
            })).then(result => {
                console.log("test result", result)
                setWeatherArray(result)
            })
        } catch (err) {
            message.error('problem receiving favorites, refresh page to try again')
        }

    };

    const onCardClick = useCallback(locationObj => {
        console.log("test event", locationObj)
        updateCurrentLocation(locationObj)
        history.push('/home')

    }, [history]);

    useEffect(() => {
        if (favourites.length > 0) {
            newCreateWeatherArray(favourites);
        }
    }, [favourites])

    return (
        <div className={`favourites-body ${theme}`}>
            <div className="favourites-container">
                <SpreadOut
                    cardData={weatherArray.length > 0 && weatherArray}
                    isLoading={weatherArray.length === 0}
                    isClickable={true}
                    onCardClick={onCardClick}
                    cardAmount={favourites ? favourites.length : 1}
                />
            </div>
        </div>
    )
};