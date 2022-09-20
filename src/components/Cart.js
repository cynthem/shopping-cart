import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import uniqid from 'uniqid';
import trashIcon from '../assets/images/trashIcon.png';

const Cart = ({
    cart,
    setCart,
    productNum,
    setProductNum,
    priceTotal
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
            <h2 className="cart-title">Your Cart</h2>
            {productNum < 1 && (
                <div className="cart-empty">
                    <p className="cart-empty-text">There are currenly no items in your cart.</p>
                    <Link className="empty-cart-link" to="/shop">
                        <button className="cart-shop-btn">Continue Shopping</button>
                    </Link>
                </div>
            )}
            {productNum > 0 && (
                <div className="cart-products">
                    <div className="cart-products-header">
                        <p className="cart-products-name">Products</p>
                        <p className="cart-products-price">Price</p>
                        <p className="cart-products-quantity">Quantity</p>
                    </div>
                    {cart.map((item) => {
                        if (item.quantity === 0) return handleDelete(item);
                        return (
                            <div className="cart-product" key={uniqid()}>
                                <img className="cart-product-img" src={item.product.image} alt={item.product.name} />
                                <p className="cart-product-name">{item.product.name}</p>
                                <p className="cart-product-price">{`$${item.product.price}`}</p>
                                <div className="cart-product-quantity">
                                    <button 
                                        className="quantity-decrease"
                                        onClick={() => handleDecrease(item)}
                                    >
                                        -
                                    </button>
                                    <p className="quantity-total">{item.quantity}</p>
                                    <button 
                                        className="quantity-increase"
                                        onClick={() => handleIncrease(item)}
                                    >
                                        +
                                    </button>
                                </div>
                                <img 
                                    className="trash-icon" 
                                    src={trashIcon} 
                                    alt="Trash icon"
                                    onClick={() => handleDelete(item)}
                                />
                            </div>
                        )
                    })}
                    <p className="cart-products-total">{`Cart Total: $${priceTotal.toFixed(2)}`}</p>
                    <button className="order-btn">Order Now</button>
                </div>
            )}
        </div>
    )
}

export default Cart;