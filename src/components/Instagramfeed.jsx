import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { imgURLVideo } from "../utils/api";

function Instagramfeed({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <main>
      <section className="instagram-section padding-horizontal">
        <header className="header-bar">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1>Check Our Instagram Feed</h1>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all Instagram posts">View All</button>
              </div>
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
            loop={true}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            aria-label="Instagram Image Carousel"
          >
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <a
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
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
}

export default Instagramfeed;
