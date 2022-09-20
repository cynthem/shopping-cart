import kittens from './assets/images/products/kittens.jpg';
import bath from './assets/images/products/bath.jpg';

const productList = [
    {
        name: "Kitten Party",
        price: 29.99,
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

export default productList;