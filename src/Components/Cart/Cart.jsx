// Cart.jsx
function Cart({ cart, removeFromCart, isOpen }) {

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className={`cart-modal ${isOpen ? 'open' : ''}`} >
            <h2>Your order</h2>

            {cart.length === 0 ? (
                <p>Cart is empty 😔</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className='cart-item'>
                            <b>{item.name}</b>
                            <span>{item.quantity} шт.</span>
                            <span>${item.price * item.quantity}</span>
                            <button
                                className="del-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <div className="total">
                        <hr />
                        <b>Total: ${total}</b>
                    </div>
                </>
            )}
        </ div>
    );
}

export default Cart;