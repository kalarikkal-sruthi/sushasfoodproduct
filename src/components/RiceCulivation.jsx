import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import rice from "../assets/whatwedo/ric.webp";


const RiceCultivation = () => {
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
                Rice cultivation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
               At our farm, Ponmani rice is grown with deep respect for nature and tradition. We follow purely organic methods, using natural compost, green manure, and bio-fertilizers to enrich the soil. By avoiding harmful chemicals, we protect not only the crop but also the surrounding ecosystem. Our sustainable practices—such as crop rotation, water conservation, and traditional planting techniques—help preserve soil fertility and maintain biodiversity. The result is nutrient-dense, aromatic Ponmani rice that’s as wholesome for your health as it is gentle on the planet.
              </motion.p>
              <img src={rice} alt="" className="w-100  h-50 mt-5" />
              <h2 className="mt-5">Key Features</h2>
                      <ul>
                        <li>Traditional Cultivation Techniques</li>
                        <li>100% Organic Methods </li>
                        <li>Nutrient-Rich Variety</li>
                        <li>Eco-Friendly Approach</li>
                      </ul>
                       <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
               At our farm, Ponmani rice is grown with deep respect for nature and tradition. We follow purely organic methods, using natural compost, green manure, and bio-fertilizers to enrich the soil. By avoiding harmful chemicals, we protect not only the crop but also the surrounding ecosystem. Our sustainable practices—such as crop rotation, water conservation, and traditional planting techniques—help preserve soil fertility and maintain biodiversity. The result is nutrient-dense, aromatic Ponmani rice that’s as wholesome for your health as it is gentle on the planet.
              </motion.p>
            </Col>
          </Row>
         
        </section>
      </Container>
    </main>
  );
};

export default RiceCultivation;