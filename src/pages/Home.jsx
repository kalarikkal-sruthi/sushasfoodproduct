import Header from "../components/Header";
import Categories from "../components/Categories";
import Organicproducts from "../components/Organicproducts";
import Ourcollections from "../components/Ourcollections";
import Instagramfeed from "../components/Instagramfeed";
import Youtubefeed from "../components/Youtubefeed";
import Testimonial from "../components/Testimonial";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";
import Organicproductimage from "../components/Organicproductimage";
import Bannerslider from "../components/Bannerslider";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
   
      <Bannerslider />
      <Organicproducts />
      <Organicproductimage />
      <Categories />
      <Ourcollections />
      <Organicproductimage />
      <Instagramfeed />
      <Youtubefeed />
      {/* <Certificates /> */}
      <Testimonial />
   
    </div>
  );
}
