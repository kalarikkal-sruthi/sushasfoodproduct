import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import fruits from "../../../assets/extra harvest/fruits.webp";

import tubers from "../../../assets/extra harvest/tubers and spices.webp";
import veg from "../../../assets/extra harvest/vegetables.webp";
import animal from "../../../assets/extra harvest/animal.webp";
import herbs from "../../../assets/extra harvest/herbs.webp";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ornamental from "../../../assets/extra harvest/ornamental plants.webp";
import gardenplants from "../../../assets/extra harvest/garden plants.webp";
import aquatic from "../../../assets/extra harvest/aquatic.webp";
import { Helmet } from "react-helmet-async";
function Extraharvestfull() {
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
   
    {
      title: "Fruits",
      image: fruits,
      description:
        "Our fruit cultivation includes mangoes, bananas, papayas, and seasonal produce.",
      link: "Fruits",
      features: [
        "Seasonal and farm-fresh",
        "Rich in vitamins and minerals",
        "Eco-friendly cultivation",
      ],
    },
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
    {
      title: "Ornamental Plants",
      image: ornamental,
      description:
        "We nurture ornamental plants that beautify spaces and support biodiversity.",
      link: "Ornamental Plants",
      features: [
        "Enhance garden aesthetics",
        "Support biodiversity",
        "Low-maintenance varieties available",
      ],
    },
    {
      title: "Garden Plants",
      image: gardenplants,
      description:
        "Our garden plants enhance greenery and bring life to any environment.",
      link: "Garden Plants",
      features: [
        "Indoor and outdoor varieties",
        "Boosts greenery and oxygen",
        "Easy to grow and maintain",
      ],
    },
    {
      title: "Aquatic Plants",
      image: aquatic,
      description:
        "We cultivate aquatic plants that enrich ponds, lakes, and water gardens.",
      link: "Aquatic Plants",
      features: [
        "Improve water quality",
        "Enhance aquatic biodiversity",
        "Ideal for ponds and aquariums",
      ],
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
    <main className="res-header-top">
      <Helmet>
      <title>Susha's Foods | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Explore our premium range of value-added farm products, crafted with care to deliver freshness, health, and sustainability from our fields to your table."
        />
        <meta
          name="keywords"
          content="farm products, organic produce, value added products, fresh produce, healthy food"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div
        className="padding-y mt-3  mt-lg-5 "
        as="section"
        aria-labelledby="extra harvest crops from our palnt"
      >
        <div className="padding-top d-lg-block d=none"></div>
        <div className="padding-top"></div>

        <section>
          <Row className="mb-3 mb-lg-5">
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

          <Row className="g-3 g-lg-5">
            {services && services.length > 0 ? (
              services.map((item) => (
                <Col lg={6} xs={6} key={item.id} as="article">
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
                        <Link
                          to={`/mostharvestfromfarm/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Row className="g-0 h-100">
                            <Col md={6} className="overflow-hidden">
                              <Card.Img
                                src={item.image}
                                alt={item.name}
                                className="object-fit-cover"
                                style={{
                                  borderRadius: "12px 0 0 12px",
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Col>

                            <Col md={6} className="d-flex flex-column">
                              <Card.Body className="p-3 p-lg-4 d-flex flex-column justify-content-center">
                                <Link
                                  to={`/mostharvestfromfarm/${item.id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  <Card.Title
                                    style={{ color: "#294085" }}
                                    className="fw-bold  mb-1 mb-lg-3"
                                  >
                                    {item.title}
                                  </Card.Title>
                                </Link>
                                <Card.Text className=" text-muted">
                                  {item.description?.slice(0, 200)}...
                                </Card.Text>

                                {item.features && (
                                  <div className="d-lg-block d-none">
                                    <h6 className="key-faeture">
                                      Key Features
                                    </h6>
                                    <ul style={{ backgroundColor: "#f8f9fa" }}>
                                      {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                <Link to={`/extraharvestfromfarm/${item.link}`}>
                                  <motion.div
                                    whileHover={{
                                      x: 5,
                                      transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn  btn-responsive btn-outline align-self-start mt-auto"
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
                                  </motion.div>
                                </Link>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Link>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col>
                <p>No data found.</p>
              </Col>
            )}
          </Row>
        </section>
      </div>
    </main>
  );
}

export default Extraharvestfull;
