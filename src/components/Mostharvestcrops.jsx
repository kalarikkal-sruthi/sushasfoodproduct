// import { motion } from "framer-motion";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import coconutimage from "../assets/whatwedo/coconut.jpg";
// import rice from "../assets/whatwedo/ric.webp";
// import jathi from "../assets/whatwedo/jathi.jpg";
// import pepper from "../assets/whatwedo/pepper.jpeg";
// import kuttymulla from "../assets/whatwedo/kuttimulla.jpeg";
// import curryleaves from "../assets/whatwedo/curryleaves.jpg";
// import { Link } from "react-router-dom";

// function Mostharvestcrops() {
//   const crops = [
//     {
//       title: "Coconut Cultivation (തെങ്ങ് കൃഷി)",
//       image: coconutimage,
//       alt: "Organic coconut cultivation with 750 coconut trees in Kerala",
//       description:
//         "We cultivate over 750 coconut trees and produce premium value-added coconut products using traditional and sustainable farming methods.",
//       link: "/coconutcultivation",
//     },
//     {
//       title: "Rice Cultivation (നെൽകൃഷി)",
//       image: rice,
//       alt: "Ponmani rice cultivated organically in Kerala paddy fields",
//       description:
//         "Ponmani rice is cultivated organically in our paddy fields, preserving soil health and delivering a nutrient-rich harvest.",
//       link: "/ricecultivation",
//     },
//     {
//       title: "Nutmeg Cultivation (ജാതിക്ക കൃഷി)",
//       image: jathi,
//       alt: "Organic nutmeg farming in Kerala for high-quality spices",
//       description:
//         "We grow organic nutmeg (Jathi) and process it into high-quality spices using eco-friendly practices.",
//       link: "/nutmegcultivation",
//     },
//     {
//       title: "Pepper Cultivation (കുരുമുളക് കൃഷി)",
//       image: pepper,
//       alt: "Organic pepper cultivation in Kerala spice gardens",
//       description:
//         "Kerala’s famous black pepper grown organically for maximum flavor and quality.",
//       link: "/peppercultivation",
//     },
//     {
//       title: "Kutty Mulla (കുട്ടി മുല്ല)",
//       image: kuttymulla,
//       alt: "Kutty Mulla aromatic flower cultivated organically",
//       description:
//         "Cultivated for its aromatic and medicinal value, Kutty Mulla is grown without chemicals or pesticides.",
//       link: "/kuttymullacultivation",
//     },
//     {
//       title: "Curry Leaves (കറിവേപ്പില)",
//       image: curryleaves,
//       alt: "Fresh organic curry leaves from Kerala farm",
//       description:
//         "Fresh, pesticide-free curry leaves grown organically for culinary and medicinal use.",
//       link: "/curryleavescultivation",
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
//     <main>
//       <Container className="mt-5">
//         <section aria-labelledby="most-common-crops">
//           <header>
//             <Row className="mb-3">
//               <Col>
//                 <motion.h2
//                   variants={scrollVariants}
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, margin: "-100px" }}
//                   id="most-common-crops"
//                   className="fw-bold"
//                   style={{ color: "#5caf47" }}
//                 >
//                   Most Harvest From Our Farm
//                 </motion.h2>
//                 <p className="text-muted">
//                   Explore the main crops we grow at Susha's Prakash Organic Farm
//                   in Kerala, using sustainable farming practices that protect
//                   the land and deliver nutrient-rich produce.
//                 </p>
//               </Col>
//             </Row>
//           </header>

//           <Row className="g-5">
//             {crops.map((crop, index) => (
//               <Col lg={6} key={index} as="article">
//                 <motion.div
//                   initial="offscreen"
//                   whileInView="onscreen"
//                   viewport={{ once: true, margin: "-50px" }}
//                   variants={cardVariants}
//                 >
//                   <motion.div whileHover={cardHover} className="h-100">
//                     <Card
//                       className="h-100 border-0 overflow-hidden"
//                       style={{
//                         boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
//                         borderRadius: "12px",
//                       }}
//                     >
//                       <Row className="g-0 h-100">
//                         <Col md={6} className="overflow-hidden">
//                           <Card.Img
//                             src={crop.image}
//                             alt={crop.alt}
//                             className="object-fit-cover"
//                             style={{
//                               borderRadius: "12px 0 0 12px",
//                               width: "100%",

//                               objectFit: "cover",
//                             }}
//                           />
//                         </Col>

//                         <Col md={6} className="d-flex flex-column">
//                           <Card.Body className="p-4 d-flex flex-column">
//                             <Card.Title
//                               style={{ color: "#294085" }}
//                               className="fw-bold fs-4 mb-3"
//                             >
//                               {crop.title}
//                             </Card.Title>
//                             <Card.Text className="flex-grow-1 text-muted">
//                               {crop.description}
//                             </Card.Text>
//                             <h6>Key Features</h6>
//                             <ul>
//                               <li>Traditional Cultivation Techniques</li>
//                               <li>100% Organic Farming</li>
//                               <li>Nutrient-Rich Variety</li>
//                               <li>Eco-Friendly Practices</li>
//                             </ul>

