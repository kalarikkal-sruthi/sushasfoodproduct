import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMostHarvestDetail } from "../../../store/mostHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

export default function Mostcultivateddetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailData, loading, error } = useSelector(
    (state) => state.mostHarvest
  );
  console.log(detailData);
  // const allImages = [{ image: detailData.image }, ...(detailData.images || [])];
  // console.log(allImages);

  useEffect(() => {
    dispatch(fetchMostHarvestDetail(id));
  }, [dispatch, id]);

  // const scrollVariants = {
  //   offscreen: { y: 50, opacity: 0 },
  //   onscreen: {
  //     y: 0,
  //     opacity: 1,
  //     transition: { type: "tween", ease: "easeOut", duration: 0.8 },
  //   },
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!detailData) return <p>No details found.</p>;

  return (
    <main>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <Container className="mt-5">
        <section aria-labelledby="crop-detail-title">
          <Row className="mb-5">
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                {detailData.category}
              </motion.p>
            </Col>
          </Row>

          <Row className="">
            <Col md={6}>
              <motion.img
                key={detailData.id}
                src={`${imgURLMostHarvest}${
                  detailData.image || detailData.images?.[0]?.image
                }`}
                alt={detailData.name}
                className="img-fluid rounded shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
            <Col md={6} className="mb-0">
              <p className="">{detailData.description}</p>

              {/* extra description sections */}
              {detailData.description1 && <p>{detailData.description1}</p>}
              {detailData.description2 && <p>{detailData.description2}</p>}
              {detailData.description3 && <p>{detailData.description3}</p>}
              {detailData.description4 && <p>{detailData.description4}</p>}

              {/* description5 sometimes has HTML (ul/li) */}
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
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
          <Row>
           
              {detailData.images?.map((img, index) =>
                index === detailData.images.length - 1 ? (
                   <Col>
                  <img
                    key={img.id}
                    src={`${imgURLMostHarvest}${img.image}`}
                    alt={detailData.name}
                  />
                  </Col>
                ) : null
              )}
            
          </Row>
          <Row className="align-items-center mt-3">
            <Col md={12}>
              <motion.img
                key={detailData.id}
                src={`${imgURLMostHarvest}${detailData.images?.at(-1)?.image}`}
                style={{ height: "500px", objectFit: "cover", width: "100%" }}
                alt={detailData.name}
                className="img-fluid rounded shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}
