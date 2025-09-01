import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { productURL } from "../../utils/api";
import { logout } from "../../store/authSlice";
import EmptyCart from "../../components/buttons/EmptyCart";
import EmptyCartCart from "../../components/buttons/EmptyCartCart";

function CartPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const token = useSelector((state) => state.auth.token);
  console.log("token:", token);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!token) {
      navigate("/login", { state: { from: location } });
    } else {
      navigate("/checkoutpage");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  // Compute total only once using useMemo
  const grandTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);

  return (
    <main>
      <Helmet>
        <title>My Cart | Susha's Food Products</title>
        <meta
          name="description"
          content="Review and manage items in your shopping cart at Susha's Food Products. Secure checkout with high-quality organic products."
        />
        <link rel="canonical" href="https://myfezto.com/cart" />
        <link rel="preload" href="https://myfezto.com/cart" as="document" />
      </Helmet>

      <div className="padding-top" />
      <div className="padding-top" />
      <Container className="mt-5">
        <div class="calculation-padding">
          <section aria-labelledby="cart-heading">
            <header className="header-bar">
              <Row>
                <Col xs={12}>
                  <h1
                    id="cart-heading"
                    className="display-8 fw-bold mb-3"
                    style={{ color: "#294085" }}
                  >
                    My Cart
                  </h1>
                </Col>
              </Row>
            </header>

            <section aria-live="polite">
              {!token ? (
                <EmptyCartCart />
              ) : cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                <>
                  <Row>
                    <Col md={8}>
                      <ul className="list-group" aria-labelledby="cart-heading">
                        {/* Headings row */}
                        <li
                          className="fs-5 list-group-item d-flex justify-content-between align-items-center fw-bold bg-light"
                          role="presentation"
                        >
                          <div style={{ width: "25%" }}>Product</div>
                          <div style={{ width: "15%" }}>Quantity</div>
                          <div style={{ width: "15%" }}>Price</div>
                          <div style={{ width: "15%" }}>Total</div>
                          <div style={{ width: "15%" }}>Action</div>
                        </li>

                        {/* Items */}
                        {cartItems.map((item) => (
                          <li
                            key={item.id}
                            className="p-4 list-group-item d-flex justify-content-between align-items-center"
                            role="article"
                            aria-label={`Cart item: ${item.product_name}`}
                          >
                            {/* Product info */}
                            <div style={{ width: "25%" }}>
                              <img
                                className="cart-image me-2"
                                src={`${productURL}${item.image}`}
                                alt={item.product_name}
                                style={{ maxWidth: "50px", height: "auto" }}
                              />
                              <br></br>
                              <span>{item.product_name}</span>
                            </div>

                            {/* Quantity */}
                            {/* <div style={{ width: "15%" }}>
                              {item.size}
                              <br></br>
                              {item.quantity}
                            </div> */}

                            {/* Sid:changes on 21 aug 2025 - added quantity control buttons and logic */}
                            <div style={{ width: "15%" }}>
                              {/* Product Size * Quantity */}
                              <div>
                                <small className="text-muted">
                                  {item.quantity} ({item.size})
                                </small>
                              </div>

                              {/* Quantity Controls */}
                              <div className="d-flex align-items-center mt-2">
                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  className="btn btn-sm btn-outline-secondary me-2"
                                  onClick={() =>
                                    dispatch(decrementQuantity(item.id))
                                  }
                                  disabled={item.quantity === 1} // prevent going below 1
                                  aria-label={`Decrease quantity of ${item.product_name}`}
                                >
                                  -
                                </motion.button>

                                <span>{item.quantity}</span>

                                <motion.button
                                  whileTap={{ scale: 0.95 }}
                                  className="btn btn-sm btn-outline-secondary ms-2"
                                  onClick={() =>
                                    dispatch(incrementQuantity(item.id))
                                  }
                                  aria-label={`Increase quantity of ${item.product_name}`}
                                >
                                  +
                                </motion.button>
                              </div>
                            </div>

                            {/* Price */}
                            <div style={{ width: "15%" }}>₹ {item.price}</div>

                            {/* Total */}
                            <div style={{ width: "15%" }}>
                              ₹ {item.price * item.quantity}
                            </div>

                            {/* Remove button */}
                            <div style={{ width: "15%" }}>
                              <motion.button
                                whileHover={{
                                  x: 5,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-outline btn-sm"
                                style={{
                                  borderRadius: "50px",
                                  fontWeight: "500",
                                  border: "1px solid #d33838",
                                  backgroundColor: "#d33838",
                                  color: "#fff",
                                }}
                                aria-label={`Remove ${item.product_name} from cart`}
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                              >
                                Remove →
                              </motion.button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={4}>
                      <div className=" p-4 border rounded shadow-sm bg-light">
                        <h3 className="mb-4  fw-bold">Order Summary</h3>

                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-semibold">Subtotal</span>
                          <span>₹ {grandTotal}</span>
                        </div>

                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-semibold">Shipping</span>
                          <span>₹ 0</span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between mb-3">
                          <h4 className="fw-bold">Grand Total</h4>
                          <h4 className="fw-bold">₹ {grandTotal}</h4>
                        </div>

                        <div className="mb-3">
                          <motion.button
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline btn-sm"
                            style={{
                              borderRadius: "50px",
                              fontWeight: "500",
                              border: "1px solid #294085",
                              backgroundColor: "#294085",
                              color: "#fff",
                            }}
                            aria-label={`Proceed to checkout cart`}
                            onClick={handleProceed}
                          >
                            Proceed to Checkout →
                          </motion.button>
                        </div>
                        <div>
                          <Link
                            to="/login"
                            state={{ from: location }}
                            aria-label="Proceed to checkout"
                          >
                            <motion.button
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="btn btn-outline btn-sm"
                              style={{
                                borderRadius: "50px",
                                fontWeight: "500",
                                border: "1px solid #294085",
                                backgroundColor: "#fff",
                                color: "#294085",
                              }}
                              aria-label={`Proceed to checkout cart`}
                            >
                              Go Back To Previous Page →
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              )}
            </section>
          </section>
        </div>
      </Container>
    </main>
  );
}

export default CartPage;
