import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
import essential from "../assets/essential/1.png";

const ValueAddedProducts = () => {
  const dispatch = useDispatch();

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  const bgColors = [
    "radial-gradient(circle, rgba(195, 34, 34, 1) 0%, rgba(253, 187, 45, 1) 100%)",
    "radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(45, 253, 187, 1) 100%)",
    "radial-gradient(circle, rgba(153, 119, 186, 1) 0%, rgba(7, 33, 145, 1) 100%)",
    "radial-gradient(circle, rgba(199, 70, 70, 1) 0%, rgba(77, 15, 15, 1) 100%)",
  ];

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="value-added-products-title" className="mb-5">
          <header>
            <Row>
              <Col>
                <h1 className="display-4 fw-bold" style={{ color: "#294085" }}>
                  Value Added Products
                </h1>

                <p className="lead text-muted mb-0">
                  Discover our premium range of farm products, crafted to bring
                  you the freshest and healthiest options from our fields.
                </p>
              </Col>
            </Row>
          </header>

          {/* Product categories grid */}
          <Row className="g-4 mt-4">
            {categories?.map((category, index) => (
              <Col key={category.id || index} md={6}>
                <article aria-labelledby={`category-${category.id}-title`}>
                  <Link
                    to={`/productsbycategory/${category.id}`}
                    state={{
                      bgColor: bgColors[index % bgColors.length],
                    }}
                    style={{ textDecoration: "none" }}
                    aria-label={`View products in ${category.name}`}
                  >
                    <Card
                      className="h-100 shadow-sm border-0 p-3"
                      style={{
                        background: bgColors[index % bgColors.length],
                        borderRadius: "12px",
                      }}
                    >
                      <Card.Img
                        className="w-50 m-auto"
                        variant="top"
                        src={essential}
                        alt={`${category.name} - category`}
                        loading="lazy"
                      />
                      <Card.Body>
                        <h4
                          className="value-added-product-head h5"
                          id={`category-${category.id}-title`}
                          as="h2"
                        >
                          {category.name}
                        </h4>
                        <p className="value-added-product-para">
                          Our essential organic oils are extracted from the
                          finest quality plants and herbs, grown using
                          sustainable and chemical-free farming methods.
                          Cold-pressed and unrefined, they retain their natural
                          aroma, nutrients, and therapeutic properties.
                          {/* {category.description || "Explore our selection."} */}
                        </p>
                        <ul className="value-addedd-product-list">
                          <li>Virigin Coconut Oil</li>{" "}
                          <li>Virigin Coconut Oil</li>
                          <li>Virigin Coconut Oil</li>{" "}
                        </ul>
                      </Card.Body>
                    </Card>
                  </Link>
                </article>
              </Col>
            ))}
          </Row>

          {/* View All button */}
          <Row>
            <Col className="text-center mt-5">
              <Link to="/productsbycategory" aria-label="View all products">
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
                  View All →
                </motion.button>
              </Link>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ValueAddedProducts;
