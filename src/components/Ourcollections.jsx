import Row from "react-bootstrap/Row";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Ourcollections() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div>
      {" "}
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={6} md={6} className="heading-main-div">
              {" "}
              <div className="heading-main">
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
                  What will you Provide From Us
                </motion.h1>
              </div>
            </Col>
            <Col xs={6} md={6} className="view-all-buttom-main">
              {" "}
           <div className="view-all-button">
              <Link to="/products">
                <button>View All procuts using scrollup utility</button>
              </Link>
            </div>
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/10.png" alt="" />

                <h1>Virigin Coconut Oil</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>

                {open && (
                  <>
                    <div
                      className="modal-overlay"
                      onClick={() => setOpen(false)}
                    />
                    <div className="modal-box">
                      <div className="modal-header">
                        <h2>Virigin Coconut Oil</h2>
                        <button
                          className="close-btn"
                          onClick={() => setOpen(false)}
                        >
                          ×
                        </button>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus unde eveniet adipisci doloribus quos sint
                        veritatis nesciunt non. Nam excepturi ut sit architecto
                        ipsam eum voluptate ipsa consectetur? Quam, minima?
                      </p>

                      <video className="video" loop muted controls>
                        <source
                          src="/public/collections/virigincoconutoil.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus unde eveniet adipisci doloribus quos sint
                        veritatis nesciunt non. Nam excepturi ut sit architecto
                        ipsam eum voluptate ipsa consectetur? Quam, minima?
                      </p>

                      <button style={{ background: "#6eb449", color: "#fff" }}>
                        Add To Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/2.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/3.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/4.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/5.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/6.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/7.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/8.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/9.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/1.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/11.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div className="product-collection-image">
                <img src="/public/collections/12.png" alt="" />
                <h1>Fried Coconut Masala</h1>
                <h2>Price : INR 200 Rs</h2>
                <button className="btn" onClick={() => setOpen(true)}>
                  Shop Now
                </button>
              </div>
            </Col>
          </Row>
        </section>
      </section>
    </div>
  );
}
