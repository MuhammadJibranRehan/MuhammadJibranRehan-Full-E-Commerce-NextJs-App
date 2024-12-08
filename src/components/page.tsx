import Blog from "@/components/blog";
import DiscountSection from "@/components/DiscountSection";
import FeaturedProducts from "@/components/featured";
import Hero from "@/components/hero";
import LatestProduct from "@/components/latest";
import TopCatagories from "@/components/TopCatagories";
import TrendindProducts from "@/components/TrendindProducts";
import UniqueFeature from "@/components/UniqueFeature";

export default function HomePage() {
  return (
    <div className="text-[#151875] font-sans">
      <Hero/>
      <FeaturedProducts/>
      <LatestProduct/>
      <UniqueFeature/>
      <TrendindProducts/>
      <DiscountSection/>
      <TopCatagories/>
      <Blog/>
    </div>
  );
}