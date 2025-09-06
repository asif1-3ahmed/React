import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ecommerce.css";

function CartPage({ cart, updateCartQty }) {
  const navigate = useNavigate();

  if (!cart || cart.length === 0)
    return (
      <div>
        <h2>Cart is empty</h2>
        <button className="back-button" onClick={() => navigate(-1)}>Back to Products</button>
      </div>
    );

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
              </td>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => updateCartQty(item.id, -1)}>-</button>
                <span style={{ margin: "0 8px" }}>{item.qty}</span>
                <button onClick={() => updateCartQty(item.id, 1)}>+</button>
              </td>
              <td>₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"><b>Total:</b></td>
            <td>₹{totalPrice}</td>
          </tr>
        </tfoot>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>Back to Products</button>
    </div>
  );
}

export default CartPage;
