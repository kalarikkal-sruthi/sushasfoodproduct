import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import MostCommonCrops from "./MostCommonCrops";
import Extraharvestcrops from "./Extraharvestcrops";

const WhatWeDo = () => {
  return (
    <main aria-labelledby="what-we-do-title">
 

      <Container className="mt-5">
        <section aria-labelledby="what-we-do-title">
          <Row className="mb-5">
            <Col>
              <motion.h1
                id="what-we-do-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                What We Do
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                At <strong>Susha's Prakash Organic Farm</strong>, we grow
                nutrient-rich organic crops using sustainable farming practices
                that protect the environment and support local communities.
                From rice cultivation and seasonal vegetables to value-added
                farm products, our mission is to deliver healthy food while
                caring for the land.
              </motion.p>
            </Col>
          </Row>
        </section>
      </Container>
      <article aria-label="Main crops grown on our farm">
        <MostCommonCrops />
      </article>

      <article aria-label="Additional farm produce and seasonal harvests">
        <Extraharvestcrops />
      </article>
    </main>
  );
};

export default WhatWeDo;
