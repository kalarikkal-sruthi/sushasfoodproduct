import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import key1 from "../assets/ourkey/icon1.png";
import key2 from "../assets/ourkey/icon2.png";
import key3 from "../assets/ourkey/icon3.png";
import key4 from "../assets/ourkey/icon4.png";

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

  const services = [
    {
      title: "Organic",
      image: key1,
      description: "Certified organic farming practices.",
    },
    {
      title: "High Quality",
      image: key2,
      description: "Premium quality produce from our farm.",
    },
    {
      title: "Happy Customer",
      image: key3,
      description: "Trusted by our valued customers.",
    },
    {
      title: "50+ Varieties",
      image: key4,
      description: "Wide variety of fresh farm produce.",
    },
  ];

  return (
    <main>
      <Container className="mt-4">
        <section aria-labelledby="certificates-heading">
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={scrollVariants}
              id="certificates-heading"
              className="fw-bold mb-4"
              style={{ color: "#5caf47" }}
            >
              Our Recognized Certificates
            </motion.h2>
          </motion.section>

          <Swiper
            // spaceBetween={10}
            slidesPerView={4}
            loop={true}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay, A11y]}
            className="mySwiper"
            aria-label="Certificates carousel"
          >
            {data.map((item, index) => {
              const certTitle = item.title || `Certificate ${index + 1}`;
              return (
                <SwiperSlide key={item.id || index}>
                  <figure
                    className="certificate-main-div text-center"
                    style={{
                      // width: "100%",
                      height: "400px",
                      objectFit: "contain",
                      // margin: "0 auto",
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      className="rounded"
                      src={`${imgURLCertificate}${item.image}`}
                      alt={`${certTitle} - Organic & Sustainable Farming Certification`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "contain",
                        // height:"400px",
                        borderRadius: "12px",
                      }}
                    />
                    {item.title && (
                      <figcaption className="mt-2 text-muted small">
                        {item.title}
                      </figcaption>
                    )}
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section
          className="key-features mt-5"
          aria-labelledby="key-features-heading"
        >
          <div className="key-feature-container">
            {services.map((service, index) => (
              <div className="key-feature-card text-center" key={index}>
                <img
                  src={service.image}
                  alt={`${service.title} - ${service.description}`}
                  loading="lazy"
                />
                <h3 className="mt-3">{service.title}</h3>
                <p style={{ color: "#fff" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

export default Certificate;
