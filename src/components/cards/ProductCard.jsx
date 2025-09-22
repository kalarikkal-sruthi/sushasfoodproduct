import PropTypes from "prop-types";
import { productURL } from "../../utils/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        style={{}}
        className="product-category-title mb-1"
      >
        {product.product_name}
      </h2>
      <h3
        id={`product-title-${product.id}`}
        style={{}}
        className="product-category-title"
      >
        {product.product_name_mal}
      </h3>
      <p
        className="product-price"
        style={{ fontWeight: "bold", color: "#000" }}
      >
        Price: ₹{product.baseprices?.[0]?.original_price ?? "N/A"}
      </p>

      <motion.span
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        className="btn btn-outline btn-responsive"
        style={{
          borderRadius: "50px",
          fontWeight: "500",
          border: "1px solid #294085",
          backgroundColor: "#294085",
          color: "#fff",
        }}
        aria-label="Add to cart"
      >
        <Link
          to={`/product/${product.product_slug}-${product.id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Shop Now →
        </Link>
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
