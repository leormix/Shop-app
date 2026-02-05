import '/src/Components/Navbar/Navbar.css'
import Dropdown_menu from '../DropDown_menu/DropDown_menu'
import Hamburger from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar({ cartCount }) {
    const [activeMenu, setActiveMenu] = useState(null)

    return (
        <header className="site-header">
            <div className="top-bar"></div>

            <div className="main-bar">


                <div className="mobile-menu-trigger">
                    <Hamburger />
                </div>


                <Link to="/" className="logo">MY SHOP</Link>

                {/* DESKTOP NAV */}
                <nav className="main-nav">
                    <Dropdown_menu
                        activeMenu={activeMenu}
                        setActiveMenu={setActiveMenu}
                    />
                </nav>

                {/* ACTIONS */}
                <div className="actions">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button>🔍</button>
                    </div>

                    <div className="icons">
                        <Link to="/profile" className="icon-btn">👤</Link>
                        <Link to="/cart" className="icon-btn cart-icon">
                            🛍️
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}
                        </Link>
                    </div>
                </div>


                <Dropdown_menu
                    isDropdown
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />

            </div>
        </header >
    )
}
