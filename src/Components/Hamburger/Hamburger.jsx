import { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/Components/Hamburger/Hamburger.css';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-wrapper">
            <div
                className={`hamburger-icon ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`menu-items ${isOpen ? 'show' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/Pants" onClick={() => setIsOpen(false)}>Pants</Link>
                <Link to="/Sweaters" onClick={() => setIsOpen(false)}>Sweaters</Link>
            </nav>

            {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        </div>
    );
}