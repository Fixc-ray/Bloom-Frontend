import React, { useEffect, useState } from 'react';

function ShopAll() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://bloomm-backend-1.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products || [])) // Adjusted to handle response structure
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {products.length === 0 ? (
        <p className="text-lg text-center text-gray-600 animate-pulse">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="relative bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-between h-full">
              <div>
                <img
                  src={product.photo_url}
                  alt={product.product_name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-5 flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.product_name}</h2>
                  <p className="text-gray-600 mb-4">{product.description.length > 30 ? product.description.slice(0, 30) + '...' : product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
              <div className="p-5">
                <button className="w-full border border-black py-2 px-4 rounded transition duration-200">Add to Bag</button>
              </div>
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">New</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShopAll;
