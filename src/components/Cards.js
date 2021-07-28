import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
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

                        <CardItem 
                        src="images/java-logo.jpg"
                        text="Java Programming Language"
                        label = 'Technical Skills'
                        />

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                        src="images/python-logo.png"
                        text="Python Programming Language"
                        subText = "Currently Learning"
                        label = 'Technical Skills'
                        />

                        <CardItem 
                        src="images/sql.png"
                        text="SQL"
                        label = 'Technical Skills'
                        />

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                    src="images/c-logo.png"
                    text="C++/C#/C"
                    label = 'Technical Skills'
                    />

                    <CardItem 
                    src="images/javascript.png"
                    text="JavaScript"
                    subText = "Currently Learning"  
                    label = 'Technical Skills'
                    />

                    </ul>

                   

                    <ul className="cards__items">

                    <CardItem 
                    src="images/junit.png"
                    text="JUnit"
                    label = 'Technical Skills'
                    />

                    <CardItem 
                    src="images/javafx.png"
                    text="JavaFX"
                    label = 'Technical Skills'
                    />

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                    src="images/opengl.png"
                    text="OpenGL"
                    label = 'Technical Skills'
                    />

                    <CardItem 
                    src="images/react.png"
                    text="React"
                    subText = "Currently Learning"
                    label = 'Technical Skills'
                    />
                    

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                    src="images/piggy.png"
                    text="Banking Application"
                    label = 'Technical Skills'
                    />

                    <CardItem 
                    src="images/html.png"
                    text="Simple Website" 
                    label = 'Technical Skills'
                    />

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                    src="images/game.png"
                    text="Game and Review Database"
                    label = 'Technical Skills'
                    />

                    <CardItem 
                    src="images/resume.png"
                    text="Online Resume Page"
                    label = 'Technical Skills'
                    />

                    </ul>

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

                    </ul>

                    <ul className="cards__items">

                    <CardItem 
                    src="images/cadets.jpg"
                    text="888 Avernger RCACS" 
                    subText = "Squadron Deputy Commander"
                    label = 'Experience'
                    />

                    <CardItem 
                    src="images/boat.jpg"
                    text="DragonBoating" 
                    label = 'Hobby'
                    />    


                    </ul>

                    <ul className="cards__items">

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

export default Cards
