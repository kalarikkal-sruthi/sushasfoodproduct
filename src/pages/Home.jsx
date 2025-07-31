import React, { useEffect } from "react";

import Categories from "../components/Categories";
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

export default function Home() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.homeData);

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  console.log(data);
  const categories = data?.categories || [];
  // if (loading) return <p>Loading.........</p>;
  // if (error)   return <p>Error   {error}</p>;
  // if(!data)    return null;

  return (
    <div>
      <Helmet>
        <title>Sushas Food Product</title>
        <meta
          name="description"
          content="Explore our organic products and collections."
        />
      </Helmet>
      <Bannerslider />
      <Organicproducts />
      <Organicproductimage />
      <Categories data={categories} />
      <Ourcollections />

      <Instagramfeed />
      <Youtubefeed />
      <Certificates />
      <Testimonial />
    </div>
  );
}
