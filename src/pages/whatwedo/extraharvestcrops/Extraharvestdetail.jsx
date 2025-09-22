import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { fetchExtraHarvestSingle } from "../../../store/extraHarvestSlice";
import { imgURLMostHarvest, whatinfarmsGalleryURL } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";

import { Helmet } from "react-helmet-async";

export default function Extraharvestdetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { single, loading, error } = useSelector((state) => state.extraHarvest);
  console.log(single);

  useEffect(() => {
    if (id) {
      dispatch(fetchExtraHarvestSingle(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!single) return <p>No data found</p>;

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

        <section
          aria-labelledby="crop-detail-title"
          className="crop-detail-section"
        >
          <Row className="mb-3">
            <Col>
              <motion.h1
                id="crop-detail-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold mb-0"
                style={{ color: "#294085" }}
              >
                {single.name}
              </motion.h1>
              <motion.h2
                id="crop-detail-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-5 fw-bold "
                style={{ color: "#294085" }}
              >
             {single.name_mala}
              </motion.h2>

             
            </Col>
            <Breadcrumbs
              items={[
                { label: "Home", path: "/" },
                { label: "Extra Harvest", path: "/extraharvestfromfarm" },
                {
                  label: single.category,
                  path: `/extraharvestfromfarm/${single.category}`,
                },
                {
                  label: single.name,
                  path: `/extraharvestfromfarm/${single.category}`,
                },
              ]}
            />
          </Row>

          <Row>
            <Col md={4}>
              <motion.img
                key={single.id}
                src={`${imgURLMostHarvest}${single.image}`}
                alt={single.name}
                className="img-fluid rounded shadow  mb-2 mb-lg-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={4} className="mb-3">
              {single.images?.[0] && (
                <motion.img
                  src={`${whatinfarmsGalleryURL}${single.images[0].image}`}
                  alt={single.name}
                  className="img-fluid rounded shadow vh-75 "
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </Col>
          </Row>
          <Row className="mt-2 mt-lg-3">
            <Col md={12}>
              <p>{single.description}</p>
              {single.description1 && <p>{single.description1}</p>}
              {single.description2 && <p>{single.description2}</p>}
              {single.description3 && <p>{single.description3}</p>}
              {single.description4 && <p>{single.description4}</p>}
            </Col>
          </Row>
          <Row className="align-items-center "></Row>

          <Row className="">
            <Col md={12}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                id="key-features-title"
                className="fw-bold"
                style={{ color: "#5caf47" }}
              >
                Key Features
              </motion.h2>
              {single.description5 && (
                <div
                  dangerouslySetInnerHTML={{ __html: single.description5 }}
                />
              )}
            </Col>
          </Row>

          <Row className="align-items-center mt-3 mt-lg-1">
            <Col md={12} className="mb-3 mb-lg-1">
              {single.images?.length > 0 && (
                <motion.img
                  src={`${whatinfarmsGalleryURL}${
                    single.images[single.images.length - 1].image
                  }`}
                  alt={single.name}
                  className="img-fluid rounded shadow vh-75"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </Col>
          </Row>
        </section>
      </div>
    </main>
  );
}

