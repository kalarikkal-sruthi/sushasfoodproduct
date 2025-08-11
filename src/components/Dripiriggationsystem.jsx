import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import drip from "../assets/otherfarmactivities/drip.webp";

const RooteCultivation = () => {
  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="what-we-do-title" className="">
          <Row className="mb-5 mt-5 pt-5">
            <Col className="">
              <motion.h1
                id="what-we-do-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
            Drip Irrigation System
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                We use a drip irrigation system to ensure every plant receives the exact amount of water it needs, directly at its roots. This method conserves water by reducing evaporation and runoff, making it one of the most sustainable irrigation techniques for organic farming. By delivering water slowly and evenly, drip irrigation supports healthy root development, improves nutrient absorption, and minimizes weed growth. It also allows us to integrate organic liquid fertilizers directly into the system, nourishing crops in a targeted, efficient way. This approach not only saves precious resources but also helps us maintain consistent crop quality throughout the growing season.
              </motion.p>

              <img src={drip} alt="" className="w-100  h-50 mt-5" />
                            <h2 className="mt-5">Key Features</h2>
                                    <ul>
                                      <li>Water Efficiency</li>
                                      <li>Targeted Nutrient Delivery </li>
                                      <li>Reduced Weed Growth </li>
                                      <li>Healthy Root Development</li>
                                    </ul>
                                     <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="lead text-muted mb-0"
                            >
                                We use a drip irrigation system to ensure every plant receives the exact amount of water it needs, directly at its roots. This method conserves water by reducing evaporation and runoff, making it one of the most sustainable irrigation techniques for organic farming. By delivering water slowly and evenly, drip irrigation supports healthy root development, improves nutrient absorption, and minimizes weed growth. It also allows us to integrate organic liquid fertilizers directly into the system, nourishing crops in a targeted, efficient way. This approach not only saves precious resources but also helps us maintain consistent crop quality throughout the growing season.
            </motion.p>
            </Col>
          </Row>
         
        </section>
      </Container>
    </main>
  );
};

export default RooteCultivation;