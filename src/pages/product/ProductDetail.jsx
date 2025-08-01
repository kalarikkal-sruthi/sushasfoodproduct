////working left and right side commented fo r seperate left and right pages
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
// import { imgURL } from "../../utils/api";
// import { fetchProductById } from "../../store/ProductSlice";
// import AddToCartButton from "../../components/buttons/AddToCartButton";

// function ProductDetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.product);

//   useEffect(() => {
//     dispatch(fetchProductById(id));
//   }, [dispatch, id]);

//   if (loading) return <Spinner animation="border" variant="primary" className="m-4" />;
//   if (error) return <Alert variant="danger">Error: {error}</Alert>;
//   if (!data || !data.product) return <Alert variant="warning">No product data available.</Alert>;

//   const product = data.product;
//   const imageUrl = product.image ? imgURL + product.image : "/placeholder.jpg";

//   return (
//     <>
//     <div className="padding-top"></div>

//     <Container className="my-5">
//       <Row className="align-items-start">
//         {/* Left Column – Image */}
//         <Col md={6} className="text-center mb-4">
//           <img
//             // src={imageUrl}
//             src={`${imgURL}${product.image}`}
//             alt={product.product_name}
//             onError={(e) => (e.target.src = "/collections/2.png")}
//             style={{
//               width: "100%",
//               maxWidth: "400px",
//               height: "auto",
//               borderRadius: "8px",
//               objectFit: "cover",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
//             }}
//           />
//         </Col>

//         {/* Right Column – Details */}
//         <Col md={6}>
//           <h2 style={{ marginBottom: "1rem" }}>{product.product_name}</h2>
//           <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
//             {product.description}
//           </p>
//             {/* Pricing */}
//           <div className="my-3">
//             {product.baseprices?.[0] && (
//               <>
//                 <h4 className="text-success">₹ {product.baseprices[0].offer_price}</h4>
//                 <del>₹ {product.baseprices[0].original_price}</del>
//               </>
//             )}
//           </div>
//            {/* Size Options */}
//           <div className="my-3">
//             <strong>Available Sizes:</strong>
//             <div className="d-flex gap-2 mt-2">
//               {product.sizes?.map((size) => (
//                 <button key={size.id} className="btn btn-outline-success btn-sm">
//                   {size.size}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <AddToCartButton/>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   );
// }

// export default ProductDetail;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import ProductDetailGallery from "./ProductDetailGallery";
import ProductDetailSummary from "./ProductDetailSummary";
import { fetchProductById } from "../../store/ProductSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading)
    return <Spinner animation="border" variant="primary" className="m-4" />;
  if (error) return <Alert variant="danger">Error: {error}</Alert>;
  if (!data || !data.product)
    return <Alert variant="warning">No product data available.</Alert>;

  const product = data.product;

  return (
    <>
      <div className="padding-top"></div>
      <Container className="my-5">
        <Row className="align-items-start">
          <Col md={6}>
            <ProductDetailGallery product={product} />
          </Col>
          <Col md={6}>
            <ProductDetailSummary product={product} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
