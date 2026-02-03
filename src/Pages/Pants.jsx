import { useLocation } from "react-router-dom";
import BuyButton from "../Components/BuyButton/BuyButton";

const PANTS_TYPES = [
    { id: 1, name: "Brown pants", price: 120, image: '/src/img/pants/brown-pants.png' },
    { id: 2, name: "Swamp pants", price: 70, image: '/src/img/pants/swamp-pants.png' },
    { id: 3, name: "Black pants", price: 70, image: '/src/img/pants/black-pants.png' },
]

export default function Pants({ addToCart }) {

    const location = useLocation();

    return (
        <div>

            {location.pathname === '/Pants' ? <h1>Pants</h1> : <div></div>}

            < div className="products" >
                {
                    PANTS_TYPES.map((product) => (
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