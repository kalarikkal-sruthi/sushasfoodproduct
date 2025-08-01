import Row from "react-bootstrap/Row";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { imgURL } from "../utils/api";

function Categories({ data }) {
  const navigate = useNavigate();

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
                <button onClick={() => navigate("/whatwedo")}>
                  View All 
                </button>
              </div>
            </Col>
          </Row>
        </section>
        <Row>
          {data.map((category, index) => (
            <Col xs={6} md={3} key={index}>
              <div className="card-main">
                <img src={`${imgURL}${category.image}`} alt={category.name} />

                <div className="card-overlay">
                  <div className="card-overlay-main">
                    <div className="card-overlay-head">
                      <h1>{category.name}</h1>
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
                <h1>{category.name}</h1>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default Categories;
