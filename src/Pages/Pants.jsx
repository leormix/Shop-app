import { useLocation } from "react-router-dom";

const PANTS_TYPES = [
    { id: 1, name: "Blue Pants", price: 120, image: '/src/img/sweaters/blue-sweater.png' },
    { id: 2, name: "Green Pants", price: 70, image: '🩳' },
    { id: 3, name: "Red Pants", price: 70, image: '' },
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
                            <p>Price: ${product.price}</p>

                            <button onClick={() => addToCart(product)}>Buy</button>
                        </div>
                    ))
                }
            </div >
        </div>
    )
}