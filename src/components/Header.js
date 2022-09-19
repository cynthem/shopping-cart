import React from "react";
import { Link } from "react-router-dom";
import basketIcon from '../assets/images/basketIcon.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-navbar">
                <Link className="header-home" to="/">Home</Link>
                <Link className="header-shop" to="/shop">Shop</Link>
                <Link className="basket-icon" to="/cart">
                    <img className="basket-icon" alt="Basket" src={basketIcon} />
                </Link>
            </div>
            <div className="header-title">
                <p>ChillOut Co.</p>
            </div>
        </div>
    )
}

export default Header;