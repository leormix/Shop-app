import '/src/Pages/Cart/Cart.css'

import { Link } from 'react-router-dom';

export default function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="empty-cart-page">
                <h2>Your Bag is Empty</h2>
                <p>Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.</p>
                <Link to="/" className="start-shopping-btn">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h1 className="cart-title">Your Bag</h1>

            <div className="cart-layout">
                <div className="cart-items-list">
                    {cart.map(item => (
                        <div key={item.id} className="cart-item-row">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">${item.price}</p>
                                <div className="item-meta">
                                    <span>Size: M</span>
                                    <span>Qty: {item.quantity}</span>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>

                            <div className="item-total-price">
                                ${item.price * item.quantity}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Total</h2>
                    <div className="summary-row">
                        <span>Sub-total</span>
                        <span>${total}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>
                    <hr />
                    <div className="summary-row total-row">
                        <span>Total to pay</span>
                        <span>${total}</span>
                    </div>

                    <button className="checkout-btn">CHECKOUT</button>

                    <div className="payment-icons">
                        💳 🅿️
                    </div>
                </div>
            </div>
        </div>
    );
}