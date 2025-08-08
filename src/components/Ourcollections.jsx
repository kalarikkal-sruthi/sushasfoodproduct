import React from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import { productURL } from "../utils/api";

export default function OurCollections({ data }) {
  console.log(data);

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
                {" "}
                <Link to={`/product/${item.id}`}>
                  <img
                    src={`${productURL}${item.image}`}
                    alt={item.product_name}
                    className="img-fluid"
                    loading="lazy"
                  />
                </Link>
                <h2 id={`product-${item.id}-name`}>{item.product_name}</h2>
                <p>
                  <strong>Price:</strong> ₹{item.baseprices[0]?.original_price}
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
