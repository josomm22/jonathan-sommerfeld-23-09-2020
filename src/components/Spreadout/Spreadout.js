import React, { useState, useEffect, useCallback } from 'react';
import WeatherCard from '../WeatherCard';
import { range } from 'lodash'

export default function SpreadOut({ cardData, isClickable, onCardClick }) {

    return (
        <div className="spreadout">
            {cardData ?
                cardData.map((card, index) =>
                    <WeatherCard
                        key={card.id ? card.id : "fav" + index}
                        header={card.header}
                        temperature={card.temperature}
                        icon={card.icon}
                        id={card.id}
                        isClickable={isClickable}
                        onCardClick={onCardClick}
                    />)
                :
                range(4).map(() => <WeatherCard isLoading={true} />)
            }
        </div>
    )
}