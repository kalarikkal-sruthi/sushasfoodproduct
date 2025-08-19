import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { api, productURL } from "../../utils/api";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductByCategory = () => {
  const { id } = useParams();
  const location = useLocation();

  const [categoryName, setCategoryName] = useState("Category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const bgColor = location.state?.bgColor || "#fff";

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryRes = await api.get("/categories-with-products");
        const matched = categoryRes.data.find(
          (cat) => cat.id === parseInt(id, 10)
        );
        if (matched) setCategoryName(matched.name);

        const productsRes = await api.get(`/categories/${id}/products`);
        setProducts(productsRes.data || []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  if (loading) {
    return (
      <main>
        <Container>
          <p className="text-center my-5">Loading...</p>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <div className="padding-top"></div>
      <div className="padding-top"></div>
      <Container className="mt-5">
        <header className="mb-5" aria-labelledby="category-heading">
          <h1
            id="category-heading"
            className="display-4 fw-bold"
            style={{ color: "#294085" }}
          >
            {categoryName}
          </h1>
          <p className="lead text-muted mb-0">
            Discover our premium range of farm products, crafted to bring you
            the freshest and healthiest options from our fields.
          </p>
        </header>

        <section
          aria-label={`Products in ${categoryName}`}
          className=""
        >
        
         <Row className="g-4">
  {products && products.length > 0 ? (
    products.map((product, index) => (
      <Col lg={6} key={product.id || index} as="article">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "-50px" }}
          variants={cardVariants}
        >
          <motion.div whileHover={cardHover} className="h-100">
            <Card
              className="h-100 border-0 overflow-hidden"
              style={{
                boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
                borderRadius: "12px",
                backgroundColor: bgColor,
              }}
            >
              <Row className="g-0 h-100">
                <Col md={6} className="overflow-hidden" style={{ background: bgColor }}>
                  <Card.Img
                    src={`${productURL}${product.image}`}
                    alt={`${product.product_name} - Organic farm product`}
                    className="object-fit-cover"
                    style={{
                      borderRadius: "12px 0 0 12px",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </Col>

                <Col md={6} className="d-flex flex-column">
                  <Card.Body className="p-4 d-flex flex-column">
                    <Card.Title
                      id={`product-${product.id}-title`}
                      style={{ color: "#294085" }}
                      className="fw-bold fs-4 mb-3"
                      as="h2"
                    >
                      {product.product_name}
                    </Card.Title>

                    <Card.Text className="flex-grow-1 text-muted">
                      {product.description?.slice(0, 100)}
                    </Card.Text>

                    {product.baseprices?.[0]?.original_price && (
                      <p className="product-price">
                        <strong>Price:</strong> ₹{product.baseprices[0].original_price}
                      </p>
                    )}

                    <Link to={`/product/${product.id}`} state={{ bgColor, fromCategoryId: id }}>
                      <motion.div
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-outline align-self-start mt-auto"
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
                      </motion.div>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </motion.div>
        </motion.div>
      </Col>
    ))
  ) : (
    <Col>
      <p className="text-muted" role="note">
        No products found in this category.
      </p>
    </Col>
  )}
</Row>

          
        </section>
      </Container>
    </main>
  );
};

export default ProductByCategory;
