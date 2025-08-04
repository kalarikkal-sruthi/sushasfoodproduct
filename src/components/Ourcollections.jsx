import React from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function OurCollections({ data }) {
  return (
    <main
      className="padding-horizontal"
      aria-labelledby="our-collections-heading"
    >
      <div className="padding-top" />
      <header className="header-bar">
        <Row>
          <Col xs={12} md={6} className="heading-main">
            <h1>
              <Link
                to="/productsbycategory"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                What Will You Provide From Us
              </Link>
            </h1>
          </Col>
          <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
            <div className="view-all-button">
              <Link
                to="/productsbycategory"
                aria-label="View all product categories"
              >
                <button>View All</button>
              </Link>
            </div>
          </Col>
        </Row>
      </header>
      <section aria-label="Product collection">
        <Row>
          {data.map((item) => (
            <Col xs={6} md={3} key={item.id}>
              <article
                className="product-collection-image"
                aria-labelledby={`product-${item.id}-name`}
              >
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="img-fluid"
                  loading="lazy"
                />
                <h2 id={`product-${item.id}-name`}>{item.product_name}</h2>
                <p>
                  <strong>Price:</strong> ₹{item.price}
                </p>
                <button className="btn">Shop Now</button>
              </article>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
}
