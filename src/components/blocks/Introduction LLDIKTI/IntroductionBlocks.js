"use client";

import IntroImage from "@/components/ui/IntroImage";
import IntroHeadline from "@/components/ui/IntroHeadline";
import IntroContent from "@/components/ui/IntroContent";
import { introductionData } from "@/constant/IntroductionData";

export default function IntroductionBlock() {
  return (
    <div className="
      grid 
      grid-cols-1 
      lg:grid-cols-2 
      gap-10 
      lg:gap-16 
    ">

      {/* Image Left */}
      <IntroImage image={introductionData.image}/>

      {/* Text Right */}
      <div className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
        <IntroHeadline headline={introductionData.headline} />
        <IntroContent content={introductionData.content} />
      </div>

    </div>
  );
}
