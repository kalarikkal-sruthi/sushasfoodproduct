import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion, useTransform, useScroll } from "framer-motion";

function Organicproductimage({data}) {
  console.log(data);
  
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="organic-product-image"
      aria-label="Organic Product Image Showcase"
      className="organic-product-image-section"
    >
      <Row
        className="padding-horizontal w-100"
        style={{ position: "relative" }}
      >
        <main ref={container} className="w-100">
          <Section1 scrollYProgress={scrollYProgress} />
          {/* <Section2 scrollYProgress={scrollYProgress} /> */}
        </main>
      </Row>
    </section>
  );
}

const Section1 = () => {
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div
      style={{  position: "sticky", top: 0 }}
      className="sticky top-0 w-100"
    >
      <img
        src="/whatwedo/w-big.png"
        alt="Fresh organic produce display"
        className="w-100"
      />
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div
      style={{ scale, position: "sticky", top: 0 }}
      className="sticky top-0 w-100"
    >
      <img
        src="/whatwedo/w.png"
        alt="Farmers harvesting organic crops"
        className="w-100"
      />
    </motion.div>
  );
};

export default Organicproductimage;
