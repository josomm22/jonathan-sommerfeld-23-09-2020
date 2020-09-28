import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import iconFinder from '../../Helpers/iconFinder';
import { cToF } from '../../Helpers/temperature';

export default function WeatherCard({ header, temperature, icon, text, isLoading, id, isClickable, onCardClick, theme, tempUnit }) {

    return (
        <div className={`card-container ${theme}${isClickable ? ' clickable' : ''}`} value={id && id} onClick={onCardClick && (() => onCardClick({ id, name: header }))}>
            {!isLoading ?
                <>
                    <div>{header}</div>
                    <div>{tempUnit === "C" ? temperature : cToF(temperature)} {tempUnit}°</div>
                    <div>
                        {icon ? <img src={iconFinder(icon)} alt={"icon"} /> : <LoadingOutlined />}
                    </div>
                </>
                :
                <LoadingOutlined />
            }

        </div>
    )
};