import React, { useState } from 'react';

const Ultrafilter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredPrices, setFilteredPrices] = useState([]);

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    filterPrices(value, maxPrice);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    filterPrices(minPrice, value);
  };

  const filterPrices = (min, max) => {

    const prices = [];
    for (let i = 1; i <= 100; i++) {
      prices.push(i); 
    }

    const filteredItems = prices.filter((price) => {
      const matchesMinPrice = min ? price >= Number(min) : true;
      const matchesMaxPrice = max ? price <= Number(max) : true;
      return matchesMinPrice && matchesMaxPrice;
    });

    setFilteredPrices(filteredItems);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          placeholder='Min Price'
        />
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          placeholder='Max Price'
        />
      </div>
      <ul>
        {filteredPrices.map((price, index) => (
          <li key={index}>${price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ultrafilter;