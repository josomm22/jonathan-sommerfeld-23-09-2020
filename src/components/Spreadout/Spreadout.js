import React from 'react';
import WeatherCard from '../WeatherCard';
import { range } from 'lodash'

export default function SpreadOut({ cardData, cardAmount, isClickable, onCardClick }) {

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
                range(cardAmount).map((value, index) => <WeatherCard isLoading={true} key={"fav"+index}/>)
            }
        </div>
    )
}