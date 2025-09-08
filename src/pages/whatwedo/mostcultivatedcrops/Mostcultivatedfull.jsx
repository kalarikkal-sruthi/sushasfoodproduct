import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { fetchMostHarvestViewAll } from "../../../store/mostHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function Mostcultivatedfull() {
  const dispatch = useDispatch();
  const { allData, loading, error } = useSelector((state) => state.mostHarvest);

  useEffect(() => {
    console.log("[Mostcultivatedfull] Dispatching fetchMostHarvestViewAll...");
    dispatch(fetchMostHarvestViewAll());
  }, [dispatch]);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <div
        className="padding-y mt-5"
        as="section"
        aria-labelledby="crops-heading"
      >
        <div className="padding-top"></div>
        <div className="padding-top"></div>

        <section>
          <Row className="mb-3">
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
                  Most Cultivated Organic Crops on Our Farm
                </motion.h1>
              </motion.section>
              <Breadcrumbs
                            items={[
                              { label: "Home", path: "/" },
                              { label: "Most Harvest", path: "/mostharvestfromfarm" },
                             
                            ]}
                          />
            </Col>
          </Row>

          <Row className="g-5">
            {allData && allData.length > 0 ? (
              allData.map((item) => (
                <Col lg={6} key={item.id} as="article">
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                  >
                    <motion.div whileHover={cardHover} className="h-100">
                      <Link
                        to={`/mostharvestfromfarm/${item.id}`}
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
                              <motion.figure className="h-100 w-100 m-0">
                                <Card.Img
                                  src={`${imgURLMostHarvest}${
                                    item.image || item.images?.[0]?.image
                                  }`}
                                  alt={`${item.name} - Organic cultivation`}
                                  style={{
                                    borderRadius: "12px 0 0 12px",
                                    width: "100%",
                                      height:"100%",
                                    objectFit: "cover",
                                  }}
                                  loading="lazy"
                                />
                                <figcaption className="visually-hidden">
                                  {item.description}
                                </figcaption>
                              </motion.figure>
                            </Col>

                            <Col md={6} className="d-flex flex-column">
                              <Card.Body className="p-4 d-flex flex-column justify-content-center">
                                <h3
                                  style={{ color: "#294085" }}
                                  className="fw-bold fs-2 mb-3"
                                >
                                  {item.name}
                                </h3>
                                <p className=" text-muted">
                                   {item.description?.slice(0,200)}...
                                </p>
                            {/* <h6 className="key-faeture">Key Features</h6>
                                <ul
                                  dangerouslySetInnerHTML={{
                                    __html: item.description5,
                                  }}
                                ></ul> */}
                                <motion.div
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <Link
                                    to={`/mostharvestfromfarm/${item.id}`}
                                    className="btn btn-outline align-self-start mt-auto"
                                    style={{
                                      borderWidth: "2px",
                                      borderRadius: "50px",
                                      fontWeight: "500",
                                      border: "1px solid #294085",
                                      backgroundColor: "#294085",
                                      color: "#fff",
                                      textDecoration: "none",
                                    }}
                                  >
                                    Learn More →
                                  </Link>
                                </motion.div>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Link>
                    </motion.div>
                  </motion.div>
                </Col>
              ))
            ) : (
              <p>No data found.</p>
            )}
          </Row>
        </section>
      </div>
    </main>
  );
}
