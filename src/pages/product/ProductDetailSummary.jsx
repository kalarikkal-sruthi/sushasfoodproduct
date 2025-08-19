import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { productURL } from "../../utils/api";
import { motion } from "framer-motion";
import { Toast, ToastContainer } from "react-bootstrap";


const ProductDetailSummary = ({ product }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);

  const handleAddToCart = useCallback(() => {
    if (!selectedSize) return;

    dispatch(
      addToCart({
        id: product.id,
        product_name: product.product_name,
        price: product.baseprices?.[0]?.original_price || 0,
        image: product.image,
        size: selectedSize.size,
        sizeId: selectedSize.id,
        quantity: 1,
      })
    );
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [dispatch, product, selectedSize, setShow]);

  return (
    <section aria-label="Product Details" itemScope>
      <header className="mb-3" aria-labelledby="category-heading">
        <h1
          id="category-heading"
          className="display-8 fw-bold"
          style={{ color: "#294085" }}
        >
          {product.product_name}
        </h1>
      </header>
      {product.description && (
        <p
          className="product-description"
          style={{ fontSize: "1.1rem", color: "#555" }}
          itemProp="description"
        >
          {product.description}
        </p>
      )}
      {product.baseprices?.[0] && (
        <div
          className="my-4"
          aria-label="Product price"
          itemProp="offers"
          itemScope
        >
          <meta itemProp="priceCurrency" content="INR" />
          <span
            className="product-price"
            itemProp="price"
            content={String(product.baseprices[0].original_price)}
          >
            <strong>Price : </strong>₹ {product.baseprices[0].original_price}
          </span>
        </div>
      )}
      {product.sizes?.length > 0 && (
        <div className="my-4" aria-label="Available Sizes">
          <strong>Available Sizes:</strong>
          <div className="d-flex gap-3 mt-3 flex-wrap">
            {product.sizes.map((size) => (
              <div
                key={size.id}
                className="text-center"
                style={{ width: "100px" }}
              >
                <img
                  src={`${productURL}${size.image}`}
                  alt={`Image for size ${size.size}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "6px",
                    border:
                      selectedSize?.id === size.id
                        ? "2px solid green"
                        : "1px solid #ddd",
                  }}
                  loading="lazy"
                  onClick={() => setSelectedSize(size)}
                />
                <button
                  className={`btn btn-sm mt-2 w-100 ${
                    selectedSize?.id === size.id
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  type="button"
                  aria-label={`Size ${size.size}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.size}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <ToastContainer
        className="p-3 position-fixed top-50 start-50 translate-middle"
        style={{ zIndex: 9999 }}
      >
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={2000}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white text-center">
            ✅ Item added to cart!
          </Toast.Body>
        </Toast>
      </ToastContainer>

      <motion.span
        whileHover={{
          x: 5,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.98 }}
        className="btn btn-outline"
        style={{
          borderRadius: "50px",
          fontWeight: "500",
          border: "1px solid #294085",
          backgroundColor: "#294085",
          color: "#fff",
        }}
        aria-label="Add to cart"
        onClick={() => {
          handleAddToCart();
        }}
      >
        Add To Cart →
      </motion.span>
      <br></br>
 

      <h5 className="mt-3">Features Of This Product</h5>
      <ul>
        <li>Chemical-Free Cultivation</li>
        <li>Nutrient-Dense & Fresh</li>
        <li>Soil-Enriching Practices</li>
        <li>Eco-Friendly Pest Management</li>
      </ul>
    </section>
  );
};

export default React.memo(ProductDetailSummary);
