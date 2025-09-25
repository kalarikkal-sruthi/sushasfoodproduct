import React from "react";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
function Refundcancellationpolicy() {
  return (
    <div>
       <Helmet>
              <title>Refund Cancellation Policy | Susha's Foods | Prakash Farm | Organic Food</title>
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
      <div className="padding-top"></div>
      <div className="padding-top"></div>

      <div className="padding-y mt-5">
        <section
          aria-labelledby="crop-detail-title"
          className="crop-detail-section"
        >
          <Row className="mb-3">
            <Col>
              <motion.h1
                id="crop-detail-title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="display-4 fw-bold"
                style={{ color: "#294085" }}
              >
                Return and Cancellation Policy
              </motion.h1>
            </Col>
          </Row>
          <Row>
            <p>
              The term <strong>‘Sushas Food Products’</strong>,{" "}
              <strong>‘sushasfoodproducts.com’</strong> ,<strong>‘us’</strong>{" "}
              or <strong>‘we’</strong> refers to the owner of the website whose
              registered office is in <strong>Kerala, India.</strong> The term{" "}
              <strong>‘you’</strong> refers to the user or viewer of our
              website.
            </p>
            <p>
              The use of this website is subject to the following return and
              cancellation terms:
            </p>
            <h3
              id="category-heading"
              class="display-8 fw-bold"
              style={{ color: "#294085" }}
            >
              Return / Exchange Policy
            </h3>
            <p>
              <ul>
                <li>
                  Exchange of any product is not allowed unless it is{" "}
                  <strong>
                    physically damaged during delivery, wrong product received,
                  </strong>{" "}
                  or has <strong>original manufacturing defects.</strong>
                </li>
                <li>
                  Customers should notify us by email at
                  sushasfoodproducts@gmail.com within{" "}
                  <strong>24 hours</strong> after delivery with the{" "}
                  <strong>order number</strong> and{" "}
                  <strong>photos of the product</strong> for reference.
                </li>
                <li>
                  <strong>Sushas Food Products</strong> will not accept any
                  request received after <strong>24 hours</strong> of delivery.
                </li>
                <li>
                  Customers need to arrange courier for returning the product.
                  We are{" "}
                  <strong>
                    {" "}
                    not responsible for any misplacing by courier{" "}
                  </strong>{" "}
                  during return transit.
                </li>

                <li>
                  In case of{" "}
                  <strong>non-availability of a replacement product,</strong> we
                  will <strong>refund the amount paid</strong> by the customer.
                </li>
                <li>
                  Exchange or replacement will only be offered to the{" "}
                  <strong>
                    same person who originally purchased the product.
                  </strong>
                </li>
                <li>
                  All returned items must be packed in the same box or package
                  in good condition with all instruction manuals, labels, and
                  warranty cards (if any).
                </li>

                <li>
                  Customers must request for return using the{" "}
                  <strong>same email address registered on our website.</strong>
                </li>
              </ul>
            </p>

            <h3
              id="category-heading"
              class="display-8 fw-bold"
              style={{ color: "#294085" }}
            >
              Cancellation Policy
            </h3>
            <p>
              <ul>
                <li>
                  <strong>No cancellation charges</strong> will apply if the
                  order has <strong>not been dispatched</strong> for delivery.
                </li>
                <li>
                  All cancellation requests should be sent to
                  sushasfoodproducts@gmail.com or by contacting us at +91 8129 313 515.
                </li>
              </ul>
            </p>
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Refundcancellationpolicy;
