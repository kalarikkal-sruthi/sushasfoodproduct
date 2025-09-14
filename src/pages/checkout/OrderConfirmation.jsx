import React from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function OrderConfirmation() {
  const dispatch = useDispatch();
  const ordersState = useSelector((state) => state.order);
  const orders = ordersState?.orders || [];

  console.log(orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  if (!orders) {
    return (
      <div className="container text-center mt-5">
        <h2>No order found</h2>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  return (
    <main className="res-header-top">
      <Helmet>
        <title>Checkout | SUSHA'S FOODS | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Complete your purchase securely and quickly on our checkout page."
        />
      </Helmet>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <div className="padding-top d-lg-block d-none"></div>

      <Container className="mt-3 mt-lg-5">
        <header className="header-bar">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={7}>
              <Card className="shadow-sm border-0 text-center p-4">
                <div className="mx-auto mb-3" style={{ width: 72, height: 72 }}>
                  <svg
                    viewBox="0 0 24 24"
                    width="72"
                    height="72"
                    aria-hidden="true"
                  >
                    {/* Box outline */}
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />

                    {/* Checkmark */}
                    <path
                      d="M7 12l3 3 7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  <motion.h1
                    id="value-added-products-title"
                    className="heading-res fw-bold"
                    style={{ color: "#294085" }}
                    variants={itemVariants}
                  >
                    Thank you for your order!
                  </motion.h1>
                </motion.div>

                {/* <p className="text-muted mb-4">Sign in to view your saved items.</p> */}
                {/* <p>
                  Your order ID: <strong>{orders.order_no}</strong>
                </p>
                <p>
                  Total Amount: <strong>₹{orders.total_amount}</strong>
                </p> */}
                <div className="d-flex mt-3 mb-3 gap-2 justify-content-around flex-wrap">
                  <>
                    <div>
                      <Link to="/productsbycategory">
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
                          aria-label={`Login`}
                        >
                          Back To Purchase →
                        </motion.button>
                      </Link>
                    </div>
                    <div>
                      <Link to="/myaccount">
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
                          aria-label={`Register`}
                        >
                          View Order Details →
                        </motion.button>
                      </Link>
                    </div>
                  </>
                </div>
              </Card>
            </Col>
          </Row>
        </header>
      </Container>
    </main>
  );
}

export default OrderConfirmation;
