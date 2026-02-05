import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.scss';

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const [expandedCategory, setExpandedCategory] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setExpandedCategory(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setExpandedCategory(null);
    };

    const toggleCategory = (categoryName) => {
        if (expandedCategory === categoryName) {
            setExpandedCategory(null);
        } else {
            setExpandedCategory(categoryName);
        }
    };


    const menuStructure = [
        {
            category: 'Men',
            items: [

                { name: 'Sneakers', link: '/Sneakers' },
                { name: 'Pants', link: '/Pants' },
                { name: 'Sweaters', link: '/Sweaters' },
                { name: 'Socks', link: '/Socks' }
            ]
        },
        {
            category: 'Women',
            items: [
                { name: 'All Women', link: '/Women' },
                { name: 'Dresses', link: '/Dresses' },
                { name: 'Skirts', link: '/Skirts' }
            ]
        },
        {
            category: 'Kids',
            items: [
                { name: 'Toys', link: '/Toys' },
                { name: 'Socks', link: '/Socks' }
            ]
        }
    ];

    return (
        <div className="hamburger-wrapper">
            <div className="hamburger-icon" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={closeMenu}></div>

            <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
                <div className="menu-header">
                    <span className="menu-title">Menu</span>
                    <button className="close-btn" onClick={closeMenu}>✕</button>
                </div>

                <div className="menu-links">
                    <Link to="/" onClick={closeMenu} className="home-link">Home</Link>

                    {/* Генерация меню из массива */}
                    {menuStructure.map((section) => (
                        <div key={section.category} className="menu-section">
                            {/* Заголовок категории (кнопка) */}
                            <div
                                className={`category-btn ${expandedCategory === section.category ? 'active' : ''}`}
                                onClick={() => toggleCategory(section.category)}
                            >
                                {section.category}
                                <span className="arrow">›</span>
                            </div>

                            {/* Выпадающий список подкатегорий */}
                            <div className={`sub-menu ${expandedCategory === section.category ? 'expanded' : ''}`}>
                                {section.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.link}
                                        onClick={closeMenu}
                                        className="sub-link"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
}