// import { motion } from "framer-motion";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import root from "../assets/otherfarmcrops/root.webp";
// import spices from "../assets/otherfarmcrops/spices.png";
// import fruits from "../assets/otherfarmcrops/fruits.webp";
// import herbs from "../assets/otherfarmcrops/herbs.jpeg";
// import veg from "../assets/otherfarmcrops/vegetables.jpg";
// import ornamental from "../assets/otherfarmcrops/ornamentalplants.webp";

// function Extraharvestcrops() {
//   const services = [
//     {
//       title: "Tubers (കിഴങ്ങു വർഗ്ഗങ്ങൾ)",
//       image: root,
//       description:
//         "We cultivate organic root vegetables like yam, cassava, and sweet potatoes using sustainable farming methods.",
//     },
//     {
//       title: "Fruits (പഴവർഗ്ഗങ്ങൾ)",
//       image: fruits,
//       description:
//         "We grow seasonal fruits such as mangoes, bananas, papayas, and jackfruit in an eco-friendly way.",
//     },
//     {
//       title: "Vegetables (പച്ചക്കറികൾ)",
//       image: veg,
//       description:
//         "Our fresh vegetables include seasonal greens, cucumbers, and gourds, all grown organically.",
//     },
//     {
//       title: "Herbs (ഔഷധസസ്യങ്ങൾ)",
//       image: herbs,
//       description:
//         "We cultivate medicinal herbs like tulsi, mint, and lemongrass that promote health and wellness.",
//     },
//     {
//       title: "Spices (സുഗന്ധവ്യഞ്ജനങ്ങൾ)",
//       image: spices,
//       description:
//         "Our farm produces traditional spices such as black pepper, cardamom, and turmeric organically.",
//     },
//     {
//       title: "Ornamental & Garden Plants (അലങ്കാര സസ്യങ്ങളും പൂന്തോട്ട ചെടികളും)",
//       image: ornamental,
//       description:
//         "We nurture ornamental, garden, and aquatic plants that enhance beauty and support biodiversity.",
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
//     <main aria-labelledby="extra-harvest-heading">
     

//       <Container className="mt-5">
//         <section>
//           <Row className="mb-3">
//             <Col>
//               <motion.section
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, margin: "-100px" }}
//               >
//                 <motion.h2
//                   variants={scrollVariants}
//                   id="extra-harvest-heading"
//                   className="fw-bold"
//                   style={{ color: "#5caf47" }}
//                 >
//                   Extra Harvest from Our Farm
//                 </motion.h2>
//               </motion.section>
//             </Col>
//           </Row>

//           <Row className="g-5">
//             {services.map((service, index) => (
//               <Col lg={6} key={index}>
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
//                             src={service.image}
//                             alt={`${service.title} - Organic Farm Produce`}
//                             className="object-fit-cover"
//                             style={{
//                               borderRadius: "12px 0 0 12px",
//                               width: "100%",
                             
//                               objectFit: "cover",
//                             }}
//                             loading="lazy"
//                           />
//                         </Col>

//                         <Col md={6} className="d-flex flex-column">
//                           <Card.Body className="p-4 d-flex flex-column">
//                             <Card.Title
//                               style={{ color: "#294085" }}
//                               className="fw-bold fs-4 mb-3"
//                             >
//                               {service.title}
//                             </Card.Title>
//                             <Card.Text className="flex-grow-1 text-muted">
//                               {service.description}
//                             </Card.Text>
//                             <ul>
//                               <li>Chemical-Free Cultivation</li>
//                               <li>Nutrient-Dense & Fresh</li>
//                               <li>Soil-Enriching Practices</li>
//                               <li>Eco-Friendly Pest Management</li>
//                             </ul>
//                             <Link to="/rootcultivation" className="mt-auto">
//                               <motion.span
//                                 whileHover={{
//                                   x: 5,
//                                   transition: { duration: 0.2 },
//                                 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 className="btn btn-outline align-self-start"
//                                 style={{
//                                   borderRadius: "50px",
//                                   fontWeight: "500",
//                                   border: "1px solid #294085",
//                                   backgroundColor: "#294085",
//                                   color: "#fff",
//                                 }}
//                               >
//                                 Learn More →
//                               </motion.span>
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
//               <Link to="/morefromharvest">
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

// export default Extraharvestcrops;


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchExtraHarvestHome } from "../store/extraHarvestSlice";
// import { imgURLMostHarvest } from "../utils/api";
// // import { fetchExtraHarvestHome } from "../store/extraHarvestSlice";

// export default function Extraharvestcrops() {
//   const dispatch = useDispatch();
//   const { home, loading, error } = useSelector((state) => state.extraHarvest);

//   useEffect(() => {
//     dispatch(fetchExtraHarvestHome());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Extra Harvest Crops</h2>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {home.map((item) => (
//           <div key={item.id}>
//             <img
//               src={`${imgURLMostHarvest}${item.image}`}
//               alt={item.name}
//               style={{ width: "150px" }}
//             />
//             {/* <h3>{item.name}</h3> */}
//              <h2 className="category">{item.category}</h2> {/* ✅ Show category */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useNavigate } from "react-router-dom";

// // Import your images
// import root from "../assets/otherfarmcrops/root.webp";
// import spices from "../assets/otherfarmcrops/spices.png";
// import fruits from "../assets/otherfarmcrops/fruits.webp";
// import herbs from "../assets/otherfarmcrops/herbs.jpeg";
// import veg from "../assets/otherfarmcrops/vegetables.jpg";
// import ornamental from "../assets/otherfarmcrops/ornamentalplants.webp";

