// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";

// const imgURL = "https://ms.my.com/uploads/";

// const CategoryProductList = () => {
//   const dispatch = useDispatch();

//   const { data: categoriesWithProducts, loading, error } = useSelector(
//     (state) => state.categoryProducts
//   );

//   useEffect(() => {
//     dispatch(fetchCategoriesWithProducts());
//   }, [dispatch]);

//   return (
//     <>
//       <div className="padding-top"></div>
//       <div className="container my-5">
//         <h2 className="text-center mb-4">All Categories & Products</h2>

//         {loading && <p>Loading...</p>}
//         {error && <p className="text-danger">Error: {error}</p>}

//         {categoriesWithProducts.map((cat) => (
//           <div key={cat.id} className="mb-5">
//             <h4>
//               <Link to={`/productsbycategory/${cat.id}`} className="text-decoration-none">
//                 {cat.name}
//               </Link>
//             </h4>

//             <div className="row">
//               {cat.products && cat.products.length > 0 ? (
//                 cat.products.map((product) => (
//                   <div key={product.id} className="col-md-4 mb-3">
//                     <div className="card h-100 shadow-sm">
//                       <img
//                         src={imgURL + product.image}
//                         alt={product.product_name}
//                         className="card-img-top"
//                         style={{ height: "200px", objectFit: "cover" }}
//                       />
//                       <div className="card-body">
//                         <h5 className="card-title">{product.product_name}</h5>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-muted">No products in this category.</p>
//               )}
//             </div>
//              {/* ✅ View All Button */}
//     <div className="text-end">
//       <Link to={`/productsbycategory/${cat.id}`} className="btn btn-outline-primary btn-sm">
//         View All
//       </Link>
//     </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CategoryProductList;


// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";
// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import ProductCard from "../../components/cards/ProductCard";

// const CategoryProductList = () => {
//   const dispatch = useDispatch();
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-10% 0px" });

//   const { data: categories, loading, error } = useSelector(
//     (state) => state.categoryProducts
//   );

//   useEffect(() => {
//     dispatch(fetchCategoriesWithProducts());
//   }, [dispatch]);

//   if (loading) return <p className="text-center my-5">Loading...</p>;
//   if (error) return <p className="text-danger text-center">Error: {error}</p>;

//   return (
//     <div>
//       <div className="padding-top"></div>
//       <div className="padding-top"></div>
//       <section className="padding-horizontal">
//         {categories.map((cat) => (
//           <div key={cat.id} className="mb-5">
//             <section className="header-bar">
//               <Row>
//                 <Col xs={6} md={6} className="heading-main-div mt-4">
//                   <div className="heading-main mt-4">
//                     <Link
//                       to={`/productsbycategory/${cat.id}`}
//                       style={{ textDecoration: "none", color: "inherit" }}
//                     >
//                       <motion.h1
//                           ref={ref}
//                           initial={{ opacity: 0, y: 100 }}
//                           animate={inView ? { opacity: 1, y: 0 } : {}}
//                           transition={{ duration: 0.7 }}
//                           className="scroll-section"
//                       style={{
//                           position: "sticky",
//                           top: "30vh",
//                           textAlign: "center",
//                           zIndex: 2,
//                           margin: 0,
//                           backgroundColor: "#f0f0f0", // 🔹 temporary background
//                           color: "#333", // make sure text is visible
//                           border: "1px dashed red", // 🔹 debugging border
//                         }}
//                         >
//                           Category: {cat.name ?? "Sample Title"}
//                         </motion.h1>

//                     </Link>
//                   </div>
//                 </Col>
//                 <Col
//                   xs={6}
//                   md={6}
//                   className="view-all-buttom-main d-flex align-items-center justify-content-end"
//                 >
//                   <div className="view-all-button mt-4">
//                     <Link to={`/productsbycategory/${cat.id}`}>
//                       <button className="btn btn-outline-primary btn-sm">
//                         View All
//                       </button>
//                     </Link>
//                   </div>
//                 </Col>
//               </Row>
//             </section>

//             <section>
//               <Row>
//                 {cat.products?.slice(0, 4).map((product) => (
//                   <Col xs={6} md={3} key={product.id}>
//                     <ProductCard
//                       product={{
//                         ...product,
//                         price: product.price ?? product.selling_price ?? "N/A",
//                       }}
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </section>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default CategoryProductList;





import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../../components/cards/ProductCard";

const CategoryProductList = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const { data: categories, loading, error } = useSelector(
    (state) => state.categoryProducts
  );

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <div>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        {categories.map((cat) => (
          <div key={cat.id} className="mb-5">
            <section className="header-bar">
              <Row>
                <Col xs={6} md={6} className="heading-main-div mt-4">
                  <div className="heading-main mt-4">
                    <Link
                      to={`/productsbycategory/${cat.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <motion.h1
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="scroll-section"
                        style={{
                          position: "sticky",
                          top: "30vh",
                          textAlign: "center",
                          zIndex: 2,
                          margin: 0,
                        }}
                      >
                        Category: {cat.name ?? "Sample Title"}
                      </motion.h1>
                    </Link>
                  </div>
                </Col>
                <Col
                  xs={6}
                  md={6}
                  className="view-all-buttom-main d-flex align-items-center justify-content-end"
                >
                  <div className="view-all-button mt-4">
                    <Link to={`/productsbycategory/${cat.id}`}>
                      <button className="btn btn-outline-primary btn-sm">
                        View All
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </section>

            <section>
              <Row>
                {cat.products?.slice(0, 4).map((product) => (
                  <Col xs={6} md={3} key={product.id}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ProductCard
                        product={{
                          ...product,
                          price:
                            product.price ??
                            product.selling_price ??
                            "N/A",
                        }}
                      />
                    </Link>
                  </Col>
                ))}
              </Row>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CategoryProductList;
