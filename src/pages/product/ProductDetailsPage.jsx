import { useEffect, useState } from "react";
import AddToCartButton from "../../components/buttons/AddToCartButton";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    fetch("https://ms.myfezto.com/api/product/3")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        setMainImage(`https://zzz.com/images/${data.product.image}`);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <>
    <div className="padding-top"></div>
   
    <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
      {/* Left Side: Images + Video */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          animation: "fadeIn 1s ease",
        }}
      >
        <img
          src={mainImage}
          alt="Main Product"
          style={{ width: "100%", marginBottom: "1rem", borderRadius: "6px" }}
        />
        <div>
      <h2>Local Image Test</h2>
      <img src="/collections/1.png" alt="Test" style={{ width: "300px" }} />
    </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {product.images?.map((img) => (
            <img
              key={img.id}
              src={`https://zzz.com/images/${img.image}`}
              alt={`img-${img.id}`}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => setMainImage(`https://zzz.com/images/${img.image}`)}
            />
          ))}
        </div>

        {/* Optional: Video embed */}
        <div style={{ marginTop: "1rem" }}>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/Y7f98aduVJ8"
            title="Product Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side: Details */}
      <div style={{ flex: 1, animation: "fadeIn 1.2s ease" }}>
        <h2>{product.product_name}</h2>
        <h4 style={{ color: "#777" }}>{product.product_name_ar}</h4>

        <p>{product.short_description}</p>
        <p style={{ fontStyle: "italic", color: "#555" }}>
          {product.short_description_ar}
        </p>

        <p>
          <strong>Package Type:</strong> {product.package_type}
        </p>
        <p>
          <strong>Status:</strong> {product.status}
        </p>

        {/* Sizes */}
        <h4>Sizes:</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
          {product.sizes?.map((s) => (
            <button
              key={s.id}
              style={{
                padding: "6px 12px",
                border: "1px solid #6eb449",
                background: "#fff",
                color: "#6eb449",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {s.size}
            </button>
          ))}
        </div>

        {/* Base Prices */}
        <h4>Price:</h4>
        {product.baseprices?.map((price) => (
          <p key={price.id}>
            <strong>Original:</strong> ₹{price.original_price}{" "}
            <br />
            <strong>Offer:</strong> ₹{price.offer_price}
          </p>
        ))}
        <div>
 <AddToCartButton/>
        </div>
       

        {/* Arabic description */}
        <p style={{ marginTop: "1rem", color: "#444" }}>
          <strong>Product Description:</strong>
          <br />
          {product.description}
        </p>
      </div>
      
      {/* Fade-in keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
     </>
  );
};

export default ProductDetailsPage;


