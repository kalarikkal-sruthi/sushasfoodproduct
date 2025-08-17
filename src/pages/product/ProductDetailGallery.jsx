import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useLocation } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { productURL } from "../../utils/api";
import src1 from "../../assets/productdetail/1.jpeg" 
import src2 from "../../assets/productdetail/2.jpeg"
import src3 from "../../assets/productdetail/main1.jpeg"

const ProductDetailGallery = ({ product }) => {
  const location = useLocation();
  const bgColor = location.state?.bgColor || "#ffffff";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

// Main slide style
const mainSlideStyle = {
  background: bgColor,
  borderRadius: "13px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",        // full width
  height: "500px",      // fixed height for consistency
};

// Thumbnail slide style
const thumbSlideStyle = {
  background: bgColor,
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100px",
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
  <SwiperSlide key={index} style={mainSlideStyle}>
    <img
      src={`${productURL}${img.image}`}
  alt={`${product.product_name || "Product"} - ${index + 1}`}
  loading="lazy"
  decoding="async"
  style={{
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",   // keeps aspect ratio
  }}
  onError={(e) => (e.target.src = "/collections/2.png")}
    />
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
  <SwiperSlide key={index} style={thumbSlideStyle}>
    <img
      src={`${productURL}${img.image}`}
      alt={`Thumbnail ${index + 1}`}
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain",
      }}
      onError={(e) => (e.target.src = "/collections/2.png")}
    />
  </SwiperSlide>
))}
      </Swiper>
      ddddd
       <img style={{width:'100%'}} src={src1} alt="" />
              <img  style={{width:'100%'}}  src={src2} alt="" />
              <img  style={{width:'100%'}}  src={src3} alt="" />
    </section>
  );
};

export default ProductDetailGallery;
