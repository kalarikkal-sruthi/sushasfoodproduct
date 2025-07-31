import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonial() {
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
                    // fontSize: "clamp(2rem, 10vw, 2rem)",

                    zIndex: 2,
                    // y: yTitle,
                    // opacity: opacityTitle,
                    margin: 0,
                  }}
                >
                  Check what people say about
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
          slidesPerView={4.5}
          navigation={true}
          //  autoplay={{ delay: 3000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="testimonial-main-div">
              <div className="testimonial-sub-head">
                <div className="testimonial-head-img">
                  <img src="" alt="" />
                </div>
                <div className="testimonial-head">
                  <h4>Prem Ravi</h4>
                </div>
              </div>
              <div className="testimonial-para">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  odit corporis unde maxime provident enim eius molestias ad, ea
                  quidem blanditiis deleniti iusto mollitia quia dicta harum?
                  Reprehenderit, vel a.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Testimonial;
