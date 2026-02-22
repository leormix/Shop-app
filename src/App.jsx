import { useState } from 'react'
import './App.css'
import HeaderTape from './Components/HeaderTape/HeaderTape'
import Cart from '/src/Pages/Cart/Cart'
import Profile from './Pages/Profile/Profile'
import Navbar from './Components/Navbar/Navbar'
import ProductPage from './Pages/ProductPage/ProductPage'
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import UserAccount from './Pages/UserAccount/UserAccount'

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

  const location = useLocation()

  return (
    <>
      <div className='app'>

        <HeaderTape></HeaderTape>

        <Navbar cartCount={cartItemCount} />



        <div className="main-container">

          {location.pathname === '/' && (
            <div className="main-container">
              <section className="main-photo-grid">

                {/* Левое большое фото */}
                <div className="grid-item item-main">
                  <img src="/src/img/main/Main_page_left_woman.png" alt="Woman Collection" />
                </div>

                {/* Правое верхнее */}
                <div className="grid-item item-top">
                  <img src="/src/img/main/Main_page_man_right_up.png" alt="Man Collection" />
                </div>

                {/* Правое нижнее */}
                <div className="grid-item item-bottom">
                  <img src="/src/img/main/Main_page_smth_right_down.png" alt="Accessories" />
                </div>

              </section>
            </div>
          )}

          <Routes>



            <Route
              path='/pants'
              element={<CategoryPage categoryName="pants" addToCart={addToCart} />}
            />


            <Route
              path='/sweaters'
              element={<CategoryPage categoryName="sweaters" addToCart={addToCart} />}
            />


            <Route
              path='/socks'
              element={<CategoryPage categoryName="socks" addToCart={addToCart} />}
            />

            <Route
              path='/sneakers'
              element={<CategoryPage categoryName="sneakers" addToCart={addToCart} />}
            />


            <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/product/:id' element={<ProductPage addToCart={addToCart} />}></Route>
            <Route path='/user-account' element={<UserAccount></UserAccount>}></Route>
          </Routes>
        </div >
      </div >
    </>
  )
}

export default App  