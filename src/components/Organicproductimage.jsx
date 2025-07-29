import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

function Organicproductimage() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end "],
  });
  return (
    <div>
      <Row className="padding-horizontal" style={{ position: "relative" }}>
        <main ref={container}>
          <Section1 scrollYProgress={scrollYProgress} />
          <Section2 scrollYProgress={scrollYProgress} />
        </main>
      </Row>
    </div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <motion.div
      style={{ scale, rotate, position: "sticky", top: "0" }}
      className="sticky top-0 w-100"
    >
      <img src="/public/whatwedo/o-one.png" alt="" className="w-100" />
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.div style={{ scale, rotate, position: "sticky" }}>
      <img src="/public/whatwedo/m-2.png" alt="" className="w-100" />
    </motion.div>
  );
};

export default Organicproductimage;
