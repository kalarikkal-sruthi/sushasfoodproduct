import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgURLVideo } from "../utils/api";

const Youtubefeed = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <main>
      <section className="padding-horizontal" aria-label="YouTube Feed Section">
        <header className="header-bar">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1>Check Our YouTube Feed</h1>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all YouTube videos">View All</button>
              </div>
            </Col>
          </Row>
        </header>

        <section aria-label="YouTube video thumbnails carousel" className="mt-4">
          <Swiper
            pagination={{ type: "fraction" }}
            spaceBetween={20}
            slidesPerView={6}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <figure>
                  <a
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch video ${item.id}`}
                  >
                    <img
                      className="youtube-img"
                      src={`${imgURLVideo}${item.image}`}
                      alt={`YouTube video thumbnail ${item.id}`}
                      loading="lazy"
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </a>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
};

export default Youtubefeed;