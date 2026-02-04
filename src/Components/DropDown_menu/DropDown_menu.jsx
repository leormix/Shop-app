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


    function closing() {
        setTimeout(() => setOpenDropdown(false), 150);
    }

    return (
        <div ref={menuRef} style={{ display: 'flex', gap: '40px', alignItems: 'center', height: '100%' }}>


            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('Men')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'Men' ? 'active' : ''}`}>
                    MEN
                </span>

                {openDropdown === 'Men' && (
                    <div className="dropdown-menu">
                        <div className="dropdown-inner"></div>

                        <div className="menu-column">
                            <h4 className="column-title">SHOES</h4>
                            <Link to="/sneakers" onClick={closing}>Sneakers</Link>
                            <Link to="/slides" onClick={closing}>Slides & Sandals</Link>
                            <Link to="/originals" onClick={closing}>Runners</Link>
                        </div>


                        <div className="menu-column">
                            <h4 className="column-title">CLOTHING</h4>
                            <Link to="/sweaters" onClick={closing}>Sweaters</Link>
                            <Link to="/t-shirts" onClick={closing}>T-shirts & Tops</Link>
                            <Link to="/jackets" onClick={closing}>Jackets</Link>
                            <Link to="/pants" onClick={closing}>Pants</Link>
                        </div>


                        <div className="menu-column">
                            <h4 className="column-title">ACCESSORIES</h4>
                            <Link to="/socks" onClick={closing}>Socks</Link>
                            <Link to="/bags" onClick={closing}>Bags & Backpacks</Link>
                            <Link to="/hats" onClick={closing}>Hats & Headbands</Link>
                        </div>
                    </div>
                )}
            </div>

            {/* === WOMEN === */}
            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('Women')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'Women' ? 'active' : ''}`}>
                    WOMEN
                </span>

                {openDropdown === 'Women' && (
                    <div className="dropdown-menu">
                        <div className="menu-column">
                            <h4 className="column-title">CLOTHING</h4>
                            <Link to="/pants" onClick={closing}>Pants</Link>
                            <Link to="/leggings" onClick={closing}>Leggings</Link>
                            <Link to="/dresses" onClick={closing}>Dresses</Link>
                        </div>
                        <div className="menu-column">
                            <h4 className="column-title" onClick={closing}>SHOES</h4>
                            <Link to="/sneakers" onClick={closing}>Sneakers</Link>
                            <Link to="/boots" onClick={closing}>Boots</Link>
                        </div>
                    </div>
                )}
            </div>

            {/* === KIDS === */}
            <div className="nav-item-dropdown"
                onMouseEnter={() => handleMouseEnter('kids')}
                onMouseLeave={handleMouseLeave}
            >
                <span className={`nav-link ${openDropdown === 'kids' ? 'active' : ''}`}>
                    KIDS
                </span>

                {openDropdown === 'kids' && (
                    <div className="dropdown-menu">
                        <div className="menu-column">
                            <h4 className="column-title">POPULAR</h4>
                            <Link to="/socks" onClick={closing}>Socks</Link>
                            <Link to="/school" onClick={closing}>Back to School</Link>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}