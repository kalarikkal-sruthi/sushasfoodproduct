import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { fetchMostHarvestFull } from "../store/mostHarvestSlice";
import { imgURLMostHarvest } from "../utils/api";
// import { fetchMostHarvestHome } from "../store/mostHarvestSlice";
// import { imgURLMostHarvest } from "../utils/api";

export default function MostHarvestcrops() {
  const dispatch = useDispatch();
  const { homeData } = useSelector((state) => state.mostHarvest);
  console.log(homeData);

  useEffect(() => {
    console.log("[MostHarvestcrops] Dispatching fetchMostHarvestHome...");
    dispatch(fetchMostHarvestFull());
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

  return (
    <main>
      <div className="padding-y  mt-3 mt-lg-5">
        <section aria-labelledby="most-common-crops">
          <header>
            <Row className="mb-3">
              <Col>
                <motion.h2
                  variants={scrollVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, margin: "-100px" }}
                  id="most-common-crops"
                  className="fw-bold "
                  style={{ color: "#5caf47" }}
                >
                  Best Yields of the Season
                </motion.h2>
                <p className="text-muted">
                  Explore the main crops we grow using sustainable farming
                  practices that protect the land and deliver nutrient-rich
                  produce.
                </p>
              </Col>
            </Row>
          </header>

          <Row className="g-3 g-lg-5">
            {homeData && homeData.length > 0 ? (
              homeData.slice(0, 4).map((item) => (
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
                                src={`${imgURLMostHarvest}${
                                  item.image || item.images?.[0]?.image
                                }`}
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
                                    {item.name}
                                  </Card.Title>
                                </Link>
                                <Card.Text className=" text-muted">
                                  {item.description?.slice(0, 200)}...
                                </Card.Text>

                                {/* <h6 className="key-faeture">Key Features</h6>

                              <div className="keyfeature-description"
                                dangerouslySetInnerHTML={{
                                  __html: item.description5,
                                }}
                              ></div> */}

                                <Link to={`/mostharvestfromfarm/${item.id}`}>
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

          <Row>
            <Col className="text-center">
              <Link to="/mostharvestfromfarm">
                <motion.span
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline mt-3 mt-lg-5 "
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
