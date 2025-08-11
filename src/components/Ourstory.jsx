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
                     This organic was created in 2010. Organi Farm is located on a 11-acre inherited land. Active in farming for the past 15 years.During this period, Susha Organic Farm has received a lot of attention and recognition.We have also faced many adverse situations.
                 
                 With all that in overcome, the farm is now moving forward well. 750 coconut trees are being scientifically cultivated on 11 acres of land. In addition, pumpkin, ginger,  yam, cocoyam, and black pepper(മത്തങ്ങ, ഇഞ്ചി, ചേന, കുരുമുളക്) are being cultivated as intercrops.In addition, 35 Indian breeds of cows are raised. Increasing income through fish farming, beekeeping, and poultry farming .A large biogas plant has been set up using farm waste.
               Additionally, the waste is composted and the elements needed by plants are recycled.Value added products are made using the produce from the farms.  Sushars Food was established to provide more value to value-added products.All licenses such as FSSAI (State & Center License), Udayam Registration, Export and Packing Certificate, etc. are in good standing.   </p> </article>
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
