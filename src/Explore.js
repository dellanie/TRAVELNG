import React from 'react';
import ExploreCard from './ExploreCard';
import './explore.css';
import ExploreSlider from './ExploreSlider';

function Explore() {
    return (
        <div className="explore">
            <ExploreSlider/>
            <div className="explorecard">
                <ExploreCard
                img="obuduresort.jpg"
                title="Obudu Resort"
                desc="Let's go on a safari and explore Bauchi for an unforgettable Weekend. Click Book Now!"
                price="N45,00/night"
                />
                <ExploreCard
                img="Hermitage-Garden-Resort-hotels.ng_.jpg"
                title="Hermitage Garden Resort Hotel"
                desc="Let's go on an unforgettable Weekend Adventure in Taraba. Click Book Now!"
                price="N60,000/night"
                />
                <ExploreCard
                img="whitedeck.jpg"
                title="White Deck Resort"
                desc="Wake up in the clouds...Explore the Holy Mountain Trail...Take a selfie on the Canopy Walk...Enjoy Nature!"
                price="N70,000/night"
                />
            </div>         
        </div>
    )
}

export default Explore
