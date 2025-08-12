import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { api } from "../../utils/api";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { productURL } from "../../utils/api";

const ProductByCategory = () => {
  const { id } = useParams();
  const location = useLocation();

  const [categoryName, setCategoryName] = useState("Category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const bgColor = location.state?.bgColor || "#ffffff";

  useEffect(() => {
    api
      .get("/categories-with-products")
      .then((res) => {
        const matched = res.data.find((cat) => cat.id === parseInt(id));
        if (matched) {
          setCategoryName(matched.name);
        }
      })
      .catch(() => {
        setCategoryName("Category");
      });

    // Fetch products by category
    api
      .get(`/categories/${id}/products`)
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center my-5">Loading...</p>;
  }

  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="category-heading" className="mt-5 mb-5">
          <header>
            <Row>
              <Col>
                <h1 className="display-4 fw-bold" style={{ color: "#294085" }}>
                  {categoryName}
                </h1>

                <p className="lead text-muted mb-0">
                  Discover our premium range of farm products, crafted to bring
                  you the freshest and healthiest options from our fields.
                </p>
              </Col>
            </Row>
          </header>

          <Row className="g-4 mt-4">
            {products.length > 0 ? (
              <Row aria-label={`Products in ${categoryName}`}>
                {products.map((product, index) => (
                  <Col
                    key={product.id || index}
                    md={4}
                    aria-labelledby={`product-${product.id}-title`}
                  >
                    <article>
                      <Link
                        state={{
                          bgColor: bgColor,
                          fromCategoryId: id,
                        }}
                        to={`/product/${product.id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                        aria-label={`View details of ${product.product_name}`}
                      >
                        <article
                          style={{ background: bgColor }}
                          className="product-collection-image"
                          aria-labelledby={`product-${product.id}-name`}
                        >
                          <img
                            src={`${productURL}${product.image}`}
                            alt={product.product_name}
                            className="img-fluid"
                            loading="lazy"
                          />
                          <h2 id={`product-${product.id}-name`}>
                            {product.product_name}
                          </h2>
                          <p>
                            <strong>Price:</strong> ₹
                            {product.baseprices[0]?.original_price}
                          </p>
                           <h5>Key Features</h5>
                           <ul className="product-display-category">
                            <li>Boost immunity and overall health</li>
                            <li>Nourish skin and hair naturally</li>
                            <li>Enhance flavor in cooking</li>
                            <li>Promote relaxation and stress relief</li>
                           </ul>
                          <motion.button
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline"
                            style={{
                              borderWidth: "2px",
                              borderRadius: "50px",
                              fontWeight: "500",
                              border: "1px solid #294085",
                              backgroundColor: "#294085",
                              color: "#fff",
                            }}
                          >
                          Shop Now →
                          </motion.button>
                        </article>
                        {/* <div className="card h-100 shadow-sm">
                  <img
                    src={`${productURL}${product.image}`}
                    alt={product.product_name}
                    className="card-img-top"
                    loading="lazy"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h2
                      id={`product-${product.id}-title`}
                      className="card-title h5"
                    >
                      {product.product_name}
                    </h2>
                  
                  </div>
                </div> */}
                      </Link>
                    </article>
                  </Col>
                ))}
              </Row>
            ) : (
              <p className="text-muted" role="note">
                No products found in this category.
              </p>
            )}
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ProductByCategory;
