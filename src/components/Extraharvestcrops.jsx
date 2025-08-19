import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Static images
import main2 from "../assets/whatwedofarm/2.jpeg";


// Static categories
const categories = [
  {
    name: "Tubers",
    image:  main2,
    description:
      "We cultivate organic root vegetables like yam, cassava, and sweet potatoes using sustainable farming methods.",
    link: "/whatInFarms-Category?category=Tubers",

  },
  {
    name: "Fruits",
    image:  main2,
    description:
      "We grow seasonal fruits such as mangoes, bananas, papayas, and jackfruit in an eco-friendly way.",
    link: "/whatInFarms-Category?category=Fruits",
  },
  {
    name: "Vegetables",
    image:  main2,
    description:
      "Our fresh vegetables include seasonal greens, cucumbers, and gourds, all grown organically.",
    link: "/whatInFarms-Category?category=Vegetables",
  },
  {
    name: "Herbs",
    image:  main2,
    description:
      "We cultivate medicinal herbs like tulsi, mint, and lemongrass that promote health and wellness.",
    link: "/whatInFarms-Category?category=Herbs",
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

          <Row className="g-4">
            {categories.map((cat, index) => (
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
                            src={cat.image}
                            alt={`${cat.name} - Organic Farm Produce`}
                            className="object-fit-cover"
                            style={{
                              borderRadius: "12px 0 0 12px",
                              width: "100%",

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
                              {cat.name}
                            </Card.Title>
                            <Card.Text className="flex-grow-1 text-muted">
                              {cat.description?.slice(0, 150)}
                            </Card.Text>
                               {/* <ul
                                dangerouslySetInnerHTML={{
                                  __html: item.description5,
                                }}
                              ></ul> */}
                            {/* <ul>
                              <li>Chemical-Free Cultivation</li>
                              <li>Nutrient-Dense & Fresh</li>
                              <li>Soil-Enriching Practices</li>
                              <li>Eco-Friendly Pest Management</li>
                            </ul> */}
                            <Link
                              to={`/extraharvestfromfarm/${cat.name}`}
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
      </Container>
    </main>
  );
}
