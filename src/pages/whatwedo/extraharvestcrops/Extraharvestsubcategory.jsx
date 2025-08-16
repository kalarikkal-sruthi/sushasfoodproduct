
// import { motion } from "framer-motion";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import root from "../../../assets/otherfarmcrops/root.webp";
// import spices from "../../../assets/otherfarmcrops/spices.png";
// import fruits from "../../../assets/otherfarmcrops/fruits.webp";
// import herbs from "../../../assets/otherfarmcrops/herbs.jpeg";
// import veg from "../../../assets/otherfarmcrops/vegetables.jpg";
// import ornamental from "../../../assets/otherfarmcrops/ornamentalplants.webp";

// function Extraharvestsubcategory() {
//   const services = [
//     {
//       title: "Root Vegetables",
//       image: root,
//       description:
//         "We cultivate root vegetables and traditional spices organically using sustainable practices.",
//     },
//     {
//       title: "Spices",
//       image: spices,
//       description:
//         "We cultivate root vegetables and traditional spices organically using sustainable practices.",
//     },
//     {
//       title: "Fruits",
//       image: fruits,
//       description:
//         "Our fruit cultivation includes mangoes, bananas, papayas, and other seasonal produce.",
//     },
//     {
//       title: "Herbs",
//       image: herbs,
//       description:
//         "We grow herbs like tulsi, mint, and lemongrass, known for their medicinal properties.",
//     },
//     {
//       title: "Vegetables",
//       image: veg,
//       description:
//         "Our vegetable garden features seasonal greens and organically grown produce.",
//     },
//     {
//       title: "Ornamental Plants",
//       image: ornamental,
//       description:
//         "We nurture ornamental plants that beautify spaces and support biodiversity.",
//     },
//   ];

//   const cardVariants = {
//     offscreen: { y: 50, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", bounce: 0.2, duration: 0.8 },
//     },
//   };

//   const cardHover = {
//     y: -5,
//     boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
//     transition: { duration: 0.3, ease: "easeOut" },
//   };

//   const scrollVariants = {
//     offscreen: { y: 50, opacity: 0 },
//     onscreen: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "tween", ease: "easeOut", duration: 0.8 },
//     },
//   };

//   return (
//       <main>
//       <Container as="section" className="mt-5 " aria-labelledby="Extra Harvest From Farm">
//         <div className="padding-top"></div>
//         <div className="padding-top"></div>
//         <section>
//            <Row className="mb-5">
//             <Col>
//               <motion.section
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, margin: "-100px" }}
//               >
//                 <motion.h1
//                   variants={scrollVariants}
//                   id="crops-heading"
//                   className="fw-bold"
//                   style={{ color: "#294085" }}
//                 >
//                  Root Vegetables
//                 </motion.h1>
//               </motion.section>
//             </Col>
//           </Row>
         

//       <Row className="g-5">
//         {services.map((service, index) => (
//           <Col lg={6} key={index} as="article">
//             <motion.div
//               initial="offscreen"
//               whileInView="onscreen"
//               viewport={{ once: true, margin: "-50px" }}
//               variants={cardVariants}
//             >
//               <motion.div whileHover={cardHover} className="h-100">
//                 <Card
//                   className="h-100 border-0 overflow-hidden"
//                   style={{
//                     boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
//                     borderRadius: "12px",
//                   }}
//                 >
//                   <Row className="g-0 h-100">
//                     <Col md={6} className="overflow-hidden">
//                       <motion.div className="h-100 w-100">
//                         <Card.Img
//                           src={service.image}
//                           alt={`${service.title} - Organic farm produce`}
//                           className="object-fit-cover"
//                           loading="lazy"
//                           style={{
//                             borderRadius: "12px 0 0 12px",
//                             width: "100%",
//                             height: "300px",
//                             objectFit: "cover",
//                           }}
//                         />
//                       </motion.div>
//                     </Col>

//                     <Col md={6} className="d-flex flex-column">
//                       <Card.Body className="p-4 d-flex flex-column">
//                         <Card.Title
//                           style={{ color: "#294085" }}
//                           className="fw-bold fs-4 mb-3"
//                           as="h3"
//                         >
//                           {service.title}
//                         </Card.Title>
//                         <Card.Text className="flex-grow-1 text-muted">
//                           {service.description}
//                         </Card.Text>
//                         <motion.div
//                           whileHover={{ x: 5, transition: { duration: 0.2 } }}
//                           whileTap={{ scale: 0.98 }}
//                           className="mt-auto"
//                         >
//                           <Link
//                             to="/rootcultivation"
//                             className="btn btn-outline align-self-start"
//                             style={{
//                               borderWidth: "2px",
//                               borderRadius: "50px",
//                               fontWeight: "500",
//                               border: "1px solid #294085",
//                               backgroundColor: "#294085",
//                               color: "#fff",
//                             }}
//                           >
//                             Learn More →
//                           </Link>
//                         </motion.div>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//       </section>
//     </Container>
//     </main>
//   );
// }

// export default Extraharvestsubcategory;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { fetchExtraHarvestByCategory } from "../../../store/extraHarvestSlice";
import { imgURLMostHarvest } from "../../../utils/api";
import Breadcrumbs from "../../../components/Breadcrumbs";
// import { fetchExtraHarvestByCategory } from "../store/extraHarvestSlice";

function Extraharvestsubcategory() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { category: categoryData, loading, error } = useSelector(
    (state) => state.extraHarvest
  );

  useEffect(() => {
    if (category) {
      dispatch(fetchExtraHarvestByCategory(category));
    }
  }, [category, dispatch]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Spinner animation="border" />
      </div>
    );

  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <main>
         <div className="padding-top"></div>
        <div className="padding-top"></div>
      <Container className="mt-5">
     
             <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Extra Harvest", path: "/extraharvest" },
          { label: category, path: `/extraharvest/category/${category}` },
        ]}
      />
        <Row className="mb-5">
          <Col>
            <h2 className="fw-bold" style={{ color: "#294085" }}>
              {category}
            </h2>
          </Col>
        </Row>

        <Row className="g-4">
          {categoryData?.map((item) => (
            <Col md={4} key={item.id}>
              <motion.div whileHover={{ y: -5 }}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{ borderRadius: "12px" }}
                >
                  <Card.Img
                    variant="top"
                    // src={item.image}
                     src={`${imgURLMostHarvest}${item.image || item.images?.[0]?.image}`}
                    alt={item.name}
                    style={{
                      height: "200px",
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
                      <Link
                        to={`/extraharvest/detail/${item.id}`}
                        className="btn btn-outline"
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
                      </Link>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}

export default Extraharvestsubcategory;
