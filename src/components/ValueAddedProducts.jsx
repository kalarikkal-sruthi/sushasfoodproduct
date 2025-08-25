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

const bgColors = [
  "radial-gradient(circle, rgb(133 41 110 / 30%) 0%, #85296E 100%)", // light sky blue
  "radial-gradient(circle, rgb(133 110 41 / 30%) 0%, #856E29 100%)", // soft lavender
  "radial-gradient(circle, rgb(41 133 64 / 30%) 0%, #298540 100%)", // pale golden
  "radial-gradient(circle, rgb(105 121 170 / 30%) 0%, #6979AA 100%)"  // mint green
];


  // const bgColors = [
  //   "radial-gradient(circle,rgba(139, 35, 51, 0.49) 0%, #8b2333",
  //   "radial-gradient(circle,rgba(0, 119, 174, 0.45) 0%, #0078ae 100%)",
  //   "radial-gradient(circle,rgba(174, 122, 0, 0.49) 0%, #ae7b00",
  //   "radial-gradient(circle,rgba(174, 0, 99, 0.49) 0%, #ae0064",

  //   "radial-gradient(circle,rgba(101, 34, 140, 0.5) 0%, #65228c",
  //   "radial-gradient(circle,rgba(174, 58, 0, 0.5) 0%, #ae3a00",
  // ];

  console.log(categories);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <main>
       <div  className="padding-y mt-5">
        <section aria-labelledby="value-added-products-title" className="mb-5">
          <header>
            <Row>
              <Col>
                <h1
                  id="value-added-products-title"
                  className="display-4 fw-bold"
                  style={{ color: "#294085" }}
                >
                  Value Added Products In Susha's Foods
                </h1>
                <p className="lead text-muted mb-0">
                  Discover our premium range of farm products, crafted to bring
                  you the freshest and healthiest options from our fields.
                </p>
              </Col>
            </Row>
          </header>

          {/* Product Categories */}
          <Row className="g-4 mt-4">
            {categories
              ?.slice()
              .sort((a, b) => b.id - a.id) 
              .map((category, index) => (
                <Col key={category.id || index} md={6}>
                  <article
                    aria-labelledby={`category-${category.id}-title`}
                    className="h-100"
                  >
                    <Link
                      to={`/productsbycategory/${category.id}`}
                      state={{
                        bgColor: bgColors[index % bgColors.length],
                        categoryName: category.name,
                      }}
                      style={{ textDecoration: "none" }}
                      aria-label={`View products in ${category.name}`}
                    >
                      <Card
                        className="h-100 shadow-sm border-0 p-5"
                        style={{
                          background: bgColors[index % bgColors.length],
                          borderRadius: "12px",
                        }}
                      >
                        <Card.Img
                          className=" m-auto"
                          variant="top"
                          // src={img}
                          style={{width:"400px"}}
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
