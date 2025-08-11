import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import root from "../assets/otherfarmcrops/root.webp";
import spices from "../assets/otherfarmcrops/spices.png";
import fruits from "../assets/otherfarmcrops/fruits.webp";
import herbs from "../assets/otherfarmcrops/herbs.jpeg";
import veg from "../assets/otherfarmcrops/vegetables.jpg";
import ornamental from "../assets/otherfarmcrops/ornamentalplants.webp";

function OtherCrops() {
  const services = [
    {
      title: "Root Vegetables",
      image: root,
      description:
        "We cultivate root vegetables and traditional spices organically using sustainable practices.",
    },
    {
      title: "Spices",
      image: spices,
      description:
        "We cultivate root vegetables and traditional spices organically using sustainable practices.",
    },
    {
      title: "Fruits",
      image: fruits,
      description:
        "Our fruit cultivation includes mangoes, bananas, papayas, and other seasonal produce.",
    },
    {
      title: "Herbs",
      image: herbs,
      description:
        "We grow herbs like tulsi, mint, and lemongrass, known for their medicinal properties.",
    },
    {
      title: "Vegetables",
      image: veg,
      description:
        "Our vegetable garden features seasonal greens and organically grown produce.",
    },
    {
      title: "Ornamental Plants",
      image: ornamental,
      description:
        "We nurture ornamental plants that beautify spaces and support biodiversity.",
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
    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
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
              More from Our Fields
            </motion.h2>
          </motion.section>
        </Col>
      </Row>

      <Row className="g-5">
        {services.map((service, index) => (
          <Col lg={6} key={index}>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <motion.div whileHover={cardHover} className="h-100">
                <Card
                  className="h-100 border-0 overflow-hidden"
                  style={{
                    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
                    borderRadius: "12px",
                  }}
                >
                  <Row className="g-0 h-100">
                    <Col md={6} className="overflow-hidden">
                      <motion.div className="h-100 w-100">
                        <Card.Img
                          src={service.image}
                          alt={service.title || "Farm crop image"}
                          className="object-fit-cover"
                          style={{
                            borderRadius: "12px 0 0 12px",
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                      </motion.div>
                    </Col>

                    <Col md={6} className="d-flex flex-column">
                      <Card.Body className="p-4 d-flex flex-column">
                        <Card.Title
                          style={{ color: "#294085" }}
                          className="fw-bold fs-4 mb-3 "
                        >
                          {service.title || "Crop"}
                        </Card.Title>
                        <Card.Text className="flex-grow-1 text-muted">
                          {service.description}
                        </Card.Text>
                        <ul>
                          <li>Chemical-Free Cultivation</li>
                          <li>Nutrient-Dense & Fresh </li>
                          <li>Soil-Enriching Practices</li>
                          <li>Eco-Friendly ApproachNatural Pest Management </li>
                        </ul>
                        <Link to="/rootcultivation">
                          {" "}
                          <motion.a
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline align-self-start mt-auto"
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
                          </motion.a>
                        </Link>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
      <Row>
        <Link to="/morefromharvest">
          {" "}
          <motion.a
            to="/"
            whileHover={{
              x: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline text-center mt-5 w-auto m-auto"
            style={{
              borderWidth: "2px",
              borderRadius: "50px",
              fontWeight: "500",
              border: "1px solid #294085",
              backgroundColor: "#294085",
              color: "#fff",
            }}
          >
            View All →
          </motion.a>
        </Link>
      </Row>
    </Container>
  );
}

export default OtherCrops;
