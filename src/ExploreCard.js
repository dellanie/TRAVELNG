import { Button } from '@material-ui/core';
import React from 'react';
import "./explorecard.css";

function ExploreCard({img,title,price,desc}) {
    return (
        <div className="explorecard">
            <div className= "explorepic">
            <img src={img} alt=""/>
            
            <div className="explorecard-bottom">
                <h2>{title}</h2>
                <h3>{price}</h3>
                <h4>{desc}</h4>
                <Button>Explore</Button>
            </div>  

            
            </div>      
        </div>
    )
}

export default ExploreCard
