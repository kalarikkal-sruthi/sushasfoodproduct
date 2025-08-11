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

  // const scrollVariants = {
  //   offscreen: { y: 50, opacity: 0 },
  //   onscreen: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { type: "tween", ease: "easeOut", duration: 0.8 },
  //   },
  // };

  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="about-heading" className="">
          <Row className="align-items-center justify-content-center">
            <Col md={7} className="pe-md-5">
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
                      About Susha's Prakash Farm
                    </motion.h1>
                    <motion.p
                      className="lead text-muted"
                      variants={itemVariants}
                    >
                      A sustainable organic farm located in Kerala.
                    </motion.p>
                  </header>

                  <article>
                    Meet P T Sushama, the founder of Susha' Prakash 
                    Organic Farms! My husband Prakash has been a role model for my dedication to agriculture. Our  farm is inspired by the mutual
                    flourishing of people and nature. Our mission is to foster a
                    healthy community by providing affordable organic produce
                    while upholding sustainable farming practices that
                    rejuvenate nature. Our regenerative farming methods support
                    healthy communities and healthy ecosystems by building soil
                    health, promoting biodiversity, and cultivating the most
                    nutrient-dense food possible. We have received many recognitions for this work. We make value added products using produce from the farm.The value-added products produced in this way are marketed at our outlet.
                  </article>
                </motion.div>
              </motion.div>
            </Col>

            <Col md={5}>
              <motion.div
                style={{ textAlign: "center" }}
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
                  className="shadow-lg w-50 m-auto"
                />
              </motion.div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default TestAbout;
