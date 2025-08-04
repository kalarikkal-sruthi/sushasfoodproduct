import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { videoURL } from "../utils/api";

function Bannerslider({ data }) {
  const isLooping = data.length > 3;

  return (
    <section aria-label="Promotional Video Banner" className="banner-slider">
      <Swiper
        pagination={{ type: "fraction" }}
        loop={isLooping}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <video
                className="video"
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                aria-label={`Promotional video ${index + 1}`}
              >
                <source
                  src={`${videoURL}${item.video}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <div className="video-text">
                <h1>Welcome to</h1>

                <motion.h1
                  style={{ color: "#3f69e2" }}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Susha's Prakash Farm
                </motion.h1>

                <p>
                  Our work on the farm involves planting, harvesting, and
                  taking care of animals.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Bannerslider;
