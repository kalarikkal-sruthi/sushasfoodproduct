import React from "react";
// import { imgURL } from "../utils/api";
import { Image } from "react-bootstrap";
import { imgURL } from "../../utils/api";

const ProductDetailGallery = ({ product }) => {
  // const imageUrl = product.image ? imgURL + product.image : "/collections/2.png";

  return (
    <>
      {/* <div className="padding-top"></div> */}
      <div className="text-center mb-4">
        {/* Image shown this way on instruction */}
        {/* src={imageUrl} */}
        <img
          src={`${imgURL}${product.product_image}`}
          alt={product.product_name}
          onError={(e) => (e.target.src = "/collections/2.png")}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "8px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
    </>
  );
};

export default ProductDetailGallery;
