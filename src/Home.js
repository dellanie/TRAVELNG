import React from 'react';
import './home.css';
import Body from './Body';
import HomeCard from './HomeCard';

function Home() {
    return (
        <div className="home">
            <Body/>
            <div className="homecard">
            <HomeCard
                img= "/Erin-Ijesha.jpg"
                location="Erin-Ijesha"
                desc="The tiny town of Erin-Ijesha is really only<b/> known for one thing and one thing only: it’s eponymous waterfall that crashes<b/> through the southern Nigerian jungles, spans two individual states, and counts as many as seven tiers in total! The beautiful water feature draws oodles of people to this tiny speck on the map a little way from the historic city of Ilesa."
                title="Ilesa"
            />
            <HomeCard
                img= "/Gashaka-Gumti-National-Park.jpg"
                location="Taraba State"
                desc="Vast and breathtaking at every turn, the Gashaka Gumti National Park covers more than 6,000 square kilometers of land in the extreme south-east of the country."
                title="Gashaka Gumti National Park"
            />
            <HomeCard
                img= "/Coconut-Beach.jpg"
                location="Badagry"
                desc="Coconut Beach is located in the coastal town of Badagry, west of Lagos State.The beautiful beach surrounded by coconut trees is about twenty miles towards Nigerian Border and the Republic of Benin. Accessible through Lagos-Badagry expressway, Coconut Beach is surrounded by holiday resorts where revelers could refresh while visiting the beach, with the kind of tropical sun that could be enjoyed within the environment."
                title="Coconut Beach, Badagry"
            />
            <HomeCard
                img= "/Kainji-Lake-National-Park.jpg"
                location="Niger State"
                desc="One of the natural jewels of north-western Nigeria is actually not all that natural at all.
                The eponymous Kainji Lake of the Kainji Lake National Park is actually a reservoir, created in 1968 and now surrounded by protected game reserves."
                title="Kanji Lake National Park"
            />
            </div>
            
        </div>
    )
}

export default Home
