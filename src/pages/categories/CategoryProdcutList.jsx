import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProductCard from "../../components/cards/ProductCard";

const CategoryProductList = () => {
  const dispatch = useDispatch();
  const bgColors = [
    "radial-gradient(circle,rgba(139, 35, 51, 0.49) 0%, #8b2333",
    "radial-gradient(circle,rgba(0, 119, 174, 0.45) 0%, #0078ae 100%)",
    "radial-gradient(circle,rgba(174, 122, 0, 0.49) 0%, #ae7b00",
    "radial-gradient(circle,rgba(174, 0, 99, 0.49) 0%, #ae0064",

    "radial-gradient(circle,rgba(101, 34, 140, 0.5) 0%, #65228c",
    "radial-gradient(circle,rgba(174, 58, 0, 0.5) 0%, #ae3a00",
  ];
  console.log(bgColors);

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
      <main>
        <p className="text-center my-5">Loading...</p>
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
    <main aria-labelledby="category-products-heading">
      <div className="padding-top"></div>
       <div className="padding-top"></div>
      <Container className="mt-5">
        <h1 id="category-products-heading" className="visually-hidden">
          Browse Products by Category
        </h1>

        {[...categories]
     .sort((a, b) => b.id - a.id) 
        .map((category) => (
          <section
            key={category.id}
            aria-labelledby={`category-title-${category.id}`}piiku86qssName="mb-5"
          >
            <header className="mb-4">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  to={`/productsbycategory/${category.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`Browse all products in ${category.name}`}
                >
                  <motion.h2
                    variants={scrollVariants}
                    id={`category-title-${category.id}`}
                    className="fw-bold"
                    style={{ color: "#294085" }}
                  >
                    {category.name || "Untitled Category"}
                  </motion.h2>
                </Link>
              </motion.div>
            </header>
            <article
              style={{
                background: bgColors[category.id % bgColors.length],
                borderRadius: "12px",
              }}
            >
              <Row aria-label={`Products in ${category.name}`}>
                {category.products
                ?.slice(0, 4)
               
                .map((product) => {
                  const bgColor = bgColors[category.id % bgColors.length]; 

                  return (
                    <Col key={product.id} xs={6} md={3}>
                      <article
                        style={{
                          background: bgColor,
                          borderRadius: "12px",
                          padding: "8px",
                        }}
                      >
                        <Link
                          to={`/product/${product.id}`}
                          state={{
                            bgColor: bgColors[category.id % bgColors.length],
                            categoryName: category.name,
                          }}
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
                state={{
                  bgColor: bgColors[category.id % bgColors.length],
                  categoryName: category.name,
                }}
              >
                <motion.span
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline"
                  style={buttonStyle}
                >
                  View All →
                </motion.span>
              </Link>
            </div>
          </section>
        ))}
      </Container>
    </main>
  );
};

export default CategoryProductList;
