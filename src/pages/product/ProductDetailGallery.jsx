import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useLocation } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { productURL } from "../../utils/api";

const ProductDetailGallery = ({ product }) => {
  const location = useLocation();
  const bgColor = location.state?.bgColor || "#ffffff";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gallerySlideStyle = {
    background: bgColor,
    borderRadius: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  };

  // Merge the main product.image with the array product.images
  const allImages = [
    { image: product.image },
    ...(product.images || []),
  ];

  return (
    <section aria-label="Product Image Gallery" role="group">
      {/* Main Image Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-3"
      >
        {allImages.map((img, index) => (
          <SwiperSlide key={index} style={gallerySlideStyle}>
            <figure style={{ margin: 0 }}>
              <img
                src={`${productURL}${img.image}`}
                alt={`${product.product_name || "Product"} - ${index + 1}`}
                loading="lazy"
                decoding="async"
                style={{
                  width: "80%",
                  height: "auto",
                  objectFit: "contain",
                  maxHeight: "500px",
                }}
                onError={(e) => (e.target.src = "/collections/2.png")}
              />
              <figcaption className="visually-hidden">
                {product.product_name}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        aria-label="Product Thumbnails"
      >
        {allImages.map((img, index) => (
          <SwiperSlide key={index} style={gallerySlideStyle}>
            <img
              src={`${productURL}${img.image}`}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                maxHeight: "100px",
              }}
              onError={(e) => (e.target.src = "/collections/2.png")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductDetailGallery;
