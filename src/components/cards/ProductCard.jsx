import PropTypes from "prop-types";
import { productURL } from "../../utils/api";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <article
      className=" p-3"
      aria-labelledby={`product-title-${product.id}`}
      style={{
        borderRadius: "10px",

        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={`${productURL}${product.image}`}
        alt={product.product_name || "Product image"}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      <h2
        id={`product-title-${product.id}`}
        style={{ fontSize: "1.5rem", marginTop: "0.8rem" }}
      >
        {product.product_name}
      </h2>
      <p style={{ fontWeight: "bold", color: "#294085" }}>
        Price: ₹{product.baseprices?.[0]?.original_price ?? "N/A"}
      </p>

      <motion.span
        whileHover={{
          x: 5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        className="btn btn-outline "
        style={{
          borderRadius: "50px",
          fontWeight: "500",
          border: "1px solid #294085",
          backgroundColor: "#294085",
          color: "#fff",
        }}
        aria-label="Add to cart"
      >
        Shop Now →
      </motion.span>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    product_name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    baseprices: PropTypes.array,
    description: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};
