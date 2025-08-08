import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../store/categoryProductSlice";
import { categoryUrl } from "../utils/api";

// const services = [
//   {
//     title: "Rasoi Manthra",
//     description: "We grow fresh organic vegetables.",
//     image: "/images/organic.jpg",
//   },
//   {
//     title: "Essential products",
//     description: "Pure milk and dairy products.",
//     image: "/images/dairy.jpg",
//   },
//   {
//     title: "Agri-Tourism",
//     description: "Experience rural life up close.",
//     image: "/images/tourism.jpg",
//   },
//    {
//     title: "Nyra",
//     description: "Experience rural life up close.",
//     image: "/images/tourism.jpg",
//   }
// ];

const ValueAddedProducts = () => {
  const dispatch = useDispatch();

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categoryProducts);

  console.log("categories", categories);

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;
  return (
    <main>
      <Container className="mt-5 pt-5">
        <section aria-labelledby="what-we-do-title" className="">
          <Row className="mb-5">
            <Col className="">
              <motion.h1
                id="what-we-do-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                Value Added Products
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                Farm activities Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum, error unde! Dolores officia iusto
                obcaecati, sequi laborum ipsum aliquam inventore nam magnam
                doloribus, ullam qui corrupti id est, unde eum.
              </motion.p>
            </Col>
          </Row>

          {/* Two boxes per row layout */}
          <Row className="g-4">
  {categories?.map((category, index) => {
    // Array of 4 different background styles
    const bgColors = [
      "radial-gradient(circle, rgba(195, 34, 34, 1) 0%, rgba(253, 187, 45, 1) 100%)",
      "radial-gradient(circle, rgba(34, 193, 195, 1) 0%, rgba(45, 253, 187, 1) 100%)",
      "radial-gradient(circle,rgba(153, 119, 186, 1) 0%, rgba(7, 33, 145, 1) 100%)",
      "radial-gradient(circle,rgba(199, 70, 70, 1) 0%, rgba(77, 15, 15, 1) 100%)",
    ];

    return (
      <Col
        key={index}
        md={6} // 4 columns per row
        className={
          category.length % 2 === 1 && index === category.length - 1
            ? "mx-auto"
            : ""
        }
      >
        <Link
          to={`/productsbycategory/${category.id}`}
         style={{
              background: bgColors[index % bgColors.length] // rotate colors
            }}
        >
          <Card
            className="h-100 shadow-sm border-0"
            style={{
              background: bgColors[index % bgColors.length] // rotate colors
            }}
          >
            <Card.Img
              variant="top"
              src={`${categoryUrl}${category.image}`}
              alt={category.title}
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>{category.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  })}
</Row>
          <Row>
            <Link to="/productsbycategory">
              {" "}
              <motion.a
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline text-center mt-5 w-auto m-auto"
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
              </motion.a>
            </Link>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default ValueAddedProducts;
