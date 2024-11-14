import React, { useState } from 'react';
import styled from 'styled-components';

const Cart = () => {
  const initialCartItems = [
    { id: 1, name: "Moisturizing lotion", price: 28.0, quantity: 2 },
    { id: 2, name: "Clarifying Emulsion", price: 32.0, quantity: 1 },
    { id: 3, name: "Hydrating Serum", price: 25.0, quantity: 2 },
    
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to increase the quantity of a specific item
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to decrease the quantity of a specific item (minimum 1)
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            <QuantityControl>
              <QuantityButton onClick={() => decreaseQuantity(item.id)}>-</QuantityButton>
              <ItemQuantity>Qty: {item.quantity}</ItemQuantity>
              <QuantityButton onClick={() => increaseQuantity(item.id)}>+</QuantityButton>
            </QuantityControl>
            <RemoveButton onClick={() => removeItem(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      <TotalSection>Total: ${total.toFixed(2)}</TotalSection>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
};

// Styled Components for UI styling
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffe6f2;
  }
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  color: #888;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const ItemQuantity = styled.span`
  margin: 0 10px;
  color: #666;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

const TotalSection = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: right;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #388e3c;
  }
`;

export default Cart;
