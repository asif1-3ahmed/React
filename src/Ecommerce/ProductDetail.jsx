import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsData from "./products";
import "./Ecommerce.css";

function ProductDetail({ addToCart, cartCount }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-detail-container">
      <div className="cart-button" style={{ textAlign: "right" }}>
        <Link to="/task8/cart">🛒 Cart ({cartCount})</Link>
      </div>

      <h2>{product.name}</h2>
      <img
        src={product.img}
        alt={product.name}
        className="product-detail-img"
      />

      <div className="product-detail-info">
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Description:</b> {product.description}</p>
      </div>

      <div className="detail-buttons">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <Link to="/task8/cart">
          <button>Go to Cart</button>
        </Link>
        <button className="back-button" onClick={() => navigate(-1)}>
          Back to Products
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
