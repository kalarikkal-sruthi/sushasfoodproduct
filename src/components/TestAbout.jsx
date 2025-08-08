import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";
import Certificate from "./Certificates";

const TestAbout = () => {
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
      <Container className="mt-5 pt-5">
        <section aria-labelledby="about-heading" className="">
          <Row className="align-items-center justify-content-center">
            <Col md={8} className="pe-md-5">
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
                      style={{color:"#294085"}}
                    >
                      About Susha's Prakash
                    </motion.h1>
                    <motion.p
                      className="lead text-muted"
                      variants={itemVariants}
                    >
                      A sustainable organic farm located in Kerala.
                    </motion.p>
                  </header>

                  <article>
                    <p>
                      Susha’s Prakash Farm is a leading example of sustainable
                      agriculture in Kerala. We focus on natural farming
                      techniques that respect the environment and promote
                      community welfare.
                    </p>
                    <p>
                      Our practices include organic fertilization, free-roaming
                      animals, and a commitment to eco-friendly crop management.
                      We invite visitors to learn about sustainable farming
                      firsthand and support our efforts toward a greener future.
                    </p>
                     <p>
                      Susha’s Prakash Farm is a leading example of sustainable
                      agriculture in Kerala. We focus on natural farming
                      techniques that respect the environment and promote
                      community welfare.
                    </p>
                    <p>
                      Our practices include organic fertilization, free-roaming
                      animals, and a commitment to eco-friendly crop management.
                      We invite visitors to learn about sustainable farming
                      firsthand and support our efforts toward a greener future.
                    </p>
                     <p>
                      Our practices include organic fertilization, free-roaming
                      animals, and a commitment to eco-friendly crop management.
                      We invite visitors to learn about sustainable farming
                      firsthand and support our efforts toward a greener future.
                    </p>
                  </article>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                }}
              >
                <Image
                  src="/images/auth/reg.png"
                  alt="Portrait of a farm representative"
                  fluid
                  rounded
                  className="shadow-lg"
                />
              </motion.div>
            </Col>
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
            style={{color:"#294085"}}
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
                            style={{color:'#294085 !important'}}
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

export default TestAbout;
