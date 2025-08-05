import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion, useInView } from "framer-motion";

export default function Organicproducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section 
      id="about-susha-prakash-farm"
      className="organic-products-section padding-horizontal"
      aria-labelledby="about-heading"
      style={{ position: "relative" }} 
    >
      <Row>
        <Col xs={12}>
          <div className="organic-product-contents">
            <header className="heading-main">
              <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                id="about-heading"
                className="scroll-section"
                style={{
                  position: "sticky",
                  top: "30vh",
                  textAlign: "center",
                  fontSize: "clamp(2rem, 6vw, 3.5rem)",
                  zIndex: 2,
                  margin: 0,
                }}
              >
                About Susha’s Prakash Farm
              </motion.h1>
            </header>

            <article>
              <p>
                Susha’s Prakash Farm is a thriving example of sustainable
                agriculture. We are dedicated to planting, harvesting, and
                caring for animals in ways that respect nature and foster
                community growth. Our organic methods ensure safe, healthy
                produce and a better planet for future generations.
              </p>
              <p>
                Whether it's our lush crop fields, free-roaming animals, or
                natural fertilizers, every aspect of our farm promotes harmony
                between people and the planet. Visit us to learn more about
                eco-friendly farming!
              </p>
                <p>
                Whether it's our lush crop fields, free-roaming animals, or
                natural fertilizers, every aspect of our farm promotes harmony
                between people and the planet. Visit us to learn more about
                eco-friendly farming!
              </p>
            </article>
          </div>
        </Col>
      </Row>
    </section>
  );
}
