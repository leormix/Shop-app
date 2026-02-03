
import '/src/Components/Navbar/Navbar.css'
import Dropdown_menu from '../DropDown_menu/DropDown_menu';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
    return (
        <header className="site-header">
            <div className="top-bar">
            </div>

            <div className="main-bar">

                <div className="mobile-menu-trigger">
                    <Hamburger />
                </div>

                <Link to="/" className="logo">My SHOP</Link>

                <nav className="main-nav">
                    <Dropdown_menu></Dropdown_menu>
                </nav>

                <div className="actions">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button>🔍</button>
                    </div>

                    <div className="icons">
                        <Link to='/profile' className="icon-btn">👤</Link>
                        <Link to='/cart' className='icon-btn cart-icon'>
                            🛍️
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}