import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import '/src/Components/DropDown_menu/DropDown_menu.css'

export default function Dropdown_menu() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const menuRef = useRef(null);

    const handleMouseEnter = (name) => {
        setOpenDropdown(name);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <div ref={menuRef} style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>


            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('top')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'top' ? 'active' : ''}`}>
                    MEN
                </span>

                {openDropdown === 'top' && (
                    <div className="dropdown-menu">

                        <div className="menu-column">
                            <h4 className="column-title">SHOES</h4>
                            <Link to="/sneakers">Sneakers</Link>
                            <Link to="/running">Running</Link>
                            <Link to="/slides">Slides & Sandals</Link>
                            <Link to="/originals">Originals</Link>
                        </div>


                        <div className="menu-column">
                            <h4 className="column-title">CLOTHING</h4>
                            <Link to="/sweaters">Sweaters</Link>
                            <Link to="/t-shirts">T-shirts & Tops</Link>
                            <Link to="/jackets">Jackets</Link>
                            <Link to="/pants">Pants</Link>
                        </div>


                        <div className="menu-column">
                            <h4 className="column-title">ACCESSORIES</h4>
                            <Link to="/socks">Socks</Link>
                            <Link to="/bags">Bags & Backpacks</Link>
                            <Link to="/hats">Hats & Headbands</Link>
                        </div>
                    </div>
                )}
            </div>

            {/* === WOMEN === */}
            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('middle')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'middle' ? 'active' : ''}`}>
                    WOMEN
                </span>

                {openDropdown === 'middle' && (
                    <div className="dropdown-menu">
                        <div className="menu-column">
                            <h4 className="column-title">CLOTHING</h4>
                            <Link to="/pants">Pants</Link>
                            <Link to="/leggings">Leggings</Link>
                            <Link to="/dresses">Dresses</Link>
                        </div>
                        <div className="menu-column">
                            <h4 className="column-title">SHOES</h4>
                            <Link to="/sneakers">Sneakers</Link>
                            <Link to="/boots">Boots</Link>
                        </div>
                    </div>
                )}
            </div>

            {/* === KIDS === */}
            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('down')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'down' ? 'active' : ''}`}>
                    KIDS
                </span>

                {openDropdown === 'down' && (
                    <div className="dropdown-menu">
                        <div className="menu-column">
                            <h4 className="column-title">POPULAR</h4>
                            <Link to="/socks">Socks</Link>
                            <Link to="/school">Back to School</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}