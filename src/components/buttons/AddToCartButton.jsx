
import "./AddToCartButton.css"; // style for this button only (scoped CSS)
export default function AddToCartButton({ onClick }) {
  return (
    <div className="add-to-cart-container">
      <button className="add-to-cart-btn" onClick={onClick}>
        <i className="bi bi-cart-fill" style={{ marginRight: "6px" }}></i>
  Add To Cart
      </button>
    </div>
  );
}
