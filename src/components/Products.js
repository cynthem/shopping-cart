import React from "react";
import kittens from '../assets/images/products/kittens.jpg';
import bath from '../assets/images/products/bath.jpg';

const Products = () => {
    const products = [
        {
            name: "Kitten Party",
            price: 29.50,
            rate: "per hour",
            image: kittens,
            description: "The science says a little time spent with a cat can lower your blood pressure... so imagine how you'll feel after an hour with a pile of kittens! Your arteries will be thanking you after all the love you'll be getting from these adorable little rascals."
        },
        {
            name: "Bubble Bath Rental",
            price: 75.00,
            rate: "per day",
            image: bath,
            description: "Nothing melts stress away like a warm, soothing bubble bath. Don't have the right tub? No worries! We'll bring one to you and do all the installing. You keep it for up to 24 hours and soak as long as you want. Comes with bubbles and accessories."
        }
    ];

    return (
        /*<div className="product">
            <img className="product-img" alt={products.name} src={products.image} />
            <div className="product-info">
                <h3 className="product-title">{products.name}</h3>
                <p className="product-price">{`${products.price} ${products.rate}`}</p>
            </div>
            <p className="product-description">{products.description}</p>
            <button className="add-cart-btn">Add to Basket</button>
        </div>*/

        <div className="products">
            <div className="product">
                <img className="product-img" alt="Kitten Party" src={kittens} />
                <div className="product-info">
                    <h3 className="product-title">Kitten Party</h3>
                    <p className="product-price">$29.50 per hour</p>
                </div>
                <p className="product-description">The science says a little time spent with a cat can lower your blood pressure... so imagine how you'll feel after an hour with a pile of kittens! Your arteries will be thanking you after all the love you'll be getting from these adorable little rascals.</p>
                <button className="add-cart-btn">Add to Basket</button>
            </div>

            <div className="product">
                <img className="product-img" alt="Kitten Party" src={bath} />
                <div className="product-info">
                    <h3 className="product-title">Bubble Bath Rental</h3>
                    <p className="product-price">$75 per day</p>
                </div>
                <p className="product-description">Nothing melts stress away like a warm, soothing bubble bath. Don't have the right tub? No worries! We'll bring one to you and do all the installing. You keep it for up to 24 hours and soak as long as you want. Comes with bubbles and accessories.</p>
                <button className="add-cart-btn">Add to Basket</button>
            </div>
        </div>
    )
}

export default Products;