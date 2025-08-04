import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddToCartButton from "../buttons/AddToCartButton";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="product-collection-image">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h2>Price : {product.price}</h2>
      {/* <button className="btn" onClick={() => setOpen(true)}>
        Shop Now
      </button> */}
      <AddToCartButton onClick={() => console.log("Added to cart")} />

      {open && (
        <>
          <div className="modal-overlay" onClick={() => setOpen(false)} />
          <div className="modal-box">
            <div className="modal-header">
              <h2>{product.title}</h2>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>

            {product.description && <p>{product.description}</p>}

            {product.video && (
              <video className="video" loop muted controls>
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* <button  style={{ background: "#6eb449", color: "#fff" }}>
              Add To Cart
            </button> */}
          </div>
        </>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};
