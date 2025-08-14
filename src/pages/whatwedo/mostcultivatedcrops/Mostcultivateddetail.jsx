// import React from "react";
// import { motion } from "framer-motion";
// import { Container, Row, Col } from "react-bootstrap";
// import rice from "../../../assets/whatwedo/ric.webp";
// import { Helmet } from "react-helmet-async";

// const Mostcultivateddetail = () => {
//   const description = `At our farm, Ponmani rice is grown with deep respect for nature and tradition. 
//   We follow purely organic methods, using natural compost, green manure, and bio-fertilizers to enrich the soil. 
//   By avoiding harmful chemicals, we protect not only the crop but also the surrounding ecosystem. 
//   Our sustainable practices—such as crop rotation, water conservation, and traditional planting techniques—
//   help preserve soil fertility and maintain biodiversity. 
//   The result is nutrient-dense, aromatic Ponmani rice that’s as wholesome for your health as it is gentle on the planet.`;

//   const features = [
//     "Traditional Cultivation Techniques",
//     "100% Organic Methods",
//     "Nutrient-Rich Variety",
//     "Eco-Friendly Approach",
//   ];

//   const scrollVariants = {
//     offscreen: { y: 50, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "tween", ease: "easeOut", duration: 0.8 },
//     },
//   };

//   return (
//     <main>
//       <Container className="mt-5 ">
//         <div className="padding-top"></div>
//         <div className="padding-top"></div>
//         <section aria-labelledby="rice-cultivation-title">
//           <Row className="mb-5">
//             <Col>
//               <motion.h1
//                 id="rice-cultivation-title"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//                 className="display-4 fw-bold"
//                 style={{ color: "#294085" }}
//               >
//                 Rice Cultivation
//               </motion.h1>

//               <article>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="lead text-muted mb-4"
//                 >
//                   {description}
//                 </motion.p>
//               </article>
//               <Row>
//                 <Col md={4}>
//                   {" "}
//                   <figure>
//                     <img
//                       src={rice}
//                       alt="Ponmani rice cultivation in organic farmland"
//                       className="w-100 h-50"
//                       loading="lazy"
//                     />
//                     <figcaption className="text-muted mt-2">
//                       Ponmani rice grown organically in our farm fields
//                     </figcaption>
//                   </figure>
//                 </Col>
//                 <Col md={4}>
//                   {" "}
//                   <figure>
//                     <img
//                       src={rice}
//                       alt="Ponmani rice cultivation in organic farmland"
//                       className="w-100 h-50"
//                       loading="lazy"
//                     />
//                     <figcaption className="text-muted mt-2">
//                       Ponmani rice grown organically in our farm fields
//                     </figcaption>
//                   </figure>
//                 </Col>
//                 <Col md={4}>
//                   {" "}
//                   <figure>
//                     <img
//                       src={rice}
//                       alt="Ponmani rice cultivation in organic farmland"
//                       className="w-100 h-50"
//                       loading="lazy"
//                     />
//                     <figcaption className="text-muted mt-2">
//                       Ponmani rice grown organically in our farm fields
//                     </figcaption>
//                   </figure>
//                 </Col>
//               </Row>

//               <section className="mt-3" aria-labelledby="key-features-title">
//                 <Row className="mb-3">
//                   <Col>
//                     <motion.section
//                       initial="offscreen"
//                       whileInView="onscreen"
//                       viewport={{ once: true, margin: "-100px" }}
//                     >
//                       <motion.h2
//                         variants={scrollVariants}
//                         id="extra-harvest-heading"
//                         className="fw-bold"
//                         style={{ color: "#5caf47" }}
//                       >
//                         Key Features
//                       </motion.h2>
//                     </motion.section>
//                   </Col>
//                 </Row>
//                 <ul>
//                   {features.map((feature, idx) => (
//                     <li key={idx}>{feature}</li>
//                   ))}
//                 </ul>
//               </section>
//             </Col>
//           </Row>
//         </section>
//       </Container>
//     </main>
//   );
// };

// export default Mostcultivateddetail;

//// working commented for sruthi style using frmaer
// // pages/Mostcultivateddetail.jsx
// import { useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMostHarvestDetail } from "../../../store/mostHarvestSlice";
// import { imgURLMostHarvest } from "../../../utils/api";