//                             <Link to={crop.link}>
//                               <motion.div
//                                 whileHover={{
//                                   x: 5,
//                                   transition: { duration: 0.2 },
//                                 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="btn btn-outline align-self-start mt-auto"
//                                 style={{
//                                   borderWidth: "2px",
//                                   borderRadius: "50px",
//                                   fontWeight: "500",
//                                   border: "1px solid #294085",
//                                   backgroundColor: "#294085",
//                                   color: "#fff",
//                                 }}
//                               >
//                                 Learn More →
//                               </motion.div>
//                             </Link>
//                           </Card.Body>
//                         </Col>
//                       </Row>
//                     </Card>
//                   </motion.div>
//                 </motion.div>
//               </Col>
//             ))}
//           </Row>

//           <Row>
//             <Col className="text-center">
//               <Link to="/mainharvestfromfarm">
//                 <motion.span
//                   whileHover={{
//                     x: 5,
//                     transition: { duration: 0.2 },
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="btn btn-outline mt-5"
//                   style={{
//                     borderRadius: "50px",
//                     fontWeight: "500",
//                     border: "1px solid #294085",
//                     backgroundColor: "#294085",
//                     color: "#fff",
//                   }}
//                 >
//                   View All →
//                 </motion.span>
//               </Link>
//             </Col>
//           </Row>
//         </section>
//       </Container>
//     </main>
//   );
// }

// export default Mostharvestcrops;

//// just recievde dat from slice, commented for make sruthi style
// // components/MostHarvestcrops.jsx
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchMostHarvestFull } from "../store/mostHarvestSlice"; // ✅ uses homeData now
// import { imgURLMostHarvest } from "../utils/api";

// export default function MostHarvestcrops() {
//   const dispatch = useDispatch();
//   const { homeData, loading, error } = useSelector(
//     (state) => state.mostHarvest
//   );

//   // Fetch when component mounts
//   useEffect(() => {
//     console.log("[MostHarvestcrops] Dispatching fetchMostHarvestFull...");
//     dispatch(fetchMostHarvestFull());
//   }, [dispatch]);

//   // Log whenever homeData changes
//   useEffect(() => {
//     console.log("[MostHarvestcrops] homeData updated:", homeData);
//   }, [homeData]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <section>
//       <h2>Most Harvested Crops</h2>
//       <div className="slider">
//         {homeData && homeData.length > 0 ? (
//           homeData.map((item) => (
//             <div key={item.id} className="card">
//               {/* <img
//                 src={`https://ms.myfezto.com/uploads/${item.image}`}
//                 alt={item.name}
//                 width={200}
//               /> */}
//               <img
//                 src={`${imgURLMostHarvest}${item.image || item.images?.[0]?.image}`}
//                 alt={item.name}
//                 width={200}
//               />

//               <h4>{item.name}</h4>
//               <Link to={`/mostcultivated/${item.id}`}>View Details</Link>
//             </div>
//           ))
//         ) : (
//           <p>No data found.</p>
//         )}
//       </div>
//       <Link to="/mostcultivated">View All</Link>
//     </section>
//   );
// }



// components/MostHarvestcrops.jsx
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
      <Container className="mt-5">
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
                  className="fw-bold"
                  style={{ color: "#5caf47" }}
                >
                  Most Harvest From Our Farm
                </motion.h2>
                <p className="text-muted">
                  Explore the main crops we grow using sustainable farming
                  practices that protect the land and deliver nutrient-rich produce.
                </p>
              </Col>
            </Row>
          </header>

          <Row className="g-5">
            {homeData && homeData.length > 0 ? (
              homeData.map((item) => (
                <Col lg={6} key={item.id} as="article">
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
                        <Row className="g-0 h-100">
                          <Col md={6} className="overflow-hidden">
                            <Card.Img
                              src={`${imgURLMostHarvest}${item.image || item.images?.[0]?.image}`}
                              alt={item.name}
                              className="object-fit-cover"
                              style={{
                                borderRadius: "12px 0 0 12px",
                                width: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Col>

                          <Col md={6} className="d-flex flex-column">
                            <Card.Body className="p-4 d-flex flex-column">
                              <Card.Title
                                style={{ color: "#294085" }}
                                className="fw-bold fs-4 mb-3"
                              >
                                {item.name}
                              </Card.Title>
                              <Card.Text className="flex-grow-1 text-muted">
                                {item.description1?.slice(0,80)}
                              </Card.Text>

                              <h6>Key Features</h6>
                              <ul>
                                <li>Traditional Cultivation Techniques</li>
                                <li>100% Organic Farming</li>
                                <li>Nutrient-Rich Variety</li>
                                
                              </ul>

                              <Link to={`/mostcultivated/${item.id}`}>
                                <motion.div
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                  className="btn btn-outline align-self-start mt-auto"
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
                      </Card>
                    </motion.div>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col><p>No data found.</p></Col>
            )}
          </Row>

          <Row>
            <Col className="text-center">
              <Link to="/mostcultivated">
                <motion.span
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline mt-5"
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
      </Container>
    </main>
  );
}
