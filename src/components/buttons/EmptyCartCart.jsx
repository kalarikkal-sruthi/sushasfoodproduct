// EmptyCart.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const EmptyCartCart = () => {
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

      <Container className="mt-5">
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
                  <path
                    d="M7 4h-2l-1 2v2h2l3.6 7.59-1.35 2.41A2 2 0 0 0 10 20h10v-2H10.42a.25.25 0 0 1-.22-.37L11 16h6.55a2 2 0 0 0 1.9-1.37L22 7H6.21l-.94-2H3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="10" cy="21" r="1" fill="currentColor" />
                  <circle cx="18" cy="21" r="1" fill="currentColor" />
                </svg>
              </div>

              <h3 className="fw-bold mb-2">Missing Cart items?</h3>
              <p className="text-muted mb-4">
                Sign in to view your saved items.
              </p>

              <div className="d-flex mt-3 mb-3 gap-2 justify-content-around flex-wrap">
                <>
                  <div>
                   
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
      </Container>
    </main>
  );
};

export default EmptyCartCart;
