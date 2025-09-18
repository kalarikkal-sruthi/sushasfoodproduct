// EmptyCart.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const EmptyCart = () => {
  return (
    <main>
      <Helmet>
        <title>Sushas Foods | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Review and manage items in your shopping cart at Susha's Food Products. Secure checkout with high-quality organic products."
        />
        <link rel="canonical" href="https://www.sushasfoodproduct.com/cart" />
        <link rel="preload" href="https://www.sushasfoodproduct.com/cart" as="document" />
      </Helmet>
      <div className="padding-top"></div>

      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={7}>
          <Card className="shadow-sm border-0 text-center p-4">
            <div className="mx-auto mb-3" style={{ width: 72, height: 72 }}>
              <svg
                viewBox="0 0 24 24"
                width="72" // bigger size
                height="72" // bigger size
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </div>

            <h3 className="fw-bold mb-2">
              Sign in to view your saved items and continue shopping
            </h3>
            <p className="text-muted mb-4">Sign in to view your saved items.</p>

            <div className="d-flex mt-3 mb-3 gap-2 justify-content-around flex-wrap">
              <>
                <div>
                  <h1 className="account-head text-start">
                    Login Your Account
                  </h1>
                  <Link to="/login">
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
                      Login →
                    </motion.button>
                  </Link>
                </div>
                <div>
                  <h1 className="account-head text-start">
                    Register Your Account
                  </h1>
                  <Link to="/register">
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
                      Sign Up →
                    </motion.button>
                  </Link>
                </div>
              </>
            </div>

            <hr className="my-4" />
            <div className="small text-muted">
              <span>Already have items saved?</span>{" "}
              <Link to="/login">Sign in</Link> to sync your cart.
            </div>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default EmptyCart;
