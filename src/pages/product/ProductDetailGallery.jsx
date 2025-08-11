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
   const location =useLocation()
  console.log(product);
  const bgColor = location.state?.bgColor || "#ffffff";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const productImage = product?.product_image
  //   ? `${imgURL}${product.product_image}`
  //   : "/collections/2.png";

  return (
    <section aria-label="Product Image Gallery">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-3"
      >
        <SwiperSlide
          style={{
            width: "70%",
            objectFit: "cover",
            borderRadius: "13px",
          background: bgColor }}
        >
          <figure>
            <img
              
              style={{ width: "60%", margin: "auto" }}
              src={`${productURL}${product.image}`}
              alt={product.product_name || "Product image"}
              loading="lazy"
              onError={(e) => (e.target.src = "/collections/2.png")}
            />
            <figcaption className="visually-hidden">
              {product.product_name}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
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
        <SwiperSlide
          style={{
            width: "70%",
            objectFit: "cover",
            borderRadius: "13px",
            background: bgColor 
          }}
        >
          <img
            src={`${productURL}${product.image}`}
            alt={`Thumbnail of ${product.product_name}`}
            loading="lazy"
            style={{ width: "60%", margin: "auto", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductDetailGallery;
