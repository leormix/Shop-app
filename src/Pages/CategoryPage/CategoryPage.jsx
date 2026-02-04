import { Link } from "react-router-dom";

import { products } from "../../data/products";


const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

export default function CategoryPage({ categoryName, }) {


    const currentProducts = products.filter(item => item.category === categoryName);

    return (
        <div>
            <h1 className='category-name'>{capitalize(categoryName)}</h1>

            <div className="products">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => (
                        <div key={product.id} className='card'>
                            {/* Ссылка на страницу товара */}
                            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img className='product_images' src={product.image} alt={product.name}></img>
                                <h4 className='product_names'>{product.name}</h4>
                            </Link>

                            <p className="product_prices">Price: ${product.price}</p>


                        </div>
                    ))
                ) : (
                    <h3>В этой категории пока нет товаров</h3>
                )}
            </div>
        </div>
    )
}