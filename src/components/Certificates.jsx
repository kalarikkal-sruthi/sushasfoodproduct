import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificates = () => {
  return (
    <main>
      <section className="padding-horizontal">
        <header
          className="header-bar"
          aria-label="Certificates Section Heading"
        >
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1>Check Our Certificates</h1>
              </div>
            </Col>

            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all farm categories">View All</button>
              </div>
            </Col>
          </Row>
        </header>
        <section aria-label="Certificate Gallery">
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            navigation
            pagination={{ type: "fraction" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper mt-4"
            aria-label="Certificates carousel"
          >
            <SwiperSlide>
              <figure>
                <Image src="" alt="ccc" rounded loading="lazy" width="100%" />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure>
                <Image src="" alt="ccc" rounded loading="lazy" width="100%" />
              </figure>
            </SwiperSlide>{" "}
            <SwiperSlide>
              <figure>
                <Image src="" alt="ccc" rounded loading="lazy" width="100%" />
              </figure>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </main>
  );
};

export default Certificates;
