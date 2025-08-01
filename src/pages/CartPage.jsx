import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function CartPage() {
  const cart = useSelector((state) => state.cart); // Get entire cart state
  console.log("Full cart state:", cart); // Check entire cart state
  
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart items:", cartItems); // Verify items array

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);

  // Debugging: check if items exist in state
  console.log("Cart Items:", cartItems);

//   if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <>
    <div className="padding-top"></div>
  
    <div className="container my-5">
      <h2>My Cart</h2>
      {/* Show empty message only if cart is empty */}
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul className="list-group">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.product_name}</strong> <br />
              Size: {item.size || "Default"} <br />
              ₹ {item.price} × {item.quantity} <br />
              <small>Total: ₹ {item.price * item.quantity}</small>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default CartPage;
