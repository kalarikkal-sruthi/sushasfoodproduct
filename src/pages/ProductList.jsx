import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/cards/ProductCard";


const products = [
  {
    id: 1,
    title: "Virgin Coconut Oil",
    price: "INR 200 Rs",
    image: "/public/collections/10.png",
    video: "/public/collections/virigincoconutoil.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde eveniet adipisci doloribus quos sint veritatis.",
  },
  {
    id: 2,
    title: "Fried Coconut Masala",
    price: "INR 200 Rs",
    image: "/public/collections/2.png",
  },
  {
    id: 3,
    title: "Fried Coconut Masala",
    price: "INR 200 Rs",
    image: "/public/collections/3.png",
  },
  {
    id: 4,
    title: "Fried Coconut Masala",
    price: "INR 200 Rs",
    image: "/public/collections/4.png",
  },
  // Add the rest of the products here
];

export default function ProductList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={6} md={6} className="heading-main-div mt-4">
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
                 Our Products
                </motion.h1>
              </div>
            </Col>
            <Col xs={6} md={6} className="view-all-buttom-main">
          
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            {products.map((product) => (
              <Col xs={6} md={3} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </section>
      </section>
    </div>
  );
}