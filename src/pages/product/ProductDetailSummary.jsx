import AddToCartButton from "../../components/buttons/AddToCartButton";

const ProductDetailSummary = ({ product }) => {
  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>{product.product_name}</h2>
      <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "1.5rem" }}>
        {product.description}
      </p>

      {/* Pricing */}
      <div className="my-3">
        {product.baseprices?.[0] && (
          <>
            <h4 className="text-success">
              ₹ {product.baseprices[0].offer_price}
            </h4>
            <del>₹ {product.baseprices[0].original_price}</del>
          </>
        )}
      </div>

      {/* Sizes */}
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

      <AddToCartButton />
    </div>
  );
};

export default ProductDetailSummary;
