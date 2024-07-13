// src/Navbar.js
import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-section">
                <i className="fas fa-bars navbar-toast"></i>
                <a href="/" className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/logosurge.png`} alt="Thumbnail 1" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="/phones">Phones</a></li>
               
                <li><a href="/tablets">Tablets</a></li>
                <li><a href="/laptops">Laptops</a></li>
                <li><a href="/watches">Watches</a></li>
               <li><a href="/drones">Drones</a></li>
            </ul>
            <div className="navbar-icons">
            <div className="divider"></div>
                <a href="/search"><i className="fas fa-search"></i></a>
                <a href="/favorites"><i className="fas fa-heart"></i></a>
                <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
            </div>
        </nav>
    );
};

export default Navbar;
