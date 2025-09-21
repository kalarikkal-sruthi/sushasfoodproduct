import { Row, Col } from "react-bootstrap";
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
    <main aria-labelledby="extra-harvest-heading">
      <div className="padding-y mt-5">
        <Row className="mb-3">
          <Col>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <header>
                <motion.h2
                  id="our-story-heading"
                  className="display-5 fw-bold mb-3"
                  style={{ color: "#294085" }}
                  variants={itemVariants}
                >
                  Check Our Instagram Feed
                </motion.h2>
              </header>
            </motion.div>
          </Col>
        </Row>
        <section aria-label="YouTube video thumbnails carousel">
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
                  to={item.video}
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
