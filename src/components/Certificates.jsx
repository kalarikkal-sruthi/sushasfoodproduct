import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { imgURLCertificate } from "../utils/api";

function Certificate({ data }) {
  const scrollVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", ease: "easeOut", duration: 0.8 },
    },
  };

  if (!data || data.length === 0) {
    return (
      <section aria-label="Certificates section" className="text-center mt-5">
        <Container>
          <h2 className="fw-bold mb-3">Our Certificates</h2>
          <p>No certificates available at the moment.</p>
        </Container>
      </section>
    );
  }

  return (
    <main>
      <Container className="mt-5">
        <section aria-labelledby="certificates-heading" className="">
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
            className=""
          >
            <motion.h3
              variants={scrollVariants}
              id="certificates-heading"
              className=" fw-bold mb-4 "
              style={{color:"#294085"}}
            >
              Our Recognized Certificates
            </motion.h3>
          </motion.section>

          <Swiper
            // pagination={{ type: "fraction" }}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className="mySwiper"
            aria-label="Certificates carousel"
          >
            {data.map((item, index) => (
              <SwiperSlide key={item.id || index}>
                <figure
                  className="certificate-main-div text-center"
                  style={{
                    width: "75%",
                    margin: "0 auto",
                    display: "block",
                  }}
                >
                  <img
                   className="rounded"
                    src={`${imgURLCertificate}${item.image}`}
                    alt={item.title ? item.title : `Certificate ${item.id}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                     
                      margin: "0 auto",
                      display: "block",
                    }}
                  />
                  {item.title && (
                    <figcaption className="mt-2 text-muted small">
                      {item.title}
                    </figcaption>
                  )}
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </main>
  );
}

export default Certificate;
