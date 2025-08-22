import { Row, Col, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgURLVideo } from "../utils/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Instagramfeed({ data }) {
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
    <main aria-labelledby="extra-harvest-heading">
      <div  className="padding-y mt-5">
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
                 Check Our Instagram Feed
                </motion.h2>
              </motion.section>
            </Col>
          </Row>
        <section
          aria-label="YouTube video thumbnails carousel"
         
        >
          <Swiper
            pagination={{ type: "fraction" }}
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            aria-label="Instagram Image Carousel"
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link
                  href={item.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram link"
                >
                  <figure>
                    <img
                      src={`${imgURLVideo}${item.image}`}
                      alt={`Instagram Post ${idx + 1}`}
                      loading="lazy"
                      className="insta-img"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </figure>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </main>
  );
}

export default Instagramfeed;
