import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import iconFinder from '../../Helpers/iconFinder';

export default function WeatherCard({ header, temperature, icon, text, isLoading, id, isClickable, onCardClick, theme }) {

    return (
        <div className={`card-container ${theme}${isClickable? ' clickable': ''}`}  value={id && id} onClick={onCardClick && (()=>onCardClick({id,name:header}))}>
            {!isLoading ?
                <>
                    <div>{header}</div>
                    <div>{temperature} C°</div>
                    <div>
                        {icon ? <img src={iconFinder(icon)} alt={"icon"}/> : <LoadingOutlined />}
                    </div>
                </>
                :
                <LoadingOutlined />
            }

        </div>
    )
};