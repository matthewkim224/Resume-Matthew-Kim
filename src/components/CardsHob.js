import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsHob() {
    return (
        <div classname='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                    <CardItem 
                    src="images/boat.jpg"
                    text="DragonBoating" 
                    label = 'Hobby'
                    />

                    <CardItem 
                    src="images/gliding.jpg"
                    text="Glider's Pilot Licence" 
                    subText = "Achieved in 2016"
                    label = 'Hobby'
                    />

                    <CardItem 
                    src="images/power.jpg"
                    text="Pilot Licence" 
                    subText = "Achieved in 2017"
                    label = 'Hobby'
                    />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsHob
