import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet-async";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Youtubefeed = () => {
  const videos = [
    { src: "/youtube/1.png", alt: "YouTube video thumbnail 1" },
    { src: "/youtube/2.png", alt: "YouTube video thumbnail 2" },
    { src: "/youtube/3.png", alt: "YouTube video thumbnail 3" },
    { src: "/youtube/4.png", alt: "YouTube video thumbnail 4" },
    { src: "/youtube/5.png", alt: "YouTube video thumbnail 5" },
  ];
  return (
    <main>
      <section className="padding-horizontal" aria-label="YouTube Feed Section">
        <header className="header-bar">
          <Row>
            <Col xs={12} md={6} className="heading-main-div">
              <div className="heading-main">
                <h1> Check Our YouTube Feed</h1>
              </div>
            </Col>

            <Col xs={12} md={6} className="text-md-end mt-3 mt-md-0">
              <div className="view-all-button">
                <button aria-label="View all farm categories">View All</button>
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
            slidesPerView={4}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <figure>
                  <img
                    className="youtube-img"
                    src={video.src}
                    alt={video.alt}
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

export default Youtubefeed;
