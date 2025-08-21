import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productURL } from "../../utils/api";

function Account() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const token = useSelector((state) => state.auth.token);
  console.log("token:", token);

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
                    My Cart(count)
                  </h1>
                </Col>
              </Row>
            </header>

            <section aria-live="polite">
              {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                <>
                  <Row>
                    <Col md={12}>
                      <ul className="list-group" aria-labelledby="cart-heading">
                        {/* Headings row */}
                        <li
                          className="list-group-item d-flex justify-content-between align-items-center fw-bold bg-light"
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
                            <div style={{ width: "15%" }}>
                              {item.quantity}({item.size})
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
                    <Col md={12}>
                      <div className=" p-4 border rounded shadow-sm bg-light">
                        <div className="d-flex justify-content-around mb-3">
                          <h4 className="fw-bold">Total Payble</h4>
                          <h4 className="fw-bold">₹ {grandTotal}</h4>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col>
                      <h1 className="account-head">Have An Account</h1>
                      <Link to="/login">
                        {" "}
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
                            backgroundColor: "#294085",
                            color: "#fff",
                          }}
                          aria-label={`Login`}
                        >
                          Login →
                        </motion.button>
                      </Link>
                    </Col>
                    <Col>
                      <h1 className="account-head">New to Susha's Food</h1>
                        <Link to='/register'>
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
                          backgroundColor: "#294085",
                          color: "#fff",
                        }}
                        aria-label={`Login`}
                      >
                        Sign Up →
                      </motion.button>
                      </Link>
                    </Col>
                    <Col>
                      <h1 className="account-head">As a Guest</h1>
                      <Link to={'/guest'}>
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
                          backgroundColor: "#294085",
                          color: "#fff",
                        }}
                        aria-label={`Have An Account`}
                      >
                        Continue As Guest →
                      </motion.button>
                      </Link>
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

export default Account;
