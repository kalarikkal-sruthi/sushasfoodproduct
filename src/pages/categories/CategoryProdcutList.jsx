import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import ProductCard from "../../components/cards/ProductCard";
import { Helmet } from "react-helmet-async";

const CategoryProductList = () => {
  const dispatch = useDispatch();

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  console.log(categories);

  if (loading) {
    return (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <Spinner
          animation="border"
          role="status"
          variant="primary"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <p className="text-danger text-center">Error: {error}</p>
      </main>
    );
  }

  const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.6 },
    },
  };

  const buttonStyle = {
    borderRadius: "50px",
    fontWeight: "500",
    border: "1px solid #294085",
    backgroundColor: "#294085",
    color: "#fff",
  };

  return (
    <main
      aria-labelledby="category-products-heading"
      className="res-header-top"
    >
      <Helmet>
      <title>Sushas's Foods| Prakash Farm | Organic Food</title>
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
      <div className="padding-y  mt-3 mt-lg-5">
        <h1 id="category-products-heading" className="visually-hidden">
          Browse Products by Category
        </h1>

        {[...categories].map((category, categoryIndex) => (
          <section
            key={category.id}
            aria-labelledby={`category-title-${category.id}`}
            className="mb-3 mb-lg-5"
          >
            <header className="mb-2 mb-lg-4">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  to={`/productsbycategory/${category.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`Browse all products in ${category.name}`}
                  state={{ categoryIndex }}
                >
                  <motion.h1
                    variants={scrollVariants}
                    id={`category-title-${category.id}`}
                    className="fw-bold"
                    style={{ color: "#294085" }}
                  >
                    {category.name || "Untitled Category"}
                  </motion.h1>
                </Link>
              </motion.div>
            </header>

            <article
              style={{
                borderRadius: "12px",
              }}
            >
              <Row aria-label={`Products in ${category.name}`}>
                {category.products?.slice(0, 4).map((product) => {
                  return (
                    <Col
                      key={product.id}
                      xs={6}
                      md={3}
                      className="mb-2 mb-ld-0"
                    >
                      <article
                        style={{
                          borderRadius: "12px",
                        }}
                      >
                        <Link
                          to={`/product/${product.id}`}
                          state={{ categoryName: category.name }}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                          }}
                          aria-label={`View details for ${product.name}`}
                        >
                          <ProductCard
                            product={{
                              ...product,
                              price:
                                product.price ?? product.selling_price ?? "N/A",
                              imageLoading: "lazy",
                            }}
                            id={`product-${product.id}-title`}
                          />
                        </Link>
                      </article>
                    </Col>
                  );
                })}
              </Row>
            </article>

            <div className="text-center mt-4">
              <Link
                to={`/productsbycategory/${category.id}`}
                aria-label={`View all products in ${category.name}`}
                state={{ categoryName: category.name }}
              >
                <motion.span
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline "
                  style={buttonStyle}
                >
                  View All →
                </motion.span>
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default CategoryProductList;
