import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import MostCommonCrops from "./MostCommonCrops";
import OtherCrops from "./OtherCrops";
import OtherFarmActivities from "./OtherFarmActivities";

const WhatWeDo = () => {
  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="what-we-do-title" className="">
          <Row className="mb-5">
            <Col className="">
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
                Farm activities Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum, error unde! Dolores officia iusto
                obcaecati, sequi laborum ipsum aliquam inventore nam magnam
                doloribus, ullam qui corrupti id est, unde eum.
              </motion.p>
            </Col>
          </Row>
          <Row>
            <MostCommonCrops />
            <OtherCrops />
            {/* <OtherFarmActivities /> */}
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default WhatWeDo;
