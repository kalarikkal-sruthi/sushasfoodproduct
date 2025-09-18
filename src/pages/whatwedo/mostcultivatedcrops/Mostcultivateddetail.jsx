import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMostHarvestDetail } from "../../../store/mostHarvestSlice";
import { whatinfarmsURL, whatinfarmsGalleryURL } from "../../../utils/api";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { Helmet } from "react-helmet-async";

export default function Mostcultivateddetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailData, loading, error } = useSelector(
    (state) => state.mostHarvest
  );

  console.log("[Mostcultivateddetail] detailData =>", detailData);

  useEffect(() => {
    dispatch(fetchMostHarvestDetail(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!detailData) return <p>No details found.</p>;

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
      <div className="padding-top  d-lg-block d=none"></div>
      <div className="padding-top"></div>

      <div className="padding-y mt-3 mt-lg-5">
        <section
          aria-labelledby="crop-detail-title"
          className="crop-detail-section"
        >
          <Row className="mb-3 mb-lg-1">
            <Col>
              <motion.h1
                id="crop-detail-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                {detailData.name}
              </motion.h1>

              {/* Main description */}
            </Col>
            <Breadcrumbs
              className="mb-lg-2 mb-0"
              items={[
                { label: "Home", path: "/" },
                { label: "Most Harvest", path: "/mostharvestfromfarm" },
                {
                  label: detailData.name,
                  path: `/mostharvestfromfarm/${detailData.category}`,
                },
              ]}
            />
          </Row>

          <Row>
            <Col md={4}>
              <motion.img
                key={detailData.id}
                src={`${whatinfarmsURL}${detailData.image}`}
                alt={detailData.name}
                className="img-fluid rounded shadow  mb-2 mb-lg-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={4} className="">
              {detailData.images?.[0] && (
                <motion.img
                  src={`${whatinfarmsGalleryURL}${detailData.images[0].image}`}
                  alt={detailData.name}
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
              <p>{detailData.description}</p>
              {detailData.description1 && <p>{detailData.description1}</p>}
              {detailData.description2 && <p>{detailData.description2}</p>}
              {detailData.description3 && <p>{detailData.description3}</p>}
              {detailData.description4 && <p>{detailData.description4}</p>}
            </Col>
          </Row>

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
              {detailData.description5 && (
                <div
                  dangerouslySetInnerHTML={{ __html: detailData.description5 }}
                />
              )}
            </Col>
          </Row>

          <Row className="align-items-center mt-3 mt-lg-1">
            <Col md={12} className="mb-3 mb-lg-1">
              {detailData.images?.length > 0 && (
                <motion.img
                  src={`${whatinfarmsGalleryURL}${
                    detailData.images[detailData.images.length - 1].image
                  }`}
                  alt={detailData.name}
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
