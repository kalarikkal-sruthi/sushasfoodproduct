import { Row, Col,Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgURLVideo } from "../utils/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Youtubefeed = ({ data }) => {
  if (!data || data.length === 0) return null;
  console.log(data);
  
 
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
    <main aria-labelledby="youtube-feed-heading">
    
      <div  className="padding-y mt-5">
      <section  aria-label="YouTube Video Gallery">
        <header className="header-bar">
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
                                      Check Our Youtube Feed
                                  </motion.h2>
                                </header>
            
              </motion.div>
               
            </Col>
          </Row>
        </header>

        <section
          aria-label="YouTube video thumbnails carousel"
          className="mt-4"
        >
          <Swiper
            pagination={{ type: "fraction" }}
            spaceBetween={20}
            slidesPerView={6}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item, idx) => (
              <SwiperSlide key={item.id || idx}>
                <figure>
                  <Link
                   to={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch YouTube video titled "${item.title || `Video ${idx + 1}`}"`}
                  >
                    <img
                      className="youtube-img"
                      src={`${imgURLVideo}${item.image}`}
                      alt={item.title || `YouTube video thumbnail ${idx + 1}`}
                      loading="lazy"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Link>
                  {item.title && (
                    <figcaption className="mt-2 text-muted">
                      {item.title}
                    </figcaption>
                  )}
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
      </div>
    </main>
  );
};

export default Youtubefeed;
