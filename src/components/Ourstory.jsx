import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

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
    "Value-added products creation",
    "Demand for value-added products",

    "Hybrid seeds",
    "Dairy group",
    "Social Media marketing",
  ];

  return (
    <main aria-labelledby="our-story-heading">
      <div  className="padding-y ">
        <section aria-labelledby="our-story-heading">
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
                      id="our-story-heading"
                      className="display-4 fw-bold"
                      style={{ color: "#294085" }}
                    >
                      Our Story
                    </motion.h1>
                  </header>

                  <article>
                    <motion.p variants={itemVariants}>
                      Established in 2010, <strong>Susha Organic Farm</strong>{" "}
                      is a <strong>sustainable organic farm in Kerala</strong>{" "}
                      located on 11 acres of inherited land. With over 15 years
                      of active farming, our journey has been filled with
                      recognition, challenges, and growth.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                      We cultivate over 750 coconut trees using scientific
                      farming methods, alongside intercrops such as pumpkin,
                      ginger, yam, cocoyam, and black pepper (മത്തങ്ങ, ഇഞ്ചി,
                      ചേന, കുരുമുളക്). Our farm also raises 35 Indian breeds of
                      cows and increases income through fish farming,
                      beekeeping, and poultry farming.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                      Sustainability is at our core — we operate a large biogas
                      plant utilizing farm waste, compost organic matter, and
                      recycle nutrients for our crops. From our harvest, we
                      create <strong>value-added products</strong> under the
                      brand
                      <em> Sushar’s Food</em>, supported by all required
                      certifications including FSSAI, Udyam Registration,
                      Export, and Packing licenses.
                    </motion.p>
                  </article>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            aria-labelledby="benefits-heading"
            className="mt-2"
          >
            <motion.h2
              variants={scrollVariants}
              id="benefits-heading"
              className="fw-bold mb-4"
              style={{ color: "#5caf47" }}
            >
              Factors Contributing to Our Farming Success
            </motion.h2>

            <Row className="">
              {benefits.map((item, index) => (
                <Col md={3} className="" key={index}>
                  <motion.div
                    variants={scrollVariants}
                    custom={index}
                    className="p-3 border rounded h-100"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="d-flex align-items-baseline">
                      <motion.span
                        className="me-2"
                        style={{ color: "#294085" }}
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
                      <span >{item}</span>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.section>
        </section>
      </div>
    </main>
  );
};

export default Ourstory;
