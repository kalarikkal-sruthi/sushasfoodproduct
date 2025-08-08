import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
const services = [
  {
    title: "Rasoi Manthra",
    description: "We grow fresh organic vegetables.",
    image: "/images/organic.jpg",
  },
  {
    title: "Essential products",
    description: "Pure milk and dairy products.",
    image: "/images/dairy.jpg",
  },
  {
    title: "Agri-Tourism",
    description: "Experience rural life up close.",
    image: "/images/tourism.jpg",
  },
   {
    title: "Nyra",
    description: "Experience rural life up close.",
    image: "/images/tourism.jpg",
  }
];

const ValueAddedProducts = () => {
  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="what-we-do-title" className="">
          <Row className="mb-5">
            <Col className="">
              <motion.h1
                id="what-we-do-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                Value Added Products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                Farm activities Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum, error unde! Dolores officia iusto
                obcaecati, sequi laborum ipsum aliquam inventore nam magnam
                doloribus, ullam qui corrupti id est, unde eum.
              </motion.p>
            </Col>
          </Row>

          {/* Two boxes per row layout */}
          <Row className="g-4">
            {services.map((service, index) => (
              <Col
                key={index}
                md={6}
                className={
                  services.length % 2 === 1 && index === services.length - 1
                    ? "mx-auto"
                    : ""
                }
              >
                <Card className="h-100 shadow-sm border-0" style={{background: "radial-gradient(circle,rgba(195, 34, 34, 1) 0%, rgba(253, 187, 45, 1) 100%)"}}>
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
            <Row>
                      <motion.a
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
                        View All Value Added Products →
                      </motion.a>
                    </Row>
        </section>
      </Container>
    </main>
  );
};

export default ValueAddedProducts;
