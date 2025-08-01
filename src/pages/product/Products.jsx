// src/pages/ProductList.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "Hair Care Oil" },
  { id: 2, name: "Skin Care Oil" },
  { id: 3, name: "Herbal Combo Pack" },
  { id: 4, name: "Hair & Skin Combo" },
];

function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
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
                Oil Products
              </motion.h1>
            </div>
          </Col>
        </Row>

        <div>
          <ul>
            {dummyProducts.map((product) => (
              <li key={product.id} style={{ marginBottom: "10px" }}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Products;
