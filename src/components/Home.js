import React from "react";
import flowerIcon from '../assets/images/flowerIcon.png';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-header">ChillOut Co
                <img className="home-img" alt="Flower icon" src={flowerIcon} />
            </h1>
            <h2 className="home-subheader">Trade stress for good vibes</h2>
            <button className="home-btn">Visit the Shop</button>
        </div>
    )
}

export default Home;