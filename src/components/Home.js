import React from "react";
import flowerIcon from '../assets/images/flowerIcon.png';

const Home = () => {
    return (
        <div className="home">
            <h1 className="home-header">ChillOut Co
                <a href="https://github.com/doozles411" target="_blank" rel="noopener noreferrer">
                    <img className="home-img" alt="Flower icon" src={flowerIcon} />
                </a>
            </h1>
            <h2 className="home-subheader">Trade stress for good vibes and self-care</h2>
            <button className="home-btn">Visit the Shop</button>
        </div>
    )
}

export default Home;