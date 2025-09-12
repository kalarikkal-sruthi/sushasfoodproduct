import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const WhatWeDo = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <main aria-labelledby="what-we-do-title">
      <div className="padding-y mt-3 mt-lg-5">
        <section aria-labelledby="what-we-do-title">
          <Row className="mb-3 mb-lg-5">
            <Col>
                            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
              >
                 <header>
                                  <motion.h1
                                    id="our-story-heading"
                                    className="display-lg-1 display-6   fw-bold mb-1 mb-lg-3 "
                                    style={{ color: "#294085" }}
                                    variants={itemVariants}
                                  >
                                      What We Do Prakash Farm
                                  </motion.h1>
                                </header>
            
              </motion.div>
       
              <p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="lead text-muted mb-0"
              >
                At <strong>Susha's Prakash Organic Farm</strong>, we grow
                nutrient-rich organic crops using sustainable farming practices
                that protect the environment and support local communities. From
                rice cultivation and seasonal vegetables to value-added farm
                products, our mission is to deliver healthy food while caring
                for the land.
              </p>
            </Col>
          </Row>
        </section>
      </div>
    </main>
  );
};

export default WhatWeDo;
