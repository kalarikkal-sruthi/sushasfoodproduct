import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Organicproducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <Row>
          <Col xs={12} md={12}>
            <div className="organic-product-contents">
              <div className="heading-main">
                <motion.h1
                  ref={ref}
                  initial={{ opacity: 0, y: 100 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className="scroll-section"
                  style={{
                    position: "sticky",
                    top: "30vh",
                    textAlign: "center",
                    fontSize: "clamp(3rem, 10vw, 4rem)",

                    zIndex: 2,
                    // y: yTitle,
                    // opacity: opacityTitle,
                    margin: 0,
                  }}
                >
                  About Sushas Prakash Organic Farm
                </motion.h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate itaque excepturi dolores, enim vero cum nostrum
                voluptates assumenda doloribus quia iusto eligendi nam qui
                minima odit, nisi illo! Quidem, animi Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Harum, minus et, in ut
                repellat nulla dolorum suscipit architecto ea pariatur enim
                veritatis aperiam atque aliquam odio ullam dignissimos, omnis
                ex! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque deleniti, rerum ullam dolor cupiditate obcaecati enim sint
                ex aliquam fuga quis alias nulla incidunt deserunt possimus
                provident quia reiciendis reprehenderit? . Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptate itaque excepturi
                dolores, enim vero cum nostrum voluptates assumenda doloribus
                quia iusto eligendi nam qui minima odit, nisi illo! Quidem,
                animi Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Harum, minus et, in ut repellat nulla dolorum suscipit
                architecto ea pariatur enim
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
