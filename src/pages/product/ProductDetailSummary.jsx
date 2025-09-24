import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { productURL } from "../../utils/api";
import { motion } from "framer-motion";
import { Toast, ToastContainer } from "react-bootstrap";


const ProductDetailSummary = ({ product }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();


  const [selectedSize, setSelectedSize] = useState(() => {
    if (product.sizes?.length > 0 && product.prices?.length > 0) {
      return {
        ...product.sizes[0],
        priceId: product.sizes[0].id,
        price: product.prices[0]?.original_price || 0,
        priceObj: product.prices[0],
      };
    }
    return null;
  });

  const handleAddToCart = useCallback(() => {
    if (!product) return;

    let priceObj = null;
    let chosenSize = null;

    if (product.sizes?.length === 1) {
    
      priceObj = product.baseprices?.[0] || {
        original_price: 0,
        offer_price: 0,
      };
      chosenSize = product.sizes[0]; 
    } else if (product.sizes?.length > 1) {
     
      if (!selectedSize) return;
      priceObj = selectedSize.priceObj || {
        original_price: selectedSize.price,
        offer_price: 0,
      };
      chosenSize = selectedSize; 
    }

    if (!priceObj || !chosenSize) return; 

    dispatch(
      addToCart({
        id: product.id,
        product_name: product.product_name,
        originalPrice: priceObj.original_price,
        offerPrice: priceObj.offer_price,
        selectPrice:
          priceObj.offer_price && priceObj.offer_price > 0
            ? priceObj.offer_price
            : priceObj.original_price,
        image: product.image,
        size: chosenSize.size,
        sizeId: chosenSize.id,
        quantity: 1,
      })
    );

    setShow(true);
    setTimeout(() => setShow(false), 2000);
  }, [dispatch, product, selectedSize]);

  return (
    <section aria-label="Product Details" itemScope>
      <header className="mb-3" aria-labelledby="category-heading">
        <h2
          id="category-heading"
          className="display-8 fw-bold mb-1"
          style={{ color: "#294085" }}
        >
          {product.product_name}
        </h2>
        <h3
          id="category-heading"
          className="display-9 fw-bold "
          style={{ color: "#294085" }}
        >
          {product.product_name_mal}
        </h3>
        
        <h4 className="mt-2 mb-0">How we make</h4>
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
            <strong>Price : </strong>₹ {selectedSize.price}
          </span>
        </div>
      )}
      {product.sizes?.length > 0 && (
        <div className="my-4" aria-label="Available Sizes">
          <strong>Available Sizes:</strong>
          <div className="d-flex gap-3 mt-3 flex-wrap">
            {product.sizes.map((size, index) => {
              const priceObj = product.prices[index]; 

              return (
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
                    onClick={() =>
                      setSelectedSize({
                        ...size,
                        priceId: size.id,
                        price: priceObj.original_price,
                        priceObj,
                      })
                    }
                  />
                  <button
                    className={`btn btn-sm mt-2 w-100 ${
                      selectedSize?.id === size.id
                        ? "btn-success"
                        : "btn-outline-success"
                    }`}
                    type="button"
                    aria-label={`Size ${size.size}`}
                    onClick={() =>
                      setSelectedSize({
                        ...size,
                        priceId: size.id,
                        price: priceObj.original_price,
                        priceObj,
                      })
                    }
                  >
                    {size.size}
                  </button>
                </div>
              );
            })}
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
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
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
        onClick={handleAddToCart}
      >
        Add To Cart →
      </motion.span>
      <div
        className="product-description mt-2"
        dangerouslySetInnerHTML={{ __html: product.description_full }}
      />
    
    </section>
  );
};

export default React.memo(ProductDetailSummary);
