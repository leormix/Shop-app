
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import BuyButton from '/src/Components/BuyButton/BuyButton'
import './ProductPage.css';

export default function ProductPage({ addToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();


    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Товар не найден</h2>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        );
    }

    return (
        <div className="product-page-container" style={{ padding: '20px', display: 'flex', gap: '40px', justifyContent: 'center' }}>

            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ maxWidth: '400px', borderRadius: '10px' }}
                />
            </div>

            <div className="product-info">
                <h1>{product.name}</h1>
                <h3 style={{ color: '#555' }}>Цена: ${product.price}</h3>

                <p style={{ margin: '20px 0', maxWidth: '400px' }}>
                    {product.description || "Описание товара отсутствует."}
                </p>

                <BuyButton product={product} addToCart={addToCart} />

                <br /><br />
                <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}>
                    ← Вернуться назад
                </button>
            </div>
        </div>
    );
}