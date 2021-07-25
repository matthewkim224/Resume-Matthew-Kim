import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsEdu() {
    return (
        <div classname='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/ubc-image.jpg"
                        text="4th Year Student at UBC | Bachelor of Science | Computer Science Major" 
                        subText="September 2018 - Present"
                        label = 'Education'
                        />


                    </ul>

                   
                </div>
            </div>
        </div>
    )
}

export default CardsEdu
