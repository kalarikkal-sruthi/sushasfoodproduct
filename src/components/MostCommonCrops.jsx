import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import coconutimage from "../assets/whatwedo/coconut.jpg";
import rice from "../assets/whatwedo/ric.webp";
import jathi from "../assets/whatwedo/jathi.jpg";
import pepper from "../assets/whatwedo/pepper.jpeg";
import kuttymulla from "../assets/whatwedo/kuttimulla.jpeg";
import curryleaves from "../assets/whatwedo/curryleaves.jpg";
import { Link } from "react-router-dom";

function MostCommonCrops() {
  const services = [
    {
      title: "Coconut cultivation(തെങ്ങ് കൃഷി)",
      image: coconutimage,
      description:
        "Our family has about 750 coconut trees, and we make value-added products from the coconuts we get from them.",
    },
    {
      title: "Rice cultivation(നെൽകൃഷി)",
      image: rice,
      description:
        "What we do here is Ponmani rice cultivation. We cultivate Ponmani rice here in a completely organic way.",
    },
    
    {
      title: "Nutmeg cultivation(ജാതിക്ക കൃഷി)",
      image: jathi,
      description:
        "We grow Jathi and produce high-quality spices in a sustainable way.",
    },
    {
      title: "Pepper cultivation(കുരുമുളക് കൃഷി)",
      image: pepper,
      description:
        "Our pepper cultivation uses organic methods for maximum quality.",
    },
    {
      title: "Kutty Mulla(കുട്ടി മുല്ല)",
      image: kuttymulla,
      description:
        "Kutty Mulla is cultivated for its aromatic and medicinal value.",
    },
    {
      title: "Curry leaves(കറിവേപ്പില)",
      image: curryleaves,
      description: "Fresh curry leaves grown organically for culinary use.",
    },
    {
      title: "Cultivation of gourd(കൂവ കൃഷി)",
      image: curryleaves,
      description: "Fresh curry leaves grown organically for culinary use.",
    },
     {
      title: "Sesame cultivation(എള്ള് കൃഷി)",
      image: jathi,
      description:
        "We grow Jathi and produce high-quality spices in a sustainable way.",
    },
    {
      title: "Lemon cultivation(ചെറുനാരങ്ങ കൃഷി)",
      image: pepper,
      description:
        "Our pepper cultivation uses organic methods for maximum quality.",
    },
    {
      title: "Cultivation of chillies(മുളക് കൃഷി)",
      image: kuttymulla,
      description:
        "Kutty Mulla is cultivated for its aromatic and medicinal value.",
    },
    
    // {
    //   title: "Pepper cultivation",
    //   image: "/whatwedo/3.png",
    //   description:
    //     "Another pepper batch using traditional and natural farming.",
    // },
    // {
    //   title: "Kutty Mulla",
    //   image: "/whatwedo/4.png",
    //   description:
    //     "We also grow Kutty Mulla in multiple batches throughout the year.",
    // },
    // {
    //   title: "Herbal Plant",
    //   image: "/whatwedo/4.png",
    //   description:
    //     "Herbs cultivated for use in natural remedies and products.",
    // },
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
    <Container as="section" className="mb-5" aria-labelledby="crops-heading">
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
              Main Harvests from Our Farm
            </motion.h2>
          </motion.section>
        </Col>
      </Row>

      {/* Crops Grid */}
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
<h6>Key Features</h6>
                      <ul>
                        <li>Traditional Cultivation Techniques</li>
                        <li>100% Organic Methods </li>
                        <li>Nutrient-Rich Variety</li>
                        <li>Eco-Friendly Approach</li>
                      </ul>
                  <Link to="/ricecultivation">     <motion.a
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
                        </motion.a></Link> 
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
        <Link to="/mainharvestfromfarm">
          {" "}
          <motion.a
            to=""
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

      {/* <Row className="mt-5">
        <Col className="text-center">
          <Link to="/crops" className="btn btn-success">
            View All Crops →
          </Link>
        </Col>
      </Row> */}
    </Container>
  );
}

export default MostCommonCrops;
