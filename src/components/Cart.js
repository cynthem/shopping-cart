import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const Cart = ({
    cart,
    setCart,
    productNum,
    setProductNum,
    priceTotal,
    setPriceTotal
}) => {

    const handleIncrease = (e) => {
        e.quantity += 1;
        setProductNum(productNum + 1);
    }

    const handleDecrease = (e) => {
        if (e.quantity === 0) return;
        e.quantity -= 1;
        setProductNum(productNum - 1);
    }

    const handleDelete = (item) => {
        setProductNum(productNum - item.quantity);
        let updatedCart = cart.filter((e) => e !== item);
        handleUpdateCart(updatedCart);
    }

    const handleUpdateCart = useCallback((updatedCart) => setCart(updatedCart));

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {productNum < 1 && (
                <div className="cart-empty">
                    <p>There are currenly no items in your cart.</p>
                    <Link to="/shop">Continue Shopping</Link>
                </div>
            )}
            {productNum > 0 && (
                <div className="cart-products">
                    cart products
                </div>
            )}
        </div>
    )
}

export default Cart;