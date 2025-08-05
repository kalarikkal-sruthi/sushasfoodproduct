import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  imgURLTestimonial } from "../utils/api";
function Testimonial({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <section>
      <section className="padding-horizontal" aria-label="Testimonials">
        <header className="header-bar">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1>What Our Customers Say</h1>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all testimonials">View All</button>
              </div>
            </Col>
          </Row>
        </header>

        <Swiper
          pagination={{ type: "fraction" }}
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          className="mySwiper mt-4"
          aria-label="Customer testimonials carousel"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <figure className="testimonial-main-div">
                <figcaption className="testimonial-sub-head d-flex align-items-center gap-2">
                  <div className="testimonial-head-img">
                    <img
                      src={`${imgURLTestimonial}${item.image}`}
                      alt={`${item.auther}'s testimonial`}
                      loading="lazy"
                      width={48}
                      height={48}
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="testimonial-head">
                    <h5 className="mb-0">{item.auther}</h5>
                  </div>
                </figcaption>
                <blockquote className="testimonial-para mt-3">
                  <p className="mb-0" style={{ fontStyle: "italic" }}>
                    “{item.description?.slice(0, 100)}”
                  </p>
                </blockquote>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default Testimonial;