// App.jsx
import { useState } from 'react'
import './App.css'
import './Components/Cart/Cart.css'
import './Components/Hamburger/Hamburger.css'
import Cart from '/src/Components/Cart/Cart'
import Hamburger from '/src/Components/Hamburger/Hamburger'
import Pants from '/src/Pages/Pants'
import Sweaters from './Pages/Sweaters'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const PRODUCTS = [
    { id: 1, name: "Sneakers", price: 120, emoji: '👟' },
    { id: 2, name: "Blouse", price: 70, emoji: '👚' },
    { id: 3, name: "T-shirt", price: 30, emoji: '👕' },
    { id: 4, name: "Jacket", price: 340, emoji: '🥼' },
    { id: 5, name: "Top hat", price: 50, emoji: '🎩' },
  ]

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className='app'>

        <Hamburger></Hamburger>

        <nav className="navbar">
          {location.pathname === '/' ? <h1>My Shop</h1> : <div></div>}
          <button className="cart-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
            🛒 <span className="btn-text">Cart</span> ({cartItemCount})
          </button>
        </nav>

        <div className="main-container">

          <Routes>
            <Route path='/Pants'
              element={<Pants addToCart={addToCart}></Pants>}></Route>
            <Route path='/Sweaters'
              element={<Sweaters addToCart={addToCart}></Sweaters>}></Route>
          </Routes>

          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            isOpen={isCartOpen}
            closeCart={() => setIsCartOpen(false)}
          />


        </div>
      </div >
    </>
  )
}

export default App