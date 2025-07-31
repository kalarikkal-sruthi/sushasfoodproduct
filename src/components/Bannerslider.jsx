import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Bannerslider({data}) {

  console.log('data',data);
  
  return (
    <div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
  {data.map(item => (

             <SwiperSlide>

        
          <div className="video-container">
            <video className="video" loop muted autoPlay>
              <source src="" type="video/mp4" />
           
            </video>

            <div className="video-text">
              <h1>{item.id}</h1>

              <motion.h1
                style={{ color: "#3f69e2" }}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Sushas Prakash Farm
              </motion.h1>
              <p>
                Our work on the farm involves planting, harvesting, and taking
                care of animals.
              </p>
            </div>
          </div>
        </SwiperSlide>
          ))}
       
       
      </Swiper>
    </div>
  );
}

export default Bannerslider;
