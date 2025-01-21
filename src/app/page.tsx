
import FetchCarsPage from "./fetchcars/page";

import PickDropSection from "@/components/PickDropSection";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PickDropSection/>

      <FetchCarsPage/>
      
    </div>
  );
}
