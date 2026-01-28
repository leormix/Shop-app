import '/src/Components/Navbar/Navbar.css'

import { Link } from 'react-router-dom';

export default function Header({ cartCount }) {
    return (
        <header className="site-header">
            <div className="top-bar">
            </div>

            <div className="main-bar">


                <Link to="/" className="logo">My SHOP
                </Link>


                <nav className="main-nav">
                    <Link to="/Pants">PANTS</Link>
                    <Link to="/Sweaters">SWEATERS</Link>
                </nav>


                <div className="actions">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button>🔍</button>
                    </div>

                    <div className="icons">
                        <button className="icon-btn">👤</button>
                        <Link to='/cart' className='icon-btn cart-icon'>
                            🛍️
                            {cartCount > 0 && <span className="badge">{cartCount}</span>}</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}