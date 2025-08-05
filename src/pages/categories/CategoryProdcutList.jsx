import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesWithProducts } from "../../store/categoryProductSlice";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../../components/cards/ProductCard";

const CategoryProductList = () => {
  const dispatch = useDispatch();

  const { data: categories, loading, error } = useSelector(
    (state) => state.categoryProducts
  );

  useEffect(() => {
    dispatch(fetchCategoriesWithProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center my-5">Loading...</p>;
  if (error) return <p className="text-danger text-center">Error: {error}</p>;

  return (
    <main className="padding-horizontal" aria-labelledby="category-products-heading">
      <div className="padding-top"></div>
       <div className="padding-top"></div>
      <h1 id="category-products-heading" className="visually-hidden">
        Browse Products by Category
      </h1>

      {categories?.map((category) => (
        <section
          key={category.id}
          aria-labelledby={`category-title-${category.id}`}
          className="mb-5"
        >
          {/* Category Heading and View All */}
          <header className="header-bar">
            <Row>
              <Col xs={12} md={6} className="heading-main-div heading-main">
                <div className="heading-main ">
                  <Link
                    to={`/productsbycategory/${category.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h1 id={`category-title-${category.id}`}>
                      Category: {category.name ?? "Untitled Category"}
                    </h1>
                  </Link>
                </div>
              </Col>

              <Col
                xs={12}
                md={6}
                className="view-all-buttom-main d-flex align-items-center justify-content-end mt-4"
              >
                <div className="view-all-button">
                  <Link
                    to={`/productsbycategory/${category.id}`}
                    aria-label={`View all products in ${category.name}`}
                  >
                    <button className="btn btn-outline-primary btn-sm">
                      View All
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </header>

          {/* Product Cards */}
          <Row aria-label={`Products in ${category.name}`}>
            {category.products?.slice(0, 4).map((product) => (
              <Col xs={6} md={3} key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  aria-label={`View details for ${product.name}`}
                >
                  <ProductCard
                    product={{
                      ...product,
                      price: product.price ?? product.selling_price ?? "N/A",
                    }}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </main>
  );
};

export default CategoryProductList;
