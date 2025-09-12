import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
import { categoryUrl } from "../utils/api";


import {} from "../utils/api";

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


  console.log(categories);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;
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
  return (
    <main>
       <div  className="padding-y mt-5">
        <section aria-labelledby="value-added-products-title" className="mb-5">
          <header>
            <Row>
              <Col>
               <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                 <motion.h1
                                    id="value-added-products-title"
                  className="display-2  display-lg-4 fw-bold"
                  style={{ color: "#294085" }}
                                  variants={itemVariants}
                                >
                                  Value Added Products In Susha's Foods
                                </motion.h1>
                                </motion.div>
               
                <p className="lead text-muted mb-0">
                  Discover our premium range of farm products, crafted to bring
                  you the freshest and healthiest options from our fields.
                </p>
              </Col>
            </Row>
          </header>

          {/* Product Categories */}
          <Row className="g-5 mt-4 justify-content-center">
            {categories
              ?.slice()
              
              .map((category, index) => (
                <Col key={category.id || index} md={6} xs={6}>
                  <article
                    aria-labelledby={`category-${category.id}-title`}
                    className="h-100"
                  >
                    <Link
                      to={`/productsbycategory/${category.id}`}
                      
                      style={{ textDecoration: "none" }}
                      aria-label={`View products in ${category.name}`}
                    >
                      <Card
                        className=" shadow-sm border-0 "
                        style={{
                         
                          borderRadius: "12px",
                        }}
                      >
                        <Card.Img
                          className=" m-auto"
                          variant="top"
                          // src={img}
                         
                          src={`${categoryUrl}${category.image}`}
                          alt={`Fresh ${category.name} products`}
                          loading="lazy"
                        />
                        <Card.Body>
                          <h2
                            className="value-added-product-head h5"
                            id={`category-${category.id}-title`}
                          >
                            {category.name}
                          </h2>
                          <p className="value-added-product-para">
                            Farm Fresh
                          </p>
                            <p className="value-added-product-para">
                           No Preservatives
                          </p>
                          {/* {category.tagline && (
                          <p>
                            <em>{category.tagline}</em>
                          </p>
                        )}
                        {category.terms && <p>{category.terms}</p>}
                        <ul className="value-addedd-product-list">
                          <li>Virgin Coconut Oil</li>
                          <li>Cold Pressed Groundnut Oil</li>
                          <li>Organic Jaggery Powder</li>
                        </ul> */}
                        </Card.Body>
                      </Card>
                    </Link>
                  </article>
                </Col>
              ))}
          </Row>

          {/* View All Button */}
          <Row>
            <Col className="text-center mt-5">
              <Link
                to="/productsbycategory"
                aria-label="View all value added products"
              >
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
                  View All Value Added Products →
                </motion.button>
              </Link>
            </Col>
          </Row>
        </section>
      </div>
    </main>
  );
};

export default ValueAddedProducts;
