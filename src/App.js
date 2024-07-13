// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <ProductDetail />
            </main>
        </div>
    );
}

export default App;
