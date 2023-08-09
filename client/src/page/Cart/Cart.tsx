import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./Cart.css";

const Cart: React.FC = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Cart</h1>
      <div className="d-flex justify-content-center">
        {cartItems.length > 0 ? (
          <div className="card" style={{ width: "400px", border: "1px solid #dee2e6" }}>
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>{item.title}</div>
                    <div>${item.price}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="card-body">
              <h4 className="mb-4">Total Amount: ${calculateTotal().toFixed(2)}</h4>
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
