import React, { useState, useEffect, useCallback } from 'react';
import { Button, message, Switch } from 'antd';
import { LoadingOutlined, HeartTwoTone } from '@ant-design/icons';
import { get5DayForecast } from '../../API/fetch';
import { getDayOfTheWeek } from '../../Helpers/dateHelpers';
import { getCoordinates } from '../../API/geolocation';
import Marquee from '../Marquee';
import SpreadOut from '../Spreadout';
import { cToF } from '../../Helpers/temperature';

export default function Weather({ currentLocation, updateCurrentLocation, addFavourite, removeFavourite, favourites, tempUnit, toggleTemp }) {
    const [forecasts, setForecasts] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);

    const getWeather = async id => {
        if (id) {
            try {
                // const response = testResponse;
                const response = await get5DayForecast(id);
                setForecasts(response.DailyForecasts)
            } catch (err) {
            }

        };
    };

    const handleFavourites = useCallback((id) => {
        if (isFavourite) {
            removeFavourite(id);
            setIsFavourite(false);
        } else {
            if (favourites.length < 5) {
                addFavourite(currentLocation);
                setIsFavourite(true);
            } else {
                message.error('maximum of 5 favourites allowed');
            };
        };
    }, [isFavourite, favourites, currentLocation]);

    const handleClick = useCallback(() => {
        handleFavourites(currentLocation.id);
    }, [currentLocation, handleFavourites]);

    const createCardData = array => {
        return array.map(dayForecast => {
            const formattedData = {
                header: getDayOfTheWeek(dayForecast.EpochDate),
                temperature: dayForecast.Temperature.Maximum.Value,
                icon: dayForecast.Day.Icon,
            };
            return formattedData
        });
    };

    const handleLocation = async () => {
        const location = await getCoordinates();
        updateCurrentLocation(location)
    }


    useEffect(() => {
        if (currentLocation.hasOwnProperty('id')) {
            getWeather(currentLocation.id);
        } else {
            handleLocation();
        };
    }, [currentLocation]);

    useEffect(() => {
        if (favourites.length > 0 && currentLocation.id) {
            const favouriteIndex = favourites.findIndex(item => item.id === currentLocation.id)
            setIsFavourite(favouriteIndex >= 0 ? true : false)
        } else setIsFavourite(false)
    }, [favourites, currentLocation])


    return (

        <div className="weather-container">
            <div className="weather-top">
                <div className="weather-top-left">
                    <div className="unit-switch">
                        Display as: 
                        <Switch
                            checkedChildren="C°"
                            unCheckedChildren="F°"
                            onChange={toggleTemp}
                            checked={tempUnit === 'C'}
                            className="unit-switch-toggler"
                        />
                    </div>
                    {currentLocation.name}
                    <br />
                    {forecasts.length > 0 ?
                        `${tempUnit === "C" ? forecasts[0].Temperature.Maximum.Value : cToF(forecasts[0].Temperature.Maximum.Value)} ${tempUnit}°` :
                        <LoadingOutlined />
                    }
                </div>
                <div className="weather-top-right">
                    <HeartTwoTone className="favourite-icon" onClick={handleClick} twoToneColor={isFavourite ? "#eb2f96" : "#D3D3D3"} />
                    <Button className="favourite-btn" onClick={handleClick}>{isFavourite ? "Remove from Favourites" : "Add to Favourites"}</Button>

                </div>
            </div>
            <div className="weather-middle">
                <Marquee weatherData={forecasts.length > 0 ? forecasts[0].Day : null} />
            </div>
            <div className="weather-bottom">
                <SpreadOut cardData={forecasts.length > 0 ? createCardData(forecasts) : null} cardAmount={5} />
            </div>
        </div>
    )
};