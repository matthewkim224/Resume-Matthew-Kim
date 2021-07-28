import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsExp() {
    return (
        <div classname='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">

                    <CardItem 
                    src="images/work.png"
                    text="SportChek Hard Goods Sales Associate"
                    label = 'Experience'
                    />

                    <CardItem 
                    src="images/geer.jpg"
                    text="Geering Up UBC High School Instructor"  
                    label = 'Experience'
                    />

                    <CardItem 
                    src="images/cadets.jpg"
                    text="888 Avernger RCACS" 
                    subText = "Squadron Deputy Commander"
                    label = 'Experience'
                    />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsExp
