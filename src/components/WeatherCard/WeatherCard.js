import React, { useState, useEffect, useCallback } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import iconFinder from '../../Helpers/iconFinder';

export default function WeatherCard({ header, temperature, icon, text, onClick, isLoading, id }) {

    return (
        <div className="card-container" onClick={() => onClick && onClick(id)}>
            {!isLoading ?
                <>
                    <div>{header}</div>
                    <div>{temperature} C°</div>
                    <div>
                        <img src={iconFinder(icon)} />
                    </div>
                </>
                :
                <LoadingOutlined />
            }

        </div>
    )
};