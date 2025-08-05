import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);

  return (
    <main>
      <Helmet>
        <title>My Cart | Susha's Food Products</title>
        <meta
          name="description"
          content="Review and manage the items in your shopping cart on MyFezto."
        />
        <link rel="canonical" href="https://myfezto.com/cart" />
      </Helmet>
      <div className="padding-top" />
      <div className="padding-top" />
      <section className="padding-horizontal">
        <section className="header-bar" aria-label="Cart Heading">
          <Row>
            <Col xs={12}>
              <div className="heading-main ">
                <h1> My Cart</h1>
              </div>
            </Col>
          </Row>
        </section>
        <section className="" aria-label="Cart Items">
          {cartItems.length === 0 ? (
            <p className="text-muted" aria-live="polite">
              Your cart is empty.
            </p>
          ) : (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-start"
                  role="article"
                  aria-label={`Cart item: ${item.product_name}`}
                >
                  <div>
                    <h4>
                      {" "}
                      <strong>{item.product_name}</strong>{" "}
                    </h4>
                    <h5>
                      {" "}
                      <span>Size: {item.size || "Default"}</span>{" "}
                    </h5>
                    <h6>
                      <span>
                        ₹ {item.price} × {item.quantity}
                      </span>
                    </h6>
                    <h4>
                      <small className="text-secondary">
                        <h4>
                          Grand Total: ₹{" "}
                          {cartItems.reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )}
                        </h4>
                        {/* Total: ₹ {item.price * item.quantity} */}
                      </small>
                    </h4>
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
          )}
          <div className="view-all-button mt-5">  <Link
                to="/login"
                aria-label="View all product categories"
              >
                <button>Proceed To Buy</button>
              </Link></div>
          
        </section>
      </section>
    </main>
  );
}

export default CartPage;
