import React, { useEffect } from "react";

import Categories from "../components/Whatwedoinfarm";
import Organicproducts from "../components/Organicproducts";
import Ourcollections from "../components/Ourcollections";
import Instagramfeed from "../components/Instagramfeed";
import Youtubefeed from "../components/Youtubefeed";
import Testimonial from "../components/Testimonial";
import Certificates from "../components/Certificates";
import Organicproductimage from "../components/Organicproductimage";
import Bannerslider from "../components/Bannerslider";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "../store/homeDataSlice";
import Banner from "../components/Banner";
import TestAbout from "../components/TestAbout";
import WhatWeDo from "../components/WhatWeDo";
import TestWhatWeDo from "../components/WhatWeDo";
import ValueAddedProducts from "../components/ValueAddedProducts";
import Ourstory from "../components/Ourstory";

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
        <title>Susha's Food Products</title>
        <meta
          name="description"
          content="Explore our organic products and collections."
        />
      </Helmet>
      <Bannerslider data={homeVideoInGallary} />
      <TestAbout />
      <Ourstory />
      <Certificates data={certificates} />
      <WhatWeDo />
      <ValueAddedProducts data={products} />

      {/* <Organicproducts /> */}
      {/* <Banner data={aboutusImage}/> */}
      {/* <Organicproductimage data={aboutusImage} /> */}
      {/* <Categories data={whatInFarms} /> */}
      {/* <Ourcollections data={products} /> */}
      {/* <Organicproductimage data={aboutusImage} />
      <TestAbout /> */}
      <Instagramfeed data={videoInstagram} />
      <Youtubefeed data={videoYoutube} />

      {/* <Testimonial /> */}
      <Testimonial data={testimonials} />
    </div>
  );
}
