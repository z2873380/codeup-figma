import React from 'react';
import './ProductDetail.css';
import Footer from '../Footer/Footer'; 


const ProductDetail = () => {
    const rating = 4;
    const colors = [
        { name: 'Space Black', hex: '#333' },
        { name: 'Deep Purple', hex: '#5E5D79' },
        { name: 'Gold', hex: '#FFD700' },
        { name: 'Silver', hex: '#C0C0C0' }
    ];

    return (
        <div className="product-detail-container">
            <div className="product-details">
                <p className="stock-status">In stock</p>
                <h1>Refurbished iPhone 14 Pro</h1>
                <div className="reviews">
                    <span className="rating-text">Reviews: 4/5</span>

                    <span className="rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <i key={index} className={index < rating ? "fas fa-star" : "far fa-star"}></i>
                        ))}
                    </span>
                </div>

                <p className="product-description">
                    Bringing you Dynamic Island, access your music while scrolling social media.
                </p>
                {/* Other details and options */}
                <div className="thumbnail-images">
                    <img src={`${process.env.PUBLIC_URL}/iphonethumbnail1.png`} alt="Thumbnail 1" className="thumbnail" />
                    <img src={`${process.env.PUBLIC_URL}/iphonethumbnail2.png`} alt="Thumbnail 2" className="thumbnail" />
                    <img src={`${process.env.PUBLIC_URL}/iphonethumbnail3.png`} alt="Thumbnail 3" className="thumbnail" />
                </div>
            </div>
            <div className="product-images">
                <img src={`${process.env.PUBLIC_URL}/iphone14promax.png`} alt="iPhone 14 Pro" className="main-image" />

            </div>
            <div className="product-details">
                <div className="product-options">
                    <div className="option">
                        <h2>CONDITION: GOOD</h2>
                        <button className="option-button selected">Good</button>
                        <button className="option-button">Great</button>
                        <button className="option-button">Pristine</button>
                    </div>
                    <div className="option">
                        <h2>CAPACITY: 128GB</h2>
                        <button className="option-button selected">128GB</button>
                        <button className="option-button">256GB</button>
                        <button className="option-button">512GB</button>
                    </div>
                    {/* <div className="option">
                        <h2>COLOUR:</h2>
                        <button className="option-button selected">Space Black</button>
                        <button className="option-button">Deep Purple</button>
                        <button className="option-button">Gold</button>
                        <button className="option-button">Silver</button>
                    </div> */}
                    <div className="color-options option">
                        <h2>COLOUR:</h2>
                        <div className="color-selector">
                            {colors.map(color => (
                                <button
                                    key={color.name}
                                    className="color-button"
                                    style={{ backgroundColor: color.hex }}
                                    title={color.name}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
