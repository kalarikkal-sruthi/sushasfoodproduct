import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";
import Certificate from "./Certificates";

const Ourstory = () => {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  const benefits = [
    "Mechanization",
    "Support from farmer groups",
    "Support from the Department of Agriculture",
    "Value-added products can be created",
    "Demand for value-added products",
    "Superdensity method",
    "Subsidy",
    "Hybrid seeds",
    "Dairy group",
    "Social Media",
  ];

  return (
    <main>
      <Container className="">
        <section aria-labelledby="about-heading" className="">
          <Row className="align-items-center justify-content-center">
            <Col md={12} className="pe-md-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <header>
                    <motion.h1
                      id="about-heading"
                      className="display-4 fw-bold"
                      variants={itemVariants}
                      style={{ color: "#294085" }}
                    >
                      Our Story
                    </motion.h1>
                  </header>

                  <article>
                    <p>
                      Founded in 1996 on once barren land, our farm now spans 25
                      acres of lush countryside in the heart of Kerala, just 11
                      kilometers east of Palakkad. Our regenerative approach
                      allows us to cultivate over 50 varieties of fruits and
                      vegetables while also raising cows, goats, chickens, and
                      ducks with utmost care and respect, all in harmony with
                      our ecosystem. Bhuvaneswari's commitment to sustainable
                      farming has earned her many awards, including the
                      prestigious Kerala's Best Farmer of the Year award
                      (Karshakasree) in 2022.
                    </p>
                  </article>
                </motion.div>
              </motion.div>
            </Col>
            <Col md={12} className="pe-md-5"></Col>
          </Row>

          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            aria-labelledby="benefits-heading"
            className="mt-5"
          >
            <motion.h3
              variants={scrollVariants}
              id="benefits-heading"
              className="fw-bold mb-4"
              style={{ color: "#5caf47" }}
            >
              Factors Contributing to Our Farming Success
            </motion.h3>

            {/* Split items into rows of 5 */}
            {Array.from({ length: Math.ceil(benefits.length / 5) }).map(
              (_, rowIndex) => {
                const start = rowIndex * 5;
                const end = start + 5;
                const itemsInRow = benefits.slice(start, end);

                return (
                  <Row
                    key={rowIndex}
                    className={`g-4 ${
                      itemsInRow.length < 5 ? "justify-content-center" : ""
                    }`}
                  >
                    {itemsInRow.map((item, index) => (
                      <Col className="five-col mb-4" key={index}>
                        <motion.div
                          variants={scrollVariants}
                          custom={start + index}
                          className="p-3 border rounded h-100"
                          whileHover={{ scale: 1.03 }}
                        >
                          <div className="d-flex align-items-baseline just">
                            <motion.span
                              className=" me-2"
                              style={{ color: "#294085 !important" }}
                              animate={{
                                scale: [1, 1.2, 1],
                                transition: {
                                  delay: 0.3,
                                  repeat: Infinity,
                                  repeatDelay: 3,
                                },
                              }}
                            >
                              <i
                                className="bi bi-check-circle-fill"
                                aria-hidden="true"
                              ></i>
                            </motion.span>
                            <span>{item}</span>
                          </div>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                );
              }
            )}
          </motion.section>
        </section>
      </Container>
    </main>
  );
};

export default Ourstory;
