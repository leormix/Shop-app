// App.jsx
import { useState } from 'react'
import './App.css'
import HeaderTape from './Components/HeaderTape/HeaderTape'
import Cart from '/src/Pages/Cart/Cart'
import Pants from '/src/Pages/Pants'
import Sweaters from './Pages/Sweaters'
import Header from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  // const location = useLocation()
  const [cart, setCart] = useState([])

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

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className='app'>

        <HeaderTape></HeaderTape>

        <Header cartCount={cartItemCount} />

        <div className="main-container">


          <Routes>
            <Route path='/Pants'
              element={<Pants addToCart={addToCart}></Pants>}></Route>
            <Route path='/Sweaters'
              element={<Sweaters addToCart={addToCart}></Sweaters>}></Route>

            <Route path='/cart' element={
              <Cart cart={cart} removeFromCart={removeFromCart} />
            } />
          </Routes>



        </div>
      </div >
    </>
  )
}

export default App