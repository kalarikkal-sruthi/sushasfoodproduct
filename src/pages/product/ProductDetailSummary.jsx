import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice"; // 🧠 Import action
import AddToCartButton from "../../components/buttons/AddToCartButton";

const ProductDetailSummary = ({ product }) => {
  const dispatch = useDispatch();

  // 🔁 Called when Add to Cart button is clicked
  const handleAddToCart = () => {
    alert("Add to Cart Clicked!"); // ✅ add this
    console.log("DISPATCHING PRODUCT:", product); // ✅ log this
    dispatch(
      addToCart({
        id: product.id,
        product_name: product.product_name,
        price: product.baseprices?.[0]?.offer_price || 0,
        image: product.image,
        size: product.sizes?.[0]?.size || "Default", // 🧠 You can update this to be dynamic later
        quantity: 1,
      })
    );
     console.log("After dispatch from add to cart button clicked"); // Verify dispatch was called
  };

  return (
    <div>
      {/* 🧾 Product Name */}
      <h2 style={{ marginBottom: "1rem" }}>{product.product_name}</h2>

      {/* 📝 Product Description */}
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
        {product.description}
      </p>

      {/* 💰 Pricing Section */}
      <div className="my-3">
        {product.baseprices?.[0] && (
          <>
            <h4 className="text-success">₹ {product.baseprices[0].offer_price}</h4>
            <del>₹ {product.baseprices[0].original_price}</del>
          </>
        )}
      </div>

      {/* 📏 Available Sizes */}
      <div className="my-3">
        <strong>Available Sizes:</strong>
        <div className="d-flex gap-2 mt-2 flex-wrap">
          {product.sizes?.map((size) => (
            <button key={size.id} className="btn btn-outline-success btn-sm">
              {size.size}
            </button>
          ))}
        </div>
      </div>

      {/* 🛒 Add to Cart Button with click logic */}
      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
};

export default ProductDetailSummary;
