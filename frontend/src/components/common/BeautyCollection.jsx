// src/components/BeautyCollection.js

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './BeautyCollection.css';

const BeautyCollection = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true);  // State to track loading
  const [error, setError] = useState(null);      // State to handle errors

  useEffect(() => {
    // Function to fetch data from API (or local JSON file)
    const fetchProducts = async () => {
      try {
        // Assuming you're fetching from a mock API endpoint
        const response = await fetch('https://api.example.com/products');  // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();  // Parse JSON response
        setProducts(data);                   // Set products data
        setLoading(false);                   // Set loading to false once data is fetched
      } catch (error) {
        setError(error.message);            // Handle errors
        setLoading(false);                  // Set loading to false in case of error
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this runs only once on mount

  if (loading) {
    return <div>Loading...</div>;  // Show loading text while waiting for data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if something goes wrong
  }

  return (
    <section className="beauty-collection">
      <div className="container">
        <h1 className="section-title">Beauty Collection</h1>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyCollection;
