import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { fetchMostHarvestViewAll } from "../../../store/mostHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Helmet } from "react-helmet-async";

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
        aria-labelledby="crops-heading"
      >
        <div className="padding-top d-lg-block d=none"></div>
        <div className="padding-top"></div>

        <section>
          <Row className="mb-3 mb-lg-1">
            <Col>
              <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h1
                  variants={scrollVariants}
                  id="crops-heading"
                  className="fw-bold dispaly-6 display-lg-1"
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

          <Row className="g-3 g-lg-5">
            {allData && allData.length > 0 ? (
              allData.map((item) => (
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
                              <Card.Body className="p-2 p-lg-4 d-flex flex-column justify-content-center">
                                <Link
                                  to={`/mostharvestfromfarm/${item.id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  <Card.Title
                                    style={{ color: "#294085" }}
                                    className="fw-bold fs-lg-2  fs-4 mb-1 mb-lg-3"
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
        </section>
      </div>
    </main>
  );
}
