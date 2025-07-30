import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatWeDoCard from "../components/cards/WhatWeDoCard";


const categories = [
  { image: "/public/images/categories/sweet.jpg", title: "Oils", slug: "oils" },
  { image: "/public/images/categories/sweet.jpg", title: "Pickles", slug: "pickles" },
  { image: "/public/images/categories/sweet.jpg", title: "Masalas", slug: "masalas" },
  { image: "/public/images/categories/sweet.jpg", title: "Grains", slug: "grains" },
  { image: "/public/images/categories/sweet.jpg", title: "Rice", slug: "rice" },
  { image: "/public/images/categories/sweet.jpg", title: "Flours", slug: "flours" },
  { image: "/public/images/categories/sweet.jpg", title: "Sweets", slug: "sweets" },
  { image: "/public/images/categories/sweet.jpg", title: "Health Mixes", slug: "health-mixes" },
];

function WhatWeDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div>
      <div className="padding-top"></div>

      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={6} md={6} className="heading-main-div mt-4">
            {" "}
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
                  What We Do In Farm
                </motion.h1>
              </div>
            </Col>
            <Col xs={6} md={6} className="view-all-buttom-main">
             {" "}
          
            </Col>
          </Row>
        </section>

        <Row>
          {categories.map((item, index) => (
            <Col xs={6} md={3} key={index}>
              <WhatWeDoCard
                image={item.image}
                title={item.title}
                slug={item.slug}
                icon="/public/icons/Arrow up-right-white.png"
              />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default WhatWeDo;