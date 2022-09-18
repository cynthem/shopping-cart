import React from "react";
import basketIcon from '../assets/images/basketIcon.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-navbar">
                <p>Home</p>
                <p>Shop</p>
                <img className="basket-icon" alt="Basket" src={basketIcon} />
            </div>
            <div className="header-title">
                <p>ChillOut Co.</p>
            </div>
        </div>
    )
}

export default Header;