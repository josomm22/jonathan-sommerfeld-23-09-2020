import React, { useState, useEffect, useCallback } from 'react';
import WeatherCard from '../WeatherCard';
import { LoadingOutlined } from '@ant-design/icons';
import iconFinder from '../../Helpers/iconFinder';
import { range } from 'lodash'

export default function SpreadOut({ cardData }) {

    return (
        <div className="spreadout">
            {cardData ?
                cardData.map(card =>
                    <WeatherCard
                        header={card.header}
                        temperature={card.temperature}
                        icon={card.icon}
                    />)
                :
                range(4).map(card => <WeatherCard isLoading={true} />)
            }
        </div>
    )
}