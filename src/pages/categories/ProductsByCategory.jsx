import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { api, productURL } from "../../utils/api";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {Spinner} from "react-bootstrap";
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
  console.log(products);

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const cardHover = {
    y: -5,
    boxShadow: "0 4px 8px rgba(0,0,0,0.12)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

 if (loading) {
  return (
    <main className="d-flex justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <Spinner animation="border" role="status" variant="primary" style={{ width: "3rem", height: "3rem" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </main>
  );
}
  return (
    <main className="res-header-top">
      <Helmet>
        <title>SUSHA'S FOODS | Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Explore our premium range of value-added farm products, crafted with care to deliver freshness, health, and sustainability from our fields to your table."
        />
        <meta
          name="keywords"
          content="farm products, organic produce, value added products, fresh produce, healthy food"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <div className="padding-top d-lg-block d-none"></div>
      <div className="padding-top"></div>
      <div className="padding-y padding-y mt-3 mt-lg-5">
        <header className="mb-3 mb-lg-5" aria-labelledby="category-heading">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h1
              id="value-added-products-title"
              className="heading-res fw-bold"
              style={{ color: "#294085" }}
              variants={itemVariants}
            >
              {categoryName}
            </motion.h1>
          </motion.div>

          <p className="lead text-muted mb-0">
            Discover our premium range of farm products, crafted to bring you
            the freshest and healthiest options from our fields.
          </p>
        </header>

        <section aria-label={`Products in ${categoryName}`} className="">
          <Row className="g-3 g-lg-5">
            {products && products.length > 0 ? (
              products.map((product, index) => (
                <Col lg={6} xs={6} key={product.id || index} as="article">
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
                          <Col
                            md={6}
                            className="overflow-hidden"
                            style={{ background: bgColor }}
                          >
                            <Card.Img
                              src={`${productURL}${product.image}`}
                              alt={`${product.product_name} - Organic farm product`}
                              className="object-fit-cover"
                              style={{
                                borderRadius: "12px 0 0 12px",
                                width: "100%",
                                height: "100%",
                                // padding:"30px",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </Col>

                          <Col md={6} className="d-flex flex-column">
                            <Card.Body className="p-3 p-lg-4 d-flex flex-column justify-content-center">
                              <Card.Title
                                id={`product-${product.id}-title`}
                                style={{ color: "#294085" }}
                                className="fw-bold fs-3 mb-3"
                                as="h2"
                              >
                                {product.product_name}
                              </Card.Title>

                              <Card.Text className=" text-muted">
                                {product.description?.slice(0, 200)}...
                              </Card.Text>
                              <span>{}</span>

                              {product.baseprices?.[0]?.original_price && (
                                <p className="product-price">
                                  <strong>Price:</strong> ₹
                                  {product.baseprices[0].original_price}
                                </p>
                              )}

                              <Link
                                to={`/product/${product.id}`}
                                state={{ bgColor, fromCategoryId: id }}
                              >
                                <motion.div
                                  whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                  }}
                                  whileTap={{ scale: 0.98 }}
                                  className="btn btn-outline align-self-start mt-auto btn-responsive"
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
      </div>
    </main>
  );
};

export default ProductByCategory;
