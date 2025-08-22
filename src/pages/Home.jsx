import React, { useEffect } from "react";

import Instagramfeed from "../components/Instagramfeed";
import Youtubefeed from "../components/Youtubefeed";
import Testimonial from "../components/Testimonial";
import Certificates from "../components/Certificates";

import Bannerslider from "../components/Bannerslider";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/homeDataSlice";
import Aboutfarm from "../components/Aboutfarm";
import WhatWeDo from "../components/WhatWeDo";

import ValueAddedProducts from "../components/ValueAddedProducts";
import Ourstory from "../components/Ourstory";
import Mostharvestcrops from "../components/Mostharvestcrops";
import Extraharvestcrops from "../components/Extraharvestcrops";

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.homeData);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  console.log(data);
  const homeVideoInGallary = data?.homeVideoInGallary || [];
  // const whatInFarms = data?.whatInFarms || [];
  const products = data?.products || [];
  const testimonials = data?.testimonial || [];
  const certificates = data?.certificates || [];
  const videoInstagram = data?.videoInstagram || [];
  const videoYoutube = data?.videoYoutube || [];

  // const aboutusImage = data?.aboutusImage || [];
  // const categories = data?.categories || [];
  // const categories = data?.categories || [];
  // if (loading) return <p>Loading.........</p>;
  // if (error)   return <p>Error   {error}</p>;
  // if(!data)    return null;

  return (
    <div>
      <Helmet>
        <title>Susah's Prakash Farm | Organic Food</title>
        <meta
          name="description"
          content="Explore our premium range of value-added farm products, crafted with care to deliver freshness, health, and sustainability from our fields to your table."
        />
        <meta
          name="keywords"
          content="farm products, organic produce, value added products, fresh produce, healthy food"
        />
      </Helmet>
      <Bannerslider data={homeVideoInGallary} />
      <Aboutfarm />
      <Ourstory />
      <Certificates data={certificates} />
      <WhatWeDo />

      <Mostharvestcrops />

      <Extraharvestcrops />

      <ValueAddedProducts data={products} />
      <Instagramfeed data={videoInstagram} />
      <Youtubefeed data={videoYoutube} />
      <Testimonial data={testimonials} />
    </div>
  );
}
