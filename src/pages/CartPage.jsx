import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { Helmet } from "react-helmet-async";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CartPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);

  return (
    <main>
      <Helmet>
        <title>My Cart | MyFezto</title>
        <meta name="description" content="Review and manage the items in your shopping cart on MyFezto." />
        <link rel="canonical" href="https://myfezto.com/cart" />
      </Helmet>

      <div className="padding-top" />
      <section className="padding-horizontal">
        <section className="header-bar" aria-label="Cart Heading">
          <Row>
            <Col xs={12}>
              <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="scroll-section text-center my-4"
              >
                My Cart
              </motion.h1>
            </Col>
          </Row>
        </section>
        <section className="container" aria-label="Cart Items">
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
                    <strong>{item.product_name}</strong> <br />
                    <span>Size: {item.size || "Default"}</span> <br />
                    <span>₹ {item.price} × {item.quantity}</span> <br />
                    <small className="text-secondary">
                      Total: ₹ {item.price * item.quantity}
                    </small>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    aria-label={`Remove ${item.product_name} from cart`}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  );
}

export default CartPage;
