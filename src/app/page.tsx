import React from "react";
import Hero from "../components/hero";
import Featured from "../components/featured";
import Latest from "../components/latest";
import Blog from "../components/blog";
import TopCatergories from "../components/TopCatagories";
import Unique from "../components/UniqueFeature";
import Trending from "../components/TrendindProducts";
import Discount from "../components/DiscountSection";

//
export default function Home() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <Latest/>
      <Unique />
      <Trending />
      <Discount />
      <TopCatergories />
      <Blog/>
    </div>

    
  );
}
