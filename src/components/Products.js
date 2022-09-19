import React from "react";
import images from '../assets/images/products';

const Products = () => {
    const products = [
        {
            name: "Kitten Party",
            price: 29.50,
            rate: "per hour",
            image: images[6],
            description: "The science says a little time spent with a cat can lower your blood pressure... so imagine how you'll feel after an hour with a pile of kittens! Your arteries will be thanking you after all the love you'll be getting from these adorable little rascals."
        },
        {
            name: "Bubble Bath Rental",
            price: 75.00,
            rate: "per day",
            image: images[1],
            description: "Nothing melts stress away like a warm, soothing bubble bath. Don't have the right tub? No worries! We'll bring one to you and do all the installing. You keep it for up to 24 hours and soak as long as you want. Comes with bubbles and accessories."
        }
    ];

    return (
        <div className="products">
            <img className="product-img" alt={products.name} src={products.image} />
            <div className="product-info">
                <h3 className="product-title">{products.name}</h3>
                <p className="product-price">{`${products.price} ${products.rate}`}</p>
            </div>
            <p className="product-description">{products.description}</p>
            <button className="add-cart-btn">Add to Basket</button>
        </div>
    )
}

export default Products;