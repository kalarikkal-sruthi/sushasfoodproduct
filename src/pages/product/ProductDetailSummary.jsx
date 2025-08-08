import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import AddToCartButton from "../../components/buttons/AddToCartButton";

const ProductDetailSummary = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        product_name: product.product_name,
        price: product.baseprices?.[0]?.original_price || 0,
        image: product.image,
        size: product.sizes?.[0]?.size || "Default",
        quantity: 1,
      })
    );
  };

  return (
    <section aria-label="Product Details">
      <header>
        <div className="heading-main">
          {" "}
          <h1 className="mb-3 " style={{ fontSize: "2rem" }}>
            {product.product_name}
          </h1>
        </div>
      </header>

      {product.description && (
        <p
          style={{ fontSize: "1.1rem", color: "#555" }}
          aria-label="Product description"
        >
          {product.description}
        </p>
      )}

      {product.baseprices?.[0] && (
        <div className="my-4" aria-label="Product price">
          {/* <strong className="text-success fs-4">
            ₹ {product.baseprices[0].offer_price}
          </strong> */}
          <strong>
            {" "}
            <span className="text-muted ms-2">
              ₹ {product.baseprices[0].original_price}
            </span>
          </strong>
          {/* <span className="text-muted ms-2">
            <del>₹ {product.baseprices[0].original_price}</del>
          </span> */}
        </div>
      )}

      {product.sizes?.length > 0 && (
        <div className="my-4" aria-label="Available Sizes">
          <strong>Available Sizes:</strong>
          <div className="d-flex gap-2 mt-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                className="btn btn-outline-success btn-sm"
                type="button"
                aria-label={`Size ${size.size}`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4">
        <AddToCartButton onClick={handleAddToCart} aria-label="Add to cart" />
      </div>
    </section>
  );
};

export default ProductDetailSummary;
