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

const getYouTubeEmbedURL = (url) => {
  if (!url) return "";
  if (url.includes("youtube.com")) {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("youtu.be")) {
    const videoId = url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url; // fallback
};


  const mainSlideStyle = {
    background: bgColor,
    borderRadius: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", 
    height: "500px", 
  };

 
  const thumbSlideStyle = {
    background: bgColor,
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100px",
  };
  
  const allImages = [{ image: product.image }, ...(product.images || [])];

  return (
    <section aria-label="Product Image Gallery" role="group">
     
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
        className="mySwiper2 mb-2 mb-lg-2"
      >
        {allImages.map((img, index) => (
          <SwiperSlide key={index} style={mainSlideStyle}>
            <img
              src={`${productURL}${img.image}`}
              alt={`${product.product_name || "Product"} - ${index + 1}`}
              loading="lazy"
              decoding="async"
            
             
              onError={(e) => (e.target.src = "/collections/2.png")}
            />
          </SwiperSlide>
        ))}
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
        {allImages.map((img, index) => (
          <SwiperSlide key={index} className="thumb-slide" style={thumbSlideStyle}>
  <img
    src={`${productURL}${img.image}`}
    alt={`Thumbnail ${index + 1}`}
    onError={(e) => (e.target.src = "/collections/2.png")}
  />
</SwiperSlide>
        
        ))}
      </Swiper>

      

  

 {(product.video_link || product.video) && (
  <>
    <h3 className="mt-2 mb-2">How We Make</h3>

    {product.video_link ? (
      <div className="ratio ratio-16x9 mt-3">
        <iframe
          src={getYouTubeEmbedURL(product.video_link)}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    ) : (
      <video
        className="mt-3"
        controls
        autoPlay={false}
        loop={false}
        muted
        style={{ borderRadius: "12px", width: "100%", height: "100%" }}
      >
        <source src={`${productURL}${product.video}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </>
)}



    </section>
  );
};

export default ProductDetailGallery;
