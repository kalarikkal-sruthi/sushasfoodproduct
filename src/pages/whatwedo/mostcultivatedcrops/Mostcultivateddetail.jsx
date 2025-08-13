import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import rice from "../../../assets/whatwedo/ric.webp";
import { Helmet } from "react-helmet-async";

const Mostcultivateddetail = () => {
  const description = `At our farm, Ponmani rice is grown with deep respect for nature and tradition. 
  We follow purely organic methods, using natural compost, green manure, and bio-fertilizers to enrich the soil. 
  By avoiding harmful chemicals, we protect not only the crop but also the surrounding ecosystem. 
  Our sustainable practices—such as crop rotation, water conservation, and traditional planting techniques—
  help preserve soil fertility and maintain biodiversity. 
  The result is nutrient-dense, aromatic Ponmani rice that’s as wholesome for your health as it is gentle on the planet.`;

  const features = [
    "Traditional Cultivation Techniques",
    "100% Organic Methods",
    "Nutrient-Rich Variety",
    "Eco-Friendly Approach",
  ];

  const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <main>
      <Container className="mt-5 ">
        <div className="padding-top"></div>
        <div className="padding-top"></div>
        <section aria-labelledby="rice-cultivation-title">
          <Row className="mb-5">
            <Col>
              <motion.h1
                id="rice-cultivation-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                Rice Cultivation
              </motion.h1>

              <article>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="lead text-muted mb-4"
                >
                  {description}
                </motion.p>
              </article>
              <Row>
                <Col md={4}>
                  {" "}
                  <figure>
                    <img
                      src={rice}
                      alt="Ponmani rice cultivation in organic farmland"
                      className="w-100 h-50"
                      loading="lazy"
                    />
                    <figcaption className="text-muted mt-2">
                      Ponmani rice grown organically in our farm fields
                    </figcaption>
                  </figure>
                </Col>
                <Col md={4}>
                  {" "}
                  <figure>
                    <img
                      src={rice}
                      alt="Ponmani rice cultivation in organic farmland"
                      className="w-100 h-50"
                      loading="lazy"
                    />
                    <figcaption className="text-muted mt-2">
                      Ponmani rice grown organically in our farm fields
                    </figcaption>
                  </figure>
                </Col>
                <Col md={4}>
                  {" "}
                  <figure>
                    <img
                      src={rice}
                      alt="Ponmani rice cultivation in organic farmland"
                      className="w-100 h-50"
                      loading="lazy"
                    />
                    <figcaption className="text-muted mt-2">
                      Ponmani rice grown organically in our farm fields
                    </figcaption>
                  </figure>
                </Col>
              </Row>

              <section className="mt-3" aria-labelledby="key-features-title">
                <Row className="mb-3">
                  <Col>
                    <motion.section
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.h2
                        variants={scrollVariants}
                        id="extra-harvest-heading"
                        className="fw-bold"
                        style={{ color: "#5caf47" }}
                      >
                        Key Features
                      </motion.h2>
                    </motion.section>
                  </Col>
                </Row>
                <ul>
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </section>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Mostcultivateddetail;
