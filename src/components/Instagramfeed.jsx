import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Instagramfeed() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div>
      <div className="padding-top"></div>
      <section className="padding-horizontal">
        <section className="header-bar">
          <Row>
            <Col xs={6} md={6} className="heading-main-div">
              {" "}
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
                    zIndex: 2,
                    margin: 0,
                  }}
                >
                  Check Our Instagram Feed
                </motion.h1>
              </div>
            </Col>
            <Col xs={6} md={6} className="view-all-buttom-main">
              {" "}
              <div className="view-all-button">
                <a href="">
                  <button>View All</button>
                </a>
              </div>
            </Col>
          </Row>
        </section>

        <Swiper
          pagination={{
            type: "fraction",
          }}
          spaceBetween={20}
          slidesPerView={4.4}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="insta-img" src="/public/insta/1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="insta-img" src="/public/insta/2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="insta-img" src="/public/insta/3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="insta-img" src="/public/insta/4.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="insta-img" src="/public/insta/5.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Instagramfeed;
