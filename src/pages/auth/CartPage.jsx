import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

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
        <div class="" style={{ padding: "0px 200px" }}>
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
              {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                <>
                  <ul className="list-group">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                        role="article"
                        aria-label={`Cart item: ${item.product_name}`}
                      >
                        <div>
                          <h4>{item.product_name}</h4>
                          <p>Size: {item.size || "Default"}</p>
                          <p>
                            ₹ {item.price} × {item.quantity}
                          </p>
                          <small className="text-secondary">
                            Total: ₹ {item.price * item.quantity}
                          </small>
                        </div>
                        <Button
                          className="btn-sm"
                          aria-label={`Remove ${item.product_name} from cart`}
                          variant="outline-danger"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove
                        </Button>
                      </li>
                    ))}
                  </ul>

                  {/* Grand Total Section */}
                  <div className="mt-4 text-end">
                    <h4>Grand Total: ₹ {grandTotal}</h4>
                  </div>

                  {/* Proceed to Buy Button */}
                  <div className="view-all-button mt-4 text-end">
                    <Link to="/login" aria-label="Proceed to checkout">
                      <button className="btn btn-primary">
                        Proceed To Buy
                      </button>
                    </Link>
                  </div>
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
