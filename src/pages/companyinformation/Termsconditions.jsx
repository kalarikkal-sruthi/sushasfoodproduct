import React from "react";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";

function Termsconditions() {
  return (
    <div>
        <Helmet>
              <title> Terms And Conditions | Susha's Foods | Prakash Farm | Organic Food </title>
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
                Terms and Conditions
              </motion.h1>
            </Col>
          </Row>
          <Row>
            <p>
              Welcome to <strong>Sushas Food Products</strong>. If you continue
              to browse and use this website, you are agreeing to comply with
              and be bound by the following Terms and Conditions of use, which
              together with our Privacy Policy govern Sushas Food Products’
              relationship with you in relation to this website.
            </p>
            <p>
              The term <strong>‘Sushas Food Products’</strong>,{" "}
              <strong>‘sushasfoodproducts.com’</strong> ,<strong>‘us’</strong>{" "}
              or <strong>‘we’</strong> refers to the owner of the website whose
              registered office is in <strong>Kerala, India.</strong> The term{" "}
              <strong>‘you’</strong> refers to the user or viewer of our
              website.
            </p>

            <p>
              The use of this website is subject to the following terms of use:
            </p>

            <p>
              <ul>
                <li>
                  The content on the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </li>
                <li>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness, or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors, and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </li>
                <li>
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                  It shall be your responsibility to ensure that any products,
                  services, or information available through this website meet
                  your specific requirements.
                </li>
                <li>
                  This website contains material which is owned by or licensed
                  to us. This includes, but is not limited to, the design,
                  layout, look, appearance, and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these Terms and Conditions.
                </li>

                <li>
                  All trademarks reproduced on this website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </li>
                <li>
                  Unauthorized use of this website may give rise to a claim for
                  damages and/or be a criminal offence
                </li>
                <li>
                  From time to time, this website may also include links to
                  other websites. These links are provided for your convenience
                  to provide further information. They do not signify that we
                  endorse the website(s), and we have no responsibility for the
                  content of the linked website(s).
                </li>

                <li>
                  You may not create a link to this website from another website
                  or document without Sushas Food Products’ prior written
                  consent.
                </li>

                <li>
                  Your use of this website and any dispute arising out of such
                  use of the website is subject to the laws of India or other
                  applicable regulatory authority.
                </li>
              </ul>
            </p>

            <p>Additional conditions:</p>
            <p>
              <ul>
                <li>
                  We reserve the right (but not the obligation) to remove,
                  refuse, delete, or edit any reviews, comments, suggestions,
                  ideas, questions, or other content posted on our website by
                  you.
                </li>
                <li>
                  We list availability information for products sold by us on
                  the website, including on each product information page.
                  Beyond what we say on that page or elsewhere on the website,
                  we cannot be more specific about availability. Please note
                  that dispatch estimates are just that—they are not guaranteed
                  dispatch times and should not be relied upon as such. As we
                  process your order, you will be informed via email or call if
                  any products you order turn out to be unavailable.
                </li>
                <li>
                  We, as a merchant, reserve the right to refuse service and/or
                  terminate accounts without prior notice if these Terms and
                  Conditions are violated or if we decide, in our sole
                  discretion, that it would be in Sushas Food Products’ best
                  interests to do so.
                </li>
                <li>
                  You are solely responsible for all content that you upload,
                  post, email, or otherwise transmit via our site. The
                  information you provide to us shall be maintained by us in
                  accordance with our Privacy Policy.
                </li>
                <li>
                  We, as a merchant, shall be under no liability whatsoever in
                  respect of any loss or damage arising directly or indirectly
                  out of the decline of authorization for any transaction, on
                  account of the cardholder having exceeded the preset limit
                  mutually agreed by us with our acquiring bank from time to
                  time.
                </li>
              </ul>
            </p>
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Termsconditions;
