import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/layouts/About";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CheckoutForm from "./components/layouts/CheckoutForm";
import AccountPage from "./components/layouts/AccountPage";
import Signup from "./components/layouts/Signup";
import ShopAll from "./components/layouts/ShopAll";
import CartDrawer from "./components/layouts/CartDrawer.jsx";
import Product from "./components/layouts/Product.jsx";
import OrderHistory from "./components/common/OrderHistory.jsx";

function App() {
  const location = useLocation();
  const [cart, setCart] = useState(() => {
    // Load initial cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity === 0) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const headerFooterPaths = ["/", "/about", "/account", "/shop-all"];
  const showHeaderFooter = headerFooterPaths.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header toggleCart={toggleCart} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop-all" element={<ShopAll addToCart={addToCart} />} />
        <Route
          path="/account/checkout"
          element={
            <CheckoutForm cartItems={cart} updateQuantity={updateQuantity} />
          }
        />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/order-history"
          element={
            <OrderHistory cartItems={cart} updateQuantity={updateQuantity} />
          }
        />
      </Routes>
      <CartDrawer
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cart}
        updateQuantity={updateQuantity}
      />
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;
