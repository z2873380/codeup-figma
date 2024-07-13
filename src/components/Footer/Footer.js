// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="view-all">
                <i className="fas fa-th"></i> VIEW ALL
            </div>
            <div className="pagination">
                <span className="page-number active">01</span>
                <span className="page-number">02</span>
                <span className="page-number">03</span>
            </div>
            <div className="add-to-cart-section">
                <i className="fas fa-shopping-cart"></i>
                <button className="add-to-cart-button">ADD TO CART</button>
                <span className="price">$980</span>
            </div>
        </div>
    );
};

export default Footer;
