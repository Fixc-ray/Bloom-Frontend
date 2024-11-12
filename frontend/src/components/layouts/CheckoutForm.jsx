
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subscribeToNewsletter: false,
    deliveryMethod: "ship",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const orderItems = [
    { id: 1, name: "Dewy Glow Jelly Cream", price: 19.6, quantity: 1, image: "./images/products/product2.png" },
    { id: 2, name: "Soft Finish", price: 19.6, quantity: 1, image: "./images/products/product3.png" },
    { id: 3, name: "Soft Finish", price: 19.6, quantity: 1, image: "./images/products/product4.png" },
  ];

  const handleQuantityChange = (id, amount) => {
    // Implement quantity change logic
  };

  const handleRemoveItem = (id) => {
    // Implement item removal logic
  };

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <header className="w-full flex justify-between items-center mb-6 bg-white shadow h-20 p-6 md:px-10">
        <Link to="/" className="text-gray-600 hover:text-gray-800 text-lg">← Home</Link>
        <h1 className="text-2xl font-bold text-text-color2">
          <Link to="/">
            <span className="text-primary-color">Bloom</span> Beauty
          </Link>
        </h1>
      </header>

      <main className="w-full max-w-5xl flex flex-col md:flex-row md:space-x-8">
        <section className="w-full md:w-2/3 space-y-4 bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="flex justify-between items-center pb-4">
                <label htmlFor="email" className="block font-medium text-gray-700">Contact Information</label>
                <p className="text-text-color1 text-sm">
                  Already have an account?
                  <Link to="/login" className="ml-2 text-primary-color hover:underline">Log in</Link>
                </p>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribeToNewsletter"
                name="subscribeToNewsletter"
                checked={formData.subscribeToNewsletter}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-color rounded mr-2"
              />
              <label htmlFor="subscribeToNewsletter" className="text-gray-700">Subscribe to the newsletter</label>
            </div>

            <fieldset>
              <legend className="block font-medium text-gray-700 mb-2">Delivery Method</legend>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="ship"
                    checked={formData.deliveryMethod === "ship"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-primary-color"
                  />
                  Ship
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickUp"
                    checked={formData.deliveryMethod === "pickUp"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-primary-color"
                  />
                  Pick Up
                </label>
              </div>
            </fieldset>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="block font-medium text-gray-700">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-color focus:border-primary-color"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-color text-white font-medium py-3 rounded-md hover:bg-pink-500"
            >
              Continue To Shipping
            </button>
          </form>
        </section>

        <aside className="md:block md:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-8 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <img src={"./images/products/product2.png"} alt={item.name} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="text-gray-400 hover:text-primary-color"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="text-gray-400 hover:text-primary-color"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-xs text-red-500 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center font-semibold mt-6">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CheckoutForm;
