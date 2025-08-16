// import React from "react";
// import { motion } from "framer-motion";
// import { Container, Row, Col } from "react-bootstrap";
// import rice from "../../../assets/whatwedo/ric.webp";
// import { Helmet } from "react-helmet-async";

// const Extraharvestdetail = () => {
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
//                 Tapioca Cultivation
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

// export default Extraharvestdetail;




// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { fetchExtraHarvestSingle } from "../../../store/extraHarvestSlice";
// import { imgURLMostHarvest } from "../../../utils/api";


// function Extraharvestdetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { single, loading, error } = useSelector((state) => state.extraHarvest);

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchExtraHarvestSingle(id));
//     }
//   }, [id, dispatch]);

//   if (loading)
//     return (
//       <div className="d-flex justify-content-center align-items-center p-5">
//         <Spinner animation="border" />
//       </div>
//     );

//   if (error) return <p className="text-danger text-center">{error}</p>;
//   if (!single) return <p className="text-center">No details found</p>;

//   return (
//     <main>
//       <Container className="mt-5">
//         <Row className="mb-5">
          
//           <Col>
//             <h2 className="fw-bold" style={{ color: "#294085" }}>
//               {single.name}
//             </h2>
//           </Col>
//         </Row>

//         <Row>
//           <Col md={6}>
//             <motion.img
//               // src={single.image}
//               src={`${imgURLMostHarvest}${single.image || single.images?.[0]?.image}`}
//               alt={single.name}
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "400px", objectFit: "cover" }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             />
//           </Col>

//           <Col md={6}>
//             <Card className="border-0 shadow-sm p-4">
//               <Card.Body>
//                 <Card.Title
//                   className="fw-bold mb-3"
//                   style={{ color: "#294085" }}
//                 >
//                   {single.name}
//                 </Card.Title>
//                 <Card.Text className="text-muted">
//                   {single.description}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </main>
//   );
// }

// export default Extraharvestdetail;



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";

// import { fetchExtraHarvestSingle } from "../../store/extraHarvestSlice";
// import { imgURLMostHarvest } from "../../utils/api";
// import Breadcrumbs from "../../components/Breadcrumbs";
import { fetchExtraHarvestSingle } from "../../../store/extraHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function Extraharvestdetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { single, loading, error } = useSelector(
    (state) => state.extraHarvest
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchExtraHarvestSingle(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!single) return <p>No data found</p>;

  return (
 <main>
 <div className="padding-top"></div>
 
    <Container className="py-4 mt-5">
 
     <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Extra Harvest", path: "/extraharvest" },
          { label: single.category, path: `/extraharvest/${single.category}` },
          { label: single.name, path: "" },
        ]}
      />

      <Row className="align-items-center">
        <Col md={6}>
          <motion.img
            key={single.id}
            src={`${imgURLMostHarvest}${single.image || single.images?.[0]?.image}`}
            alt={single.name}
            className="img-fluid rounded shadow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Col>

        <Col md={6}>
          <h2 className="fw-bold mb-3">{single.name}</h2>
          <p className="text-muted">{single.category}</p>
          <p>{single.description}</p>

          {/* extra description sections */}
          {single.description1 && <p>{single.description1}</p>}
          {single.description2 && <p>{single.description2}</p>}
          {single.description3 && <p>{single.description3}</p>}
          {single.description4 && <p>{single.description4}</p>}

          {/* description5 sometimes has HTML (ul/li) */}
          {single.description5 && (
            <div
              dangerouslySetInnerHTML={{ __html: single.description5 }}
            />
          )}
        </Col>
      </Row>
    </Container>
     </main>
  
  );
}
