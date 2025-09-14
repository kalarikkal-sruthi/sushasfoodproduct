// EmptyCart.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const EmptyCart = () => {
  return (
    <main>
      <div className="padding-top"></div>

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
                <circle
                  cx="12"
                  cy="7"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 21v-2a6 6 0 0 1 12 0v2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
