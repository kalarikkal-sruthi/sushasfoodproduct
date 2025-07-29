import Row from "react-bootstrap/Row";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Col from "react-bootstrap/Col";

function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div>
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
                  What We Do In Farm
                </motion.h1>
              </div>
            </Col>
            <Col xs={6} md={6} className="view-all-buttom-main">
              {" "}
              <div className="view-all-button">
                <a href="">
                  <button>View All</button>
                </a>
              </div>
            </Col>
          </Row>
        </section>
        <Row>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/7.png" alt="" />

              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/2.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/3.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/4.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/5.jpeg" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/1.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/6.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="card-main">
              <img src="/public/whatwedo/8.png" alt="" />
              <div className="card-overlay">
                <div className="card-overlay-main">
                  <div className="card-overlay-head">
                    <h1>Virgin Coconut Oil</h1>
                  </div>
                  <div className="card-overlay-icon">
                    <img
                      src="/public/icons/Arrow up-right-white.png"
                      alt={name}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-name">
              <h1>Virigin Coconut Oil </h1>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Categories;
