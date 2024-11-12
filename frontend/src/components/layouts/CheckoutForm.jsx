import React, { useState } from "react";

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
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-5 bg-gray-100">
      <div className="flex flex-col md:flex-row md:space-x-8 bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="w-full md:w-2/3 space-y-4">
          <div className="flex justify-between items-center mb-6">
            <a href="/" className="text-gray-600 hover:text-gray-800">
              ← Home
            </a>
            <h1 className="text-2xl font-bold text-pink-500">Bloom Beauty</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-1"
              >
                Contact Information
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label
                htmlFor="subscribeToNewsletter"
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  id="subscribeToNewsletter"
                  name="subscribeToNewsletter"
                  checked={formData.subscribeToNewsletter}
                  onChange={handleInputChange}
                  className="mr-2 h-4 w-4 text-pink-500 rounded"
                />
                <span className="text-gray-700">
                  Yes, I want to subscribe to the newsletter now
                </span>
              </label>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Delivery Method
              </label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="ship"
                    name="deliveryMethod"
                    value="ship"
                    checked={formData.deliveryMethod === "ship"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-pink-500"
                  />
                  <span className="text-gray-700">Ship</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    id="pickUp"
                    name="deliveryMethod"
                    value="pickUp"
                    checked={formData.deliveryMethod === "pickUp"}
                    onChange={handleInputChange}
                    className="mr-2 h-4 w-4 text-pink-500"
                  />
                  <span className="text-gray-700">Pick Up</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block font-medium text-gray-700 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block font-medium text-gray-700 mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Continue To Shipping
            </button>
          </form>
        </div>

        <div className="hidden md:block md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Your order</h2>
          <div className="space-y-4">
            {/* Order items placeholder */}
            <div className="flex items-center space-x-4">
              <img
                src="product_image_url"
                alt="Product"
                className="w-16 h-16 rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">Product Name</h3>
                <span className="text-gray-600">$19.60</span>
              </div>
            </div>
            {/* Repeat for each item */}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>$84.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
