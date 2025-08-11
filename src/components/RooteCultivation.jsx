import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import root from "../assets/otherfarmcrops/root.webp";


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
               Root Vegetables
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
               Our root vegetables—such as carrots, beets, radishes, and sweet potatoes—are grown using purely organic farming methods that work in harmony with nature. We prepare the soil with rich organic compost and natural manures, ensuring it is loose, fertile, and full of beneficial microbes. By practicing crop rotation and intercropping, we maintain soil health and prevent pest build-up naturally. Instead of synthetic chemicals, we rely on biological pest control and companion planting to protect crops. Regular mulching conserves moisture, suppresses weeds, and keeps the soil cool, resulting in vibrant, nutrient-rich root vegetables that are as good for the planet as they are for your plate.


              </motion.p>

              <img src={root} alt="" className="w-100  h-50 mt-5" />
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

export default RooteCultivation;