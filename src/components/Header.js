import React from "react";
import { Link } from "react-router-dom";
import basketIcon from '../assets/images/basketIcon.png';

const Header = ({ productNum }) => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-navbar">
                    <Link className="header-home" to="/shopping-cart">Home</Link>
                    <Link className="header-shop" to="/shop">Shop</Link>
                    <Link className="basket-icon" to="/cart">
                        <img className="basket-icon" alt="Basket" src={basketIcon} />
                        {productNum > 0 && <p className="basket-num">{productNum}</p>}
                    </Link>
                </div>
                <div className="header-title">
                    <p>ChillOut Co.</p>
                </div>
            </div>
        </div>
    )
}

export default Header;