// export default function Mostcultivateddetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { detailData, loading, error } = useSelector((state) => state.mostHarvest);

//   useEffect(() => {
//     console.log(`[Mostcultivateddetail] Fetching detail for ID: ${id}`);
//     dispatch(fetchMostHarvestDetail(id));
//   }, [dispatch, id]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!detailData) return <p>No details found.</p>;

//   return (
//     <section>
//       <div className="padding-top"></div>
//       <div className="padding-top"></div>
//       <h2>{detailData.name}</h2>

//       {/* Main Image */}
//       {detailData.image && (
//         <img
//           src={`${imgURLMostHarvest}${detailData.image}`}
//           alt={detailData.name}
//           width={300}
//         />
//       )}

//       {/* Extra Images */}
//       {detailData.images && detailData.images.length > 0 && (
//         <div className="extra-images">
//           {detailData.images.map((img) => (
//             <img
//               key={img.id}
//               src={`${imgURLMostHarvest}${img.image}`}
//               alt={detailData.name}
//               width={150}
//             />
//           ))}
//         </div>
//       )}

//       {/* Descriptions */}
//       <div className="description">
//         <p>{detailData.description}</p>
//         {detailData.description1 && <p>{detailData.description1}</p>}
//         {detailData.description2 && <p>{detailData.description2}</p>}
//         {detailData.description3 && <p>{detailData.description3}</p>}
//         {detailData.description4 && <p>{detailData.description4}</p>}
//         {detailData.description5 && (
//           <div dangerouslySetInnerHTML={{ __html: detailData.description5 }} />
//         )}
//       </div>

//       {/* Back link */}
//       <Link to="/mostcultivated">⬅ Back to All Crops</Link>
//     </section>
//   );
// }



// pages/Mostcultivateddetail.jsx
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
  const { detailData, loading, error } = useSelector((state) => state.mostHarvest);

  useEffect(() => {
    dispatch(fetchMostHarvestDetail(id));
  }, [dispatch, id]);

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
  if (!detailData) return <p>No details found.</p>;

  return (
    <main>
      <Container className="mt-5">
        <div className="padding-top"></div>
        <div className="padding-top"></div>

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
                className="lead text-muted mb-4"
              >
                {detailData.description}
              </motion.p>

              {/* Images */}
              <Row>
                {detailData.images && detailData.images.length > 0 ? (
                  detailData.images.map((img) => (
                    <Col md={4} key={img.id}>
                      <figure>
                        <img
                          src={`${imgURLMostHarvest}${img.image}`}
                          alt={detailData.name}
                          className="w-100 h-50"
                          loading="lazy"
                        />
                        <figcaption className="text-muted mt-2">
                          {detailData.name} from our farm
                        </figcaption>
                      </figure>
                    </Col>
                  ))
                ) : (
                  detailData.image && (
                    <Col md={4}>
                      <figure>
                        <img
                          src={`${imgURLMostHarvest}${detailData.image}`}
                          alt={detailData.name}
                          className="w-100 h-50"
                          loading="lazy"
                        />
                        <figcaption className="text-muted mt-2">
                          {detailData.name} from our farm
                        </figcaption>
                      </figure>
                    </Col>
                  )
                )}
              </Row>

              {/* Extra Descriptions */}
              {[detailData.description1, detailData.description2, detailData.description3, detailData.description4]
                .filter(Boolean)
                .map((desc, idx) => (
                  <p key={idx} className="mt-3">{desc}</p>
                ))}
              {detailData.description5 && (
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{ __html: detailData.description5 }}
                />
              )}

              {/* Key Features */}
           {/* Key Features Section */}
              <section className="mt-4" aria-labelledby="key-features-title">
                <Row className="mb-3">
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
                  </Col>
                </Row>
                <ul>
                  {[
                    detailData.description,
                    detailData.description1,
                    detailData.description2,
                    detailData.description3,
                    detailData.description4,
                  ]
                    .filter(Boolean)
                    .map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                </ul>
              </section>

              {/* Back link */}
              <div className="mt-4">
                <Link to="/mostcultivated" className="btn btn-secondary">
                  ⬅ Back to All Crops
                </Link>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}
