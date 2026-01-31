import { useLocation } from "react-router-dom";
import BuyButton from "../Components/BuyButton/BuyButton";

const SOCKS_TYPES = [
    { id: 1, name: "Fish socks", price: 10, image: '/src/img/socks/fish-socks.png' },
    { id: 2, name: "Frog socks", price: 25, image: '/src/img/socks/frog-socks.png' },
    { id: 3, name: "Cat socks", price: 40, image: '/src/img/socks/cat-socks.png' },
]

export default function Socks({ addToCart }) {

    const location = useLocation();
    return (
        <div>
            {location.pathname === '/Socks' ? <h1>Socks</h1> : <div></div>}

            < div className="products" >
                {
                    SOCKS_TYPES.map((product) => (
                        <div key={product.id} className='card'>
                            <img className='product_images' src={product.image} alt="Waiting..."></img>
                            <h4 className='product_names'>{product.name}</h4>
                            <p className="product_prices">Price: ${product.price}</p>

                            <BuyButton product={product} addToCart={addToCart} />
                        </div>
                    ))
                }
            </div >
        </div>
    )
}