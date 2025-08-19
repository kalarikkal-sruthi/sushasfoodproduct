import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import root from "../../../assets/otherfarmcrops/root.webp";
import spices from "../../../assets/otherfarmcrops/spices.png";
import fruits from "../../../assets/otherfarmcrops/fruits.webp";
import herbs from "../../../assets/otherfarmcrops/herbs.jpeg";
import veg from "../../../assets/otherfarmcrops/vegetables.jpg";
import ornamental from "../../../assets/otherfarmcrops/ornamentalplants.webp";
import garden from "../../../assets/otherfarmcrops/gardenplants.jpg";
import animal from "../../../assets/otherfarmcrops/animalcare.jpg";
import aquatic from "../../../assets/otherfarmcrops/aquaticplants.jpg";
import Breadcrumbs from "../../../components/Breadcrumbs";


function Extraharvestfull() {
  const services = [
    {
      title: "Tubers",
      image: root,
      description:
        "We cultivate root vegetables organically using sustainable practices.",
      link: "Tubers",
    },
    {
      title: "Spices",
      image: spices,
      description:
        "We cultivate traditional spices organically with natural methods.",
      link: "Spices",
    },
    {
      title: "Fruits",
      image: fruits,
      description:
        "Our fruit cultivation includes mangoes, bananas, papayas, and seasonal produce.",
      link: "Fruits",
    },
    {
      title: "Herbs",
      image: herbs,
      description:
        "We grow herbs like tulsi, mint, and lemongrass, known for their medicinal properties.",
      link: "Herbs",
    },
    {
      title: "Vegetables",
      image: veg,
      description:
        "Our vegetable garden features seasonal greens and organically grown produce.",
      link: "Vegetables",
    },
    {
      title: "Animal Care and Maintenance",
      image: animal,
      description:
        "We provide organic care and sustainable maintenance practices for farm animals.",
      link: "Animal care and maintenance",
    },
    {
      title: "Ornamental Plants",
      image: ornamental,
      description:
        "We nurture ornamental plants that beautify spaces and support biodiversity.",
      link: "Ornamental Plants",
    },
    {
      title: "Garden Plants",
      image: garden,
      description:
        "Our garden plants enhance greenery and bring life to any environment.",
      link: "Garden Plants",
    },
    {
      title: "Aquatic Plants",
      image: aquatic,
      description:
        "We cultivate aquatic plants that enrich ponds, lakes, and water gardens.",
      link: "Aquatic Plants",
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
    <main>
      <Container
        as="section"
        className="mt-5"
        aria-labelledby="Extra Harvest From Farm"
      >
        <div className="padding-top"></div>
        <div className="padding-top"></div>
       
        <section>
          <Row className="mb-5">
            <Col>
              <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h1
                  variants={scrollVariants}
                  id="crops-heading"
                  className="fw-bold"
                  style={{ color: "#294085" }}
                >
                  Extra Harvest from Our Farm
                </motion.h1>
              </motion.section>
            </Col>
             <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Extra Harvest", path: "/extraharvest" },
          ]}
        />
          </Row>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={6} key={index} as="article">
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
                              alt={`${service.title} - Organic farm produce`}
                              className="object-fit-cover"
                              loading="lazy"
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
                              className="fw-bold fs-4 mb-3"
                              as="h3"
                            >
                              {service.title}
                            </Card.Title>
                            <Card.Text className="flex-grow-1 text-muted">
                              {service.description}
                            </Card.Text>
                            <motion.div
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.98 }}
                              className="mt-auto"
                            >
                              <Link
                                to={`/extraharvestfromfarm/${service.link}`}
                                className="btn btn-outline align-self-start"
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
                              </Link>
                            </motion.div>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Extraharvestfull;
