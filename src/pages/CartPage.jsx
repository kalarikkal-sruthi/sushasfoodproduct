import { useEffect } from "react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CartPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log("Full cart state:", cart);

  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart items:", cartItems);

  useEffect(() => {
    console.log("Cart items changed:", cartItems);
  }, [cartItems]);

  console.log("Cart Items:", cartItems);

  return (
    <>
      <div>
        <div className="padding-top"></div>
        <div className="padding-top"></div>
        <section className="padding-horizontal">
          <section className="header-bar">
            <Row>
              <Col xs={6} md={6} className="heading-main-div mt-4">
                {" "}
                <div className="heading-main mt-4">
                  <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="scroll-section"
                    style={{
                      position: "sticky",
                      top: "30vh",
                      textAlign: "center",
                      zIndex: 2,
                      margin: 0,
                    }}
                  >
                    My Cart
                  </motion.h1>
                </div>
              </Col>
              <Col xs={6} md={6} className="view-all-buttom-main">
                {" "}
              </Col>
            </Row>
          </section>
          <div className="container ">
            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.product_name}</strong> <br />
                    Size: {item.size || "Default"} <br />₹ {item.price} ×{" "}
                    {item.quantity} <br />
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
        </section>
      </div>
    </>
  );
}

export default CartPage;
