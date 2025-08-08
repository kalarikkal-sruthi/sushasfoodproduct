import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Row, Col } from "react-bootstrap";

export default function Checkout() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={12} md={12} className="heading-main-div mt-4">
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
                  Checkout
                </motion.h1>
              </div>
            </Col>
            1.edit checkout addrees 2.set as default checkout 3.new checkout
          </Row>
        </section>
      </section>
    </div>
  );
}
