import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgURLTestimonial } from "../utils/api";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function Testimonial({ data }) {
  if (!data || data.length === 0) return null;
       const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  return (
    <main>

   
    <section  aria-labelledby="testimonial-heading">
      <Container className="mt-5">
      <header className="header-bar">
        <Row className="mb-3">
            <Col>
              <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  variants={scrollVariants}
                  id="extra-harvest-heading"
                  className="fw-bold"
                  style={{ color: "#5caf47" }}
                >
                 Check Our Youtube Feed
                </motion.h2>
              </motion.section>
            </Col>
          </Row>
      </header>

      <Swiper
        pagination={{ type: "fraction" }}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay, A11y]}
        className="mySwiper mt-4"
        aria-label="Customer testimonials carousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <article className="testimonial-main-div" aria-label={`Testimonial by ${item.auther}`}>
              <header className="testimonial-sub-head d-flex align-items-center gap-2">
                <div className="testimonial-head-img">
                  <img
                    src={`${imgURLTestimonial}${item.image}`}
                    alt={`Profile picture of ${item.auther}`}
                    loading="lazy"
                    width={48}
                    height={48}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </div>
                <div className="testimonial-head">
                  <h3 className="mb-0">{item.auther}</h3>
                </div>
              </header>
              <blockquote className="testimonial-para mt-3" cite={item.source || undefined}>
                <p className="mb-0" style={{ fontStyle: "italic" }}>
                  “{item.description?.slice(0, 100)}”
                </p>
              </blockquote>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
        <Row>
            <Col className="text-center">
              <Link to="/morefromharvest">
                <motion.span
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-outline mt-5"
                  style={{
                    borderRadius: "50px",
                    fontWeight: "500",
                    border: "1px solid #294085",
                    backgroundColor: "#294085",
                    color: "#fff",
                  }}
                >
                  View All →
                </motion.span>
              </Link>
            </Col>
          </Row>
      </Container>
    </section>
    </main>
  );
}

export default Testimonial;
