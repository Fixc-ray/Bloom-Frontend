<<<<<<< HEAD
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContactInformationForm() {
  const [customers, setCustomer] = useState("");
  const navigate = useNavigate(); 
  const url = "http://127.0.0.1:8080/"
=======

import React, { useState } from 'react';
import Button from './Button'

function ContactInformationForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });
>>>>>>> kb

  useEffect(() => {
    const userData = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (!userData || !token) {
      navigate('/');
    } else {
      setCustomer(JSON.parse(userData));

<<<<<<< HEAD
      axios.get(`${url}customers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  }, [navigate]);
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
  };
>>>>>>> kb

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div>
<<<<<<< HEAD
          <h2 className="text-3xl font-semibold text-gray-800">
              Welcome Back {customers.first_name}
            </h2>
        </div>
        <div className="p-6 bg-gray-50 border rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-700 mb-2">User Info</h3>
            <p className="text-gray-600">
              <span className="font-medium">Name:</span> {customers.first_name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {customers.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Phone:</span> {customers.phone_number}
            </p>
          </div>
=======
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-lg border-gray-300 outline-none shadow-sm focus:ring-pink-500 focus:border-pink-500"
            placeholder="example@gmail.com"
            required
          />
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border outline-none rounded-lg border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg outline-none border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button onClick={()=>{}}  type="submit" lable={'Save'} className={'w-full text-white'} />

          {/* <Button
            type="submit"
            className="w-full py-3 bg-primary-color text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Save
          </button> */}
        </div>
      </form>
>>>>>>> kb
    </div>
  );
}

export default ContactInformationForm;
