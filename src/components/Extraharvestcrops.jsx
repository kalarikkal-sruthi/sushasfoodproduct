import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import root from "../assets/otherfarmcrops/root.webp";
import spices from "../assets/otherfarmcrops/spices.png";
import fruits from "../assets/otherfarmcrops/fruits.webp";
import herbs from "../assets/otherfarmcrops/herbs.jpeg";
import veg from "../assets/otherfarmcrops/vegetables.jpg";
import ornamental from "../assets/otherfarmcrops/ornamentalplants.webp";

function Extraharvestcrops() {
  const services = [
    {
      title: "Tubers (കിഴങ്ങു വർഗ്ഗങ്ങൾ)",
      image: root,
      description:
        "We cultivate organic root vegetables like yam, cassava, and sweet potatoes using sustainable farming methods.",
    },
    {
      title: "Fruits (പഴവർഗ്ഗങ്ങൾ)",
      image: fruits,
      description:
        "We grow seasonal fruits such as mangoes, bananas, papayas, and jackfruit in an eco-friendly way.",
    },
    {
      title: "Vegetables (പച്ചക്കറികൾ)",
      image: veg,
      description:
        "Our fresh vegetables include seasonal greens, cucumbers, and gourds, all grown organically.",
    },
    {
      title: "Herbs (ഔഷധസസ്യങ്ങൾ)",
      image: herbs,
      description:
        "We cultivate medicinal herbs like tulsi, mint, and lemongrass that promote health and wellness.",
    },
    {
      title: "Spices (സുഗന്ധവ്യഞ്ജനങ്ങൾ)",
      image: spices,
      description:
        "Our farm produces traditional spices such as black pepper, cardamom, and turmeric organically.",
    },
    {
      title: "Ornamental & Garden Plants (അലങ്കാര സസ്യങ്ങളും പൂന്തോട്ട ചെടികളും)",
      image: ornamental,
      description:
        "We nurture ornamental, garden, and aquatic plants that enhance beauty and support biodiversity.",
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
    <main aria-labelledby="extra-harvest-heading">
     

      <Container className="mt-5">
        <section>
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
                  Extra Harvest from Our Farm
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
                          <Card.Img
                            src={service.image}
                            alt={`${service.title} - Organic Farm Produce`}
                            className="object-fit-cover"
                            style={{
                              borderRadius: "12px 0 0 12px",
                              width: "100%",
                             height:"314px",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                          />
                        </Col>

                        <Col md={6} className="d-flex flex-column">
                          <Card.Body className="p-4 d-flex flex-column">
                            <Card.Title
                              style={{ color: "#294085" }}
                              className="fw-bold fs-4 mb-3"
                            >
                              {service.title}
                            </Card.Title>
                            <Card.Text className="flex-grow-1 text-muted">
                              {service.description}
                            </Card.Text>
                            <ul>
                              <li>Chemical-Free Cultivation</li>
                              <li>Nutrient-Dense & Fresh</li>
                              <li>Soil-Enriching Practices</li>
                              <li>Eco-Friendly Pest Management</li>
                            </ul>
                            <Link to="/tubers" className="mt-auto">
                              <motion.span
                                whileHover={{
                                  x: 5,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-outline align-self-start"
                                style={{
                                  borderRadius: "50px",
                                  fontWeight: "500",
                                  border: "1px solid #294085",
                                  backgroundColor: "#294085",
                                  color: "#fff",
                                }}
                              >
                                Learn More →
                              </motion.span>
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
            <Col className="text-center">
              <Link to="/extrafull">
                <motion.span
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline mt-5"
                  style={{
                    borderRadius: "50px",
                    fontWeight: "500",
                    border: "1px solid #294085",
                    backgroundColor: "#294085",
                    color: "#fff",
                  }}
                >
                  View All →
                </motion.span>
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}

export default Extraharvestcrops;
