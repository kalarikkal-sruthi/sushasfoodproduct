import React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container } from "react-bootstrap";
import drip from "../assets/otherfarmactivities/drip.webp";
import pot from "../assets/otherfarmactivities/pot.jpg";
import soil from "../assets/otherfarmactivities/soilwater.jpeg";
import organic from "../assets/otherfarmactivities/oraganicfarming.jpeg";
import organicfertilizer from "../assets/otherfarmactivities/oragnic.jpeg";
import automated from "../assets/otherfarmactivities/automated.jpeg";
import valueadded from "../assets/otherfarmactivities/value-added-product.jpeg";
// import nursery from "../assets/otherfarmactivities/Nursery.jpeg"

function OtherFarmActivities() {
  const services = [
    {
      title: "Drip Irrigation System",
      image: drip,
      description:
        "We use drip irrigation systems to optimize water usage for our crops, ensuring sustainability and efficiency.",
    },
    {
      title: "Pot Irrigation System",
      image: pot,
      description:
        "This traditional method of pot irrigation helps conserve water and support plant growth in specific areas.",
    },
    {
      title: "Soil Water Conservation",
      image: soil,
      description:
        "We implement soil water conservation techniques to improve moisture retention and enhance soil health.",
    },
    {
      title: "Organic Farming",
      image: organic,
      description:
        "All farming activities are carried out organically, avoiding chemical fertilizers and pesticides.",
    },
    {
      title: "Organic Fertilizer Production",
      image: organicfertilizer,
      description:
        "We produce compost and other organic fertilizers in-house to nourish crops naturally.",
    },
    {
      title: "Automated Water Harvesting",
      image: automated,
      description:
        "Automated systems help collect and store rainwater, supporting sustainable farm practices.",
    },
    {
      title: "Value-Added Products",
      image: valueadded,
      description:
        "We transform raw produce into high-quality, value-added products to ensure zero waste and added income.",
    },
    {
      title: "Nursery",
      image: valueadded,
      description:
        "We transform raw produce into high-quality, value-added products to ensure zero waste and added income.",
    },
    {
      title: "Susha's Prakash Outlet ",
      image: valueadded,
      description:
        "We transform raw produce into high-quality, value-added products to ensure zero waste and added income.",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  };
  const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };
  return (
    <Container
      as="section"
      className="mt-5 "
      aria-labelledby="other-crops-heading"
    >
      <Row className="mb-5">
        <Col className="">
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={scrollVariants}
              id="crops-heading"
              className="fw-bold"
              style={{ color: "#5caf47" }}
            >
              Other Farm Activities
            </motion.h2>
          </motion.section>
        </Col>
      </Row>

      <Row className="g-5">
        {services.map((service, index) => (
          <Col lg={4} key={index}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <motion.div whileHover={cardHover} className="h-100">
                <div
                  className="other-farm-activities text-center "
                  style={{ borderRadius: "12px" }}
                >
                  <Card.Img
                    src={service.image}
                    alt={service.title}
                    className=" object-fit-cover"
                    style={{
                      borderRadius: "12px ",
                      width: "343px",
                      height: "193px",
                    }}
                  />
                  <div className="other-farm-activities-title mt-3">
                    {service.title}
                  </div>
             <Link to="/dripirrigationsystem">   <motion.a
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-outline text-center mt-2"
                    style={{
                      borderWidth: "2px",
                      borderRadius: "50px",
                      fontWeight: "500",
                      border: "1px solid #294085",
                      backgroundColor: "#294085",
                      color: "#fff",
                    }}
                  >
                    Learn More →
                  </motion.a></Link>  
                </div>
                {/* <Card
                    className="h-100 border-0 overflow-hidden"
                    style={{ borderRadius: "12px" }}
                  >
                    <Row className="g-0 h-100">
                      <Col md={6} className="overflow-hidden">
                        <motion.div className="h-100 w-100">
                          <Card.Img
                            src={service.image}
                            alt={service.title}
                            className="h-100 w-100 object-fit-cover"
                            style={{ borderRadius: "12px 0 0 12px" }}
                          />
                        </motion.div>
                      </Col>

                      <Col md={3} className="d-flex flex-column">
                        <Card.Body className="p-4 d-flex flex-column">
                          <Card.Title className="fw-bold fs-4 mb-3 text-primary">
                            {service.title}
                          </Card.Title>
                          <Card.Text className="flex-grow-1">
                            {service.description}
                          </Card.Text>
                          <motion.a
                            href="#"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline-primary align-self-start mt-auto"
                            style={{
                              borderWidth: "2px",
                              borderRadius: "50px",
                              fontWeight: "500",
                            }}
                            aria-label={`Learn more about ${service.title}`}
                          >
                            Learn More →
                          </motion.a>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card> */}
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OtherFarmActivities;
