import { Link } from "react-router-dom"
import "/src/Components/DropDown_menu/DropDown_menu.css"

export default function Dropdown_menu({
    activeMenu,
    setActiveMenu,
    isDropdown = false
}) {

    const closing = () => {
        setTimeout(() => setActiveMenu(null), 150)
    }


    if (!isDropdown) {
        return (
            <div className="nav-links">
                <span
                    className={`nav-link ${activeMenu === 'Men' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMenu('Men')}
                >
                    MEN
                </span>

                <span
                    className={`nav-link ${activeMenu === 'Women' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMenu('Women')}
                >
                    WOMEN
                </span>

                <span
                    className={`nav-link ${activeMenu === 'Kids' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveMenu('Kids')}
                >
                    KIDS
                </span>
            </div>
        )
    }


    if (!activeMenu) return null

    return (
        <div
            className="dropdown-menu"
            onMouseLeave={() => setActiveMenu(null)}
        >

            {/* === MEN === */}
            {activeMenu === 'Men' && (
                <>
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
                </>
            )}

            {/* === WOMEN === */}
            {activeMenu === 'Women' && (
                <>
                    <div className="menu-column">
                        <h4 className="column-title">CLOTHING</h4>
                        <Link to="/pants" onClick={closing}>Pants</Link>
                        <Link to="/leggings" onClick={closing}>Leggings</Link>
                        <Link to="/dresses" onClick={closing}>Dresses</Link>
                    </div>

                    <div className="menu-column">
                        <h4 className="column-title">SHOES</h4>
                        <Link to="/sneakers" onClick={closing}>Sneakers</Link>
                        <Link to="/boots" onClick={closing}>Boots</Link>
                    </div>
                </>
            )}

            {/* === KIDS === */}
            {activeMenu === 'Kids' && (
                <div className="menu-column">
                    <h4 className="column-title">POPULAR</h4>
                    <Link to="/socks" onClick={closing}>Socks</Link>
                    <Link to="/school" onClick={closing}>Back to School</Link>
                </div>
            )}
        </div>
    )
}
