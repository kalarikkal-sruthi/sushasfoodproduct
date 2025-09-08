import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { fetchExtraHarvestSingle } from "../../../store/extraHarvestSlice";
import { imgURLMostHarvest ,whatinfarmsGalleryURL} from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";
// import main from "../../../assets/whatwedofarm/1.jpeg";
// import main2 from "../../../assets/whatwedofarm/2.jpeg";

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
  <>
     <div className="padding-top"></div>
      <div className="padding-top"></div>

      <div className="padding-y mt-5">
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
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                {single.name}
              </motion.h1>

              {/* Main description */}
            </Col>
            <Breadcrumbs
              items={[
                { label: "Home", path: "/" },
                { label: "Extra Harvest", path: "/extraharvestfromfarm" },
                { label: single.category, path: `/extraharvestfromfarm/${single.category}` },
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
                className="img-fluid rounded shadow "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <p>{single.description}</p>
              {single.description1 && <p>{single.description1}</p>}
              {single.description2 && <p>{single.description2}</p>}
              {single.description3 && <p>{single.description3}</p>}
              {single.description4 && <p>{single.description4}</p>}
            </Col>
          </Row>
          <Row className="align-items-center ">
            <Col md={4} className="mb-3">
              {single.images?.[0] && (
                <motion.img
                  src={`${whatinfarmsGalleryURL}${single.images[0].image}`}
                  alt={single.name}
                  className="img-fluid rounded shadow vh-75 mt-5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </Col>
          </Row>

          <Row className="mt-5">
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

          <Row className="align-items-center mt-3">
            <Col md={12} className="mb-3">
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
    </>
  );
}

  // <main>
  //     <div className="padding-top"></div>
  //     <div className="padding-top"></div>
  //     <Container className="mt-5">
  //       <section aria-labelledby="crop-detail-title">
  //         <Row className="">
  //           <Col>
  //             <motion.h1
  //               id="crop-detail-title"
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               transition={{ duration: 0.6 }}
  //               className="display-4 fw-bold"
  //               style={{ color: "#294085" }}
  //             >
  //               {single.name}
  //             </motion.h1>

  //             {/* Main description */}
  //             {/* <motion.p
  //               initial={{ opacity: 0 }}
  //               animate={{ opacity: 1 }}
  //               transition={{ delay: 0.3 }}
  //               className="lead text-muted mb-0"
  //             >
  //               {single.category}
  //             </motion.p> */}
  //           </Col>
  //           <Breadcrumbs
  //             items={[
  //               { label: "Home", path: "/" },
  //               { label: "Extra Harvest", path: "/extraharvestfromfarm" },
  //               {
  //                 label: single.category,
  //                 path: `/extraharvestfromfarm/${single.category}`,
  //               },
  //               { label: single.name, path: "" },
  //             ]}
  //           />
  //         </Row>

  //         <Row className="justify-content-center mt-3">
  //           <Col md={4}>
  //             <motion.img
  //               key={single.id}
  //               src={`${imgURLMostHarvest}${
  //                 single.image || single.images?.[0]?.image
  //               }`}
  //               alt={single.name}
  //               className="img-fluid rounded shadow"
  //               initial={{ opacity: 0, scale: 0.95 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               transition={{ duration: 0.5 }}
  //             />
  //           </Col>

  //           <Col md={4}>
  //             <motion.img
  //               key={single.id}
  //               // src={main2}
  //               alt={single.name}
  //               className="img-fluid rounded shadow"
  //               initial={{ opacity: 0, scale: 0.95 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               transition={{ duration: 0.5 }}
  //             />
  //           </Col>
  //           <Col md={4}>
  //             <motion.img
  //               key={single.id}
  //               // src={main2}
  //               alt={single.name}
  //               className="img-fluid rounded shadow"
  //               initial={{ opacity: 0, scale: 0.95 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               transition={{ duration: 0.5 }}
  //             />
  //           </Col>
  //         </Row>

  //         <Row className="align-items-center mt-5">
  //           <Col md={12} className="mb-0">
  //             <p className="">{single.description}</p>

  //             {/* extra description sections */}
  //             {single.description1 && <p>{single.description1}</p>}
  //             {single.description2 && <p>{single.description2}</p>}
  //             {single.description3 && <p>{single.description3}</p>}
  //             {single.description4 && <p>{single.description4}</p>}

  //             {/* description5 sometimes has HTML (ul/li) */}
  //           </Col>
  //         </Row>
  //         <Row className="mt-3">
  //           <Col>
  //             <motion.h2
  //               initial={{ opacity: 0, y: 20 }}
  //               whileInView={{ opacity: 1, y: 0 }}
  //               transition={{ duration: 0.6 }}
  //               id="key-features-title"
  //               className="fw-bold"
  //               style={{ color: "#5caf47" }}
  //             >
  //               Key Features
  //             </motion.h2>
  //             {single.description5 && (
  //               <div
  //                 dangerouslySetInnerHTML={{ __html: single.description5 }}
  //               />
  //             )}
  //           </Col>
  //         </Row>
  //         <Row className="align-items-center mt-3">
  //           <Col md={12}>
  //             <motion.img
  //               key={single.id}
  //               // src={main}
  //               style={{ height: "500px", objectFit: "cover", width: "100%" }}
  //               alt={single.name}
  //               className="img-fluid rounded shadow"
  //               initial={{ opacity: 0, scale: 0.95 }}
  //               animate={{ opacity: 1, scale: 1 }}
  //               transition={{ duration: 0.5 }}
  //             />
  //           </Col>
  //         </Row>
  //       </section>
  //     </Container>
  //   </main>