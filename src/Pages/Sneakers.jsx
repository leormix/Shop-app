import { useLocation } from "react-router-dom";
import BuyButton from "../Components/BuyButton/BuyButton";

const Sneakers_TYPES = [
    { id: 1, name: "Nike blue", price: 250, image: '/src/img/sneakers/blue_sneakers_nike.png' },
    { id: 2, name: "Gray New Balance", price: 140, image: '/src/img/sneakers/gray_sneakers_NB.png' },
    { id: 3, name: "Adidas white", price: 200, image: '/src/img/sneakers/white_sneakers_adidas.png' },
    { id: 4, name: "Dark white Asics", price: 200, image: '/src/img/sneakers/dark_gray_sneakers_asics.png' },
]

export default function Sneakers({ addToCart }) {

    const location = useLocation();
    return (
        <div>
            {location.pathname === '/Socks' ? <h1>Socks</h1> : <div></div>}

            < div className="products" >
                {
                    Sneakers_TYPES.map((product) => (
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