// const categories = [
//   { name: "Tubers", image: root },
//   { name: "Fruits", image: fruits },
//   { name: "Vegetables", image: veg },
//   { name: "Herbs", image: herbs },
//   { name: "Spices", image: spices },
//   { name: "Ornamental & Garden Plants", image: ornamental },
// ];

// export default function Extraharvestcrops() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2 style={{ color: "#5caf47", marginBottom: "20px" }}>Extra Harvest Crops</h2>
//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             style={{
//               width: "200px",
//               cursor: "pointer",
//               textAlign: "center",
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
//               transition: "transform 0.2s",
//             }}
//             onClick={() =>
//               navigate(`/whatInFarms-Category?category=${encodeURIComponent(cat.name)}`)
//             }
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//           >
//             <img
//               src={cat.image}
//               alt={cat.name}
//               style={{ width: "100%", height: "150px", objectFit: "cover" }}
//             />
//             <h3 style={{ margin: "10px 0", color: "#294085" }}>{cat.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Static images
import root from "../assets/otherfarmcrops/root.webp";
import spices from "../assets/otherfarmcrops/spices.png";
import fruits from "../assets/otherfarmcrops/fruits.webp";
import herbs from "../assets/otherfarmcrops/herbs.jpeg";
import veg from "../assets/otherfarmcrops/vegetables.jpg";
import ornamental from "../assets/otherfarmcrops/ornamentalplants.webp";

// Static categories
const categories = [
  {
    name: "Tubers (കിഴങ്ങു വർഗ്ഗങ്ങൾ)",
    image: root,
    description:
      "We cultivate organic root vegetables like yam, cassava, and sweet potatoes using sustainable farming methods.",
    link: "/whatInFarms-Category?category=Tubers",
  },
  {
    name: "Fruits (പഴവർഗ്ഗങ്ങൾ)",
    image: fruits,
    description:
      "We grow seasonal fruits such as mangoes, bananas, papayas, and jackfruit in an eco-friendly way.",
    link: "/whatInFarms-Category?category=Fruits",
  },
  {
    name: "Vegetables (പച്ചക്കറികൾ)",
    image: veg,
    description:
      "Our fresh vegetables include seasonal greens, cucumbers, and gourds, all grown organically.",
    link: "/whatInFarms-Category?category=Vegetables",
  },
  {
    name: "Herbs (ഔഷധസസ്യങ്ങൾ)",
    image: herbs,
    description:
      "We cultivate medicinal herbs like tulsi, mint, and lemongrass that promote health and wellness.",
    link: "/whatInFarms-Category?category=Herbs",
  },
  {
    name: "Spices (സുഗന്ധവ്യഞ്ജനങ്ങൾ)",
    image: spices,
    description:
      "Our farm produces traditional spices such as black pepper, cardamom, and turmeric organically.",
    link: "/whatInFarms-Category?category=Spices",
  },
  {
    name: "Ornamental & Garden Plants (അലങ്കാര സസ്യങ്ങളും പൂന്തോട്ട ചെടികളും)",
    image: ornamental,
    description:
      "We nurture ornamental, garden, and aquatic plants that enhance beauty and support biodiversity.",
    link: "/whatInFarms-Category?category=Ornamental & Garden Plants",
  },
];

export default function HomeCategories() {
  const navigate = useNavigate();

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
    <main aria-labelledby="extra-harvest-heading">
      <Container className="mt-5">
        <section>
          <Row className="mb-3">
            <Col>
              <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  variants={scrollVariants}
                  id="extra-harvest-heading"
                  className="fw-bold"
                  style={{ color: "#5caf47" }}
                >
                  Extra Harvest from Our Farm
                </motion.h2>
              </motion.section>
            </Col>
          </Row>

          <Row className="g-5">
            {categories.map((cat, index) => (
              <Col lg={6} key={index}>
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
                            src={cat.image}
                            alt={`${cat.name} - Organic Farm Produce`}
                            className="object-fit-cover"
                            style={{
                              borderRadius: "12px 0 0 12px",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                          />
                        </Col>

                        <Col md={6} className="d-flex flex-column">
                          <Card.Body className="p-4 d-flex flex-column">
                            <Card.Title
                              style={{ color: "#294085" }}
                              className="fw-bold fs-4 mb-3"
                            >
                              {cat.name}
                            </Card.Title>
                            <Card.Text className="flex-grow-1 text-muted">
                              {cat.description}
                            </Card.Text>
                            <ul>
                              <li>Chemical-Free Cultivation</li>
                              <li>Nutrient-Dense & Fresh</li>
                              <li>Soil-Enriching Practices</li>
                              <li>Eco-Friendly Pest Management</li>
                            </ul>
                            <Link to={cat.link} className="mt-auto">
                              <motion.span
                                whileHover={{
                                  x: 5,
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-outline align-self-start"
                                style={{
                                  borderRadius: "50px",
                                  fontWeight: "500",
                                  border: "1px solid #294085",
                                  backgroundColor: "#294085",
                                  color: "#fff",
                                }}
                              >
                                Learn More →
                              </motion.span>
                            </Link>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col className="text-center">
              <Link to="/extraharvest">
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

