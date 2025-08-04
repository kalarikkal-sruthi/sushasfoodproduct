import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Instagramfeed = () => {
  const images = [
    { src: "/insta/1.png", alt: "Instagram Post 1" },
    { src: "/insta/2.png", alt: "Instagram Post 2" },
    { src: "/insta/3.png", alt: "Instagram Post 3" },
    { src: "/insta/4.png", alt: "Instagram Post 4" },
    { src: "/insta/5.png", alt: "Instagram Post 5" },
  ];

  return (
    <main>
      <section className="padding-horizontal">
        <header className="header-bar" aria-label="Instagram Feed Section">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1> Check Our Instagram Feed</h1>
              </div>
            </Col>

            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all farm categories">View All</button>
              </div>
            </Col>
          </Row>
        </header>
        <section aria-label="Instagram Image Carousel" className="mt-4">
          <Swiper
            pagination={{ type: "fraction" }}
            spaceBetween={20}
            slidesPerView={4}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <figure>
                  <img
                    className="insta-img"
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
};

export default Instagramfeed;
