import React from "react";
import productList from "../productList";
import uniqid from 'uniqid';

const Shop = ({ handleAddToCart }) => {
    return (
        <div className="shop">
            {productList.map((product, e) => {
                return (
                    <div className="product" key={uniqid()}>
                        <img className="product-img" alt={product.name} src={product.image} />
                        <div className="product-info">
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-price">{`$${product.price} ${product.rate}`}</p>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <button 
                            className="add-cart-btn"
                            e={e}
                            onClick={(e) => handleAddToCart(e)}
                        >
                            Add to Cart
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop;