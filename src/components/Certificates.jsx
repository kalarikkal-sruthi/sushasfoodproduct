import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { imgURLCertificate } from "../utils/api";

function Certificate({ data }) {
  if (!data || data.length === 0) return <p className="text-center mt-4">No certificates available.</p>;
  return (
    <section>
      <section className="padding-horizontal" aria-label="Certificates">
        <header className="header-bar">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1>Check Our Certificates</h1>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all certificates">View All</button>
              </div>
            </Col>
          </Row>
        </header>

        <Swiper
          pagination={{ type: "fraction" }}
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          className="mySwiper mt-4"
          aria-label="Certificates carousel"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <figure className="certificate-main-div text-center">
             <img
                src={`${imgURLCertificate}${item.image}`}
                alt={`Certificate ${item.id}`}
                loading="lazy"
                width="80%" 
                style={{
                  maxHeight: "200px",
                  objectFit: "contain", 
                  borderRadius: "10px",
                  margin: "0 auto",
                  display: "block",
                }}
              />

              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}

export default Certificate;