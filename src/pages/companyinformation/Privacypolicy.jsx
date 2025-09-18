import React from "react";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
function Privacypolicy() {
  return (
    <div>
       <Helmet>
              <title>Privacy Policy | Susha's Foods | Prakash Farm | Organic Food </title>
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
                Privacy Notice
              </motion.h1>
            </Col>
          </Row>
          <Row>
            <p>
              We know that you care how information about you is used and
              shared, and we appreciate your trust that we will do so carefully
              and responsibly.
              <br></br>
              This Privacy Notice describes how Sushas Food Products collects
              and processes your personal information through
              sushasfoodproducts.com, devices, products, services, online
              marketplace, and applications that reference this Privacy Notice.
              <br></br>
              By using sushasfoodproducts.com, you agree to our use of your
              personal information (including sensitive personal information) in
              accordance with this Privacy Notice, as may be amended from time
              to time at our discretion.
              <br></br>
              You also agree and consent to us collecting, storing, processing,
              transferring, and sharing your personal information (including
              sensitive personal information) with trusted third parties or
              service providers for the purposes set out in this Privacy Notice.
              <br></br>
              Personal information subject to this Privacy Notice will be
              collected and retained by Sushas Food Products, with a registered
              office at:
            </p>

            <p>
              <strong>
                Susha's Food Thazhepalam, Tirur Malappuram Dt., Pin: 676 101
              </strong>
            </p>
            <br></br>
            <hr />
            <h3
              id="category-heading"
              class="display-8 fw-bold"
              style={{ color: "#294085" }}
            >
              What Personal Information Do We Collect?
            </h3>

            <p style={{ marginBottom: "0px" }}>
              We collect your personal information in order to provide and
              continually improve our organic products and services.
            </p>
            <p>Types of personal information include:</p>
            <p>
              <ul>
                <li>
                  <strong>Information You Provide:</strong> We receive and store
                  any information you provide in relation to Sushas Food
                  Products services (for example, when you create an account,
                  place an order, or contact customer support).
                </li>
                <li>
                  <strong>Automatic Information:</strong> We may automatically
                  collect information such as device details, browsing activity,
                  and interaction with our website to improve user experience.
                </li>
                <li>
                  <strong>Payment & Transaction Information:</strong>When you
                  make a purchase, payment-related information is collected
                  securely through our payment gateway partners.
                </li>
              </ul>
            </p>
            <hr />
            <h3
              id="category-heading"
              class="display-8 fw-bold"
              style={{ color: "#294085" }}
            >
              For What Purposes Do We Use Your Personal Information?
            </h3>
            <p>We use your personal information to:</p>
            <p>
              <ul>
                <li>
                  Operate, provide, and deliver our organic products and
                  services.
                </li>
                <li>Process orders, payments, and shipments.</li>
                <li>Improve our website, services, and customer experience.</li>
                <li>Comply with legal obligations.</li>
                <li>
                  Send communications such as order updates, promotions, and
                  important notices.
                </li>
              </ul>
            </p>
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Privacypolicy;
