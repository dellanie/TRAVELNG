import React from 'react';
import './homecard.css'

function HomeCard({img,title,desc,location}) {
    return (
        <div className="homecard">
            <div className="home-info">
                <img src={img} alt=""/>
            <div className="homecard-bottom">
                <p>{location}</p>
                <p>{title}</p>
                <p className="homebottomP">{desc}</p>
            </div>
            </div>
        </div>
    )
}

export default HomeCard
