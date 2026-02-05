import '/src/Components/Navbar/Navbar.css'
import Dropdown_menu from '../DropDown_menu/DropDown_menu'
import Hamburger from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSearchLogic } from './SearchLogic/SearchLogic'
import { products } from '../../data/products'

export default function Navbar({ cartCount }) {
    const [activeMenu, setActiveMenu] = useState(null)

    const {
        searchText,
        updateSearchText,
        suggestions
    } = useSearchLogic(products);

    return (
        <header className="site-header">

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
                    <div className="search-box" style={{ position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => updateSearchText(e.target.value)}
                        />
                        <button>🔍</button>

                        {/* Search */}

                        {suggestions.length > 0 && (
                            <div className="search-dropdown">
                                {suggestions.map((product) => (
                                    <Link
                                        to={`/product/${product.id}`}
                                        key={product.id}
                                        className="search-item"
                                        onClick={() => updateSearchText('')}
                                    >
                                        <img src={product.image} alt={product.name} />
                                        <div className="search-item-info">
                                            <span className="search-name">{product.name}</span>
                                            <span className="search-price">${product.price}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
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