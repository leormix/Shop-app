import { useLocation } from "react-router-dom";
import BuyButton from "../Components/BuyButton/BuyButton";

const SWEATERS_TYPES = [
    { id: 1, name: "Blue sweater", price: 120, image: '/src/img/sweaters/blue-sweater.png' },
    { id: 2, name: "Github sweater", price: 100, image: '/src/img/sweaters/github-sweater.png' },
    { id: 3, name: "Grey sweater", price: 95, image: '/src/img/sweaters/grey-sweater.png' },
    { id: 4, name: "Blue sweater", price: 30, image: '/src/img/sweaters/blue-sweater.png' },
    { id: 5, name: "Github sweater", price: 78, image: '/src/img/sweaters/github-sweater.png' },
    { id: 6, name: "Grey sweater", price: 90, image: '/src/img/sweaters/grey-sweater.png' },
]


export default function Sweaters({ addToCart }) {
    const location = useLocation();
    return (
        <div>

            {location.pathname === '/Sweaters' ? <h1>Sweaters</h1> : <div></div>}

            < div className="products" >
                {
                    SWEATERS_TYPES.map((product) => (
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