import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { fetchExtraHarvestByCategory } from "../../../store/extraHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Helmet } from "react-helmet-async";

function Extraharvestsubcategory() {
  const { category } = useParams();

  const dispatch = useDispatch();
  const {
    category: categoryData,
    loading,
    error,
  } = useSelector((state) => state.extraHarvest);

  useEffect(() => {
    if (category) {
      dispatch(fetchExtraHarvestByCategory(category));
    }
  }, [category, dispatch]);
  console.log(categoryData);
  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Spinner animation="border" />
      </div>
    );

  if (error) return <p className="text-danger text-center">{error}</p>;
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
        <div className="padding-top d-lg-block d-none"></div>
        <div className="padding-top"></div>

        <Row className="mb-0">
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
                {category}
              </motion.h1>
            </motion.section>
          </Col>
        </Row>

        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Extra Harvest", path: "/extraharvestfromfarm" },
            {
              label: category,
              path: `/extraharvestfromfarm/detail/${category}`,
            },
          ]}
        />

        <Row className="g-3  g-lg-5 mt-3">
          {categoryData?.map((item) => (
            <Col md={4} xs={6} key={item.id}>
              <motion.div whileHover={{ y: -5 }}>
                <Link
                  to={`/extraharvestfromfarm/detail/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{ borderRadius: "12px", cursor: "pointer" }}
                  >
                    <Card.Img
                      variant="top"
                      src={`${imgURLMostHarvest}${
                        item.image || item.images?.[0]?.image
                      }`}
                      alt={item.name}
                      style={{
                        objectFit: "cover",
                        borderRadius: "12px 12px 0 0",
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        className="fw-bold"
                        style={{ color: "#294085" }}
                      >
                        {item.name}
                      </Card.Title>

                      <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-3"
                      >
                        <span
                          className="btn btn-outline btn-responsive"
                          style={{
                            borderWidth: "2px",
                            borderRadius: "50px",
                            fontWeight: "500",
                            border: "1px solid #294085",
                            backgroundColor: "#294085",
                            color: "#fff",
                          }}
                        >
                          View Details →
                        </span>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
}

export default Extraharvestsubcategory;
