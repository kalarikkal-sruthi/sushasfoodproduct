import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { imgURL } from "../../utils/api";

const ProductDetailGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const productImage = product?.product_image
    ? `${imgURL}${product.product_image}`
    : "/collections/2.png";

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
        <SwiperSlide>
          <figure>
            <img
              src={productImage}
              alt={product.product_name || "Product image"}
              loading="lazy"
              style={{ width: "100%", borderRadius: "8px", objectFit: "cover" }}
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
        <SwiperSlide>
          <img
            src={productImage}
            alt={`Thumbnail of ${product.product_name}`}
            loading="lazy"
            style={{ borderRadius: "6px", objectFit: "cover", width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductDetailGallery;
