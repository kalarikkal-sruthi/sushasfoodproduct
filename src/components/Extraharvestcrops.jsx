import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import tubers from "../assets/extra harvest/tubers and spices.webp";
import veg from "../assets/extra harvest/vegetables.webp";
import animal from "../assets/extra harvest/animal.webp";
import herbs from "../assets/extra harvest/herbs.webp";

// Static categories
const services = [
  {
    title: "Tubers and Spices",
    image: tubers,
    description:
      "We cultivate root vegetables organically using sustainable practices.",
    link: "Tubers",
    features: [
      "Organic yam, cassava, and sweet potatoes",
      "Rich in energy and dietary fiber",
      "Sustainably farmed without chemicals",
    ],
  },
  // {
  //   title: "Spices",
  //   image: spices,
  //   description:
  //     "We cultivate traditional spices organically with natural methods.",
  //   link: "Spices",
  //   features: [
  //     "Authentic aroma and flavor",
  //     "Naturally dried and hand-processed",
  //     "Free from chemical additives",
  //   ],
  // },

  {
    title: "Herbs",
    image: herbs,
    description:
      "We grow herbs like tulsi, mint, and lemongrass, known for their medicinal properties.",
    link: "Herbs",
    features: [
      "Medicinal and aromatic properties",
      "Supports holistic wellness",
      "100% natural and chemical-free",
    ],
  },
  {
    title: "Vegetables",
    image: veg,
    description:
      "Our vegetable garden features seasonal greens and organically grown produce.",
    link: "Vegetables",
    features: [
      "Fresh and seasonal greens",
      "High nutritional value",
      "Organically cultivated",
    ],
  },
  {
    title: "Animal Care and Maintenance",
    image: animal,
    description:
      "We provide organic care and sustainable maintenance practices for farm animals.",
    link: "Animal care and maintenance",
    features: [
      "Natural feeding practices",
      "Safe and humane environment",
      "Sustainable maintenance methods",
    ],
  },
];

export default function HomeCategories() {
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
      <div className="padding-y mt-5">
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
                  Extra Harvest Crops from Our Farm
                </motion.h2>
              </motion.section>
            </Col>
          </Row>

          <Row className="g-5">
            {services.map((cat, index) => (
              <Col lg={6} key={index}>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                >
                  <motion.div whileHover={cardHover} className="h-100">
                    <Link
                      to={`/extraharvestfromfarm/${cat.link}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
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
                              src={cat.image}
                              alt={`${cat.name} - Organic Farm Produce`}
                              className="object-fit-cover"
                              style={{
                                borderRadius: "12px 0 0 12px",
                                width: "100%",
                                height: "394px",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </Col>
                          <Col md={6} className="d-flex flex-column ">
                            <Card.Body className="p-4 d-flex flex-column justify-content-center">
                              <Card.Title
                                style={{ color: "#294085" }}
                                className="fw-bold fs-2 mb-3"
                              >
                                {cat.title}
                              </Card.Title>
                              <Card.Text className=" text-muted">
                                {cat.description?.slice(0, 150)}
                              </Card.Text>
                              <h6 className="key-faeture">Key Features</h6>
                              {cat.features && (
                                <ul style={{ backgroundColor: "#f8f9fa" }}>
                                  {cat.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                  ))}
                                </ul>
                              )}

                              <Link to={`/extraharvestfromfarm/${cat.link}`}>
                                <motion.span
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                  className="btn btn-outline "
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
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </Link>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col className="text-center">
              <Link to="/extraharvestfromfarm">
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
      </div>
    </main>
  );
}
