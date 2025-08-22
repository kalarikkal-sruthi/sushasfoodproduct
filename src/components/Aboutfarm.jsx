import { motion } from "framer-motion";
import { Container, Row, Col, Image } from "react-bootstrap";

const Aboutfarm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main>
      <div className="padding-top"></div>
      <div  className="padding-y mt-5">
        <section
          aria-labelledby="about-heading"
          className="about-farm-section"
        >
          <Row className="align-items-center justify-content-center">
            <Col md={7} className="pe-md-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                <header>
                  <motion.h1
                    id="about-heading"
                    className="display-4 fw-bold"
                    variants={itemVariants}
                    style={{ color: "#294085" }}
                  >
                    About Susha's Prakash Farm
                  </motion.h1>
                  <motion.p
                    className="lead text-muted"
                    variants={itemVariants}
                  >
                    A sustainable <strong>organic farm in Kerala</strong>,
                    committed to regenerative agriculture and healthy
                    communities.
                  </motion.p>
                </header>

                <article>
                  <motion.p variants={itemVariants}>
                    Meet <strong>P T Sushama</strong>, the founder of Susha's
                    Prakash Organic Farms. Inspired by my husband Prakash, who
                    has been a role model in agriculture, our farm is dedicated
                    to the mutual flourishing of people and nature.
                  </motion.p>

                  <motion.p variants={itemVariants}>
                    Our mission is to foster a healthy community by providing
                    affordable <strong>organic produce</strong> while upholding{" "}
                    <strong>sustainable farming practices</strong> that
                    rejuvenate nature. Our regenerative methods improve soil
                    health, promote biodiversity, and cultivate the most
                    nutrient-dense food possible.
                  </motion.p>

                  <motion.p variants={itemVariants}>
                    We have received many recognitions for our contribution to
                    sustainable agriculture. From our harvest, we create{" "}
                    <strong>value-added products</strong> which are sold in our
                    farm outlet, ensuring freshness and quality straight from
                    the source.
                  </motion.p>
                </article>
              </motion.div>
            </Col>

            {/* Image Section */}
            <Col md={5}>
              <motion.figure
                style={{ textAlign: "center" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8 },
                  },
                }}
              >
                <Image
                  src="/images/auth/reg.png"
                  alt="Founder P T Sushama at Susha's Prakash Organic Farm in Kerala"
                  fluid
                  rounded
                  className="shadow-lg w-50 m-auto"
                />
                <figcaption className="mt-2 text-muted small">
                  Founder P T Sushama, dedicated to sustainable organic farming
                  in Kerala.
                </figcaption>
              </motion.figure>
            </Col>
          </Row>
        </section>
      </div>
    </main>
  );
};

export default Aboutfarm;
