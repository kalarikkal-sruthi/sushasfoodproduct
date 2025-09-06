import React from "react";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";

function Shippingpolicy() {
  return (
       <div>
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
                Shipping Policy
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
              The use of this website is subject to the following shipping terms:
            </p>
            <h3
              id="category-heading"
              class="display-8 fw-bold"
              style={{ color: "#294085" }}
            >
             General Shipping Policy
            </h3>
            <p>
              <ul>
                <li>
                  Orders are processed and dispatched within  <strong>2–4 business days</strong> of receiving payment confirmation.
                </li>
                <li>
                 Delivery timelines may vary depending on the <strong>location, courier partner, and availability of products.</strong> Normally, orders are delivered within <strong>5–10 business days.</strong>
                </li>
                <li>
                  Once your order is shipped, you will receive a <strong>tracking number</strong> via email or SMS to monitor your delivery status.
                </li>
                <li>
                 Shipping charges (if applicable) will be displayed at checkout before completing your order.
                </li>

                <li>
                 We make every effort to deliver products on time, but we shall not be liable for delays caused by <strong>courier companies, postal authorities, natural calamities, or other circumstances beyond our control.</strong>
                </li>
                <li>
               Products will be delivered only to the <strong>shipping address provided at the time of order placement.</strong> Changes in the shipping address after dispatch will not be accepted.
                </li>
                <li>
                 Customers are requested to ensure that <strong>someone is available to receive the delivery</strong>at the provided address. We will not be responsible for any loss or damage once the package is marked as “delivered” by the courier.
                </li>

                <li>
                 In case of non-delivery due to <strong>incorrect or incomplete address provided by the customer,</strong> the re-shipping charges will be borne by the customer.
                </li>
                <li>International shipping (if applicable) may be subject to <strong>customs duties, taxes, or additional charges</strong> in the destination country, which must be paid by the customer.</li>
              </ul>
            </p>

           
          </Row>
        </section>
      </div>
    </div>
  )
}

export default Shippingpolicy