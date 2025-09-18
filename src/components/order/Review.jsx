import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitReview, resetReviewState } from "../../store/ProductSlice";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";

const Review = ({ product }) => {
  const dispatch = useDispatch();
  console.log(product);

  const user = useSelector((state) => state.auth.user);
  const {
    reviewLoading,
    reviewError,
    reviewSuccess,

    reviewFetchLoading,
    reviewFetchError,
  } = useSelector((state) => state.product);
  const reviews = product?.reviews || [];

  // Local form state
  const [formData, setFormData] = useState({
    product_id: product?.id || "",
    user_id: user?.id || "",
    store_id: user?.store_id || "",
    review: "",
    start_ratings: 0,
    name: user?.name || "",
  });

  // Reset form after successful review
  useEffect(() => {
    if (reviewSuccess) {
      setFormData({
        product_id: product?.id || "",
        user_id: user?.id || "",
        store_id: user?.store_id || "",
        review: "",
        start_ratings: 0,
        name: user?.name || "",
      });

      setTimeout(() => dispatch(resetReviewState()), 2000);
    }
  }, [reviewSuccess, product, user, dispatch]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitReview(formData));
  };

  return (
    <div className="mt-4">
      <Row>
        <Col md={6}>
          {/* Review Form */}
          <form onSubmit={handleSubmit} className="p-3 border rounded mb-4">
            <h4>Write a Review</h4>

            <div className="mb-2">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Review</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Rating (0–5)</label>
              <input
                type="number"
                name="start_ratings"
                step="0.5"
                min="0"
                max="5"
                value={formData.start_ratings}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <motion.button
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
              aria-label="Submit"
              disabled={reviewLoading}
            >
              submit →
            </motion.button>

            {reviewError && <p className="text-danger mt-2">{reviewError}</p>}
            {reviewSuccess && (
              <p className="text-success mt-2">
                ✅ Review submitted successfully!
              </p>
            )}
          </form>
        </Col>
      </Row>
      <Row>
        {/* Reviews List */}
        <div className="p-3 border rounded">
          <h4>Customer Reviews</h4>

          {reviewFetchLoading && <p>Loading reviews...</p>}
          {reviewFetchError && (
            <p className="text-danger">{reviewFetchError}</p>
          )}

          {reviews && reviews.length > 0 ? (
            <ul className="list-group">
              <Col md={4}>
                {reviews.map((r, idx) => (
                  <li key={idx} className="list-group-item">
                    <strong>{r.name}</strong> ⭐ {r.start_ratings}
                    <p className="mb-0">{r.review}</p>
                  </li>
                ))}
              </Col>
            </ul>
          ) : (
            !reviewFetchLoading && (
              <p>No reviews yet. Be the first to review!</p>
            )
          )}
        </div>
      </Row>
    </div>
  );
};

export default Review;
