import BannerArea from "@/components/BannerArea";
import FAQ from "@/components/FAQ";
import IntroductionArea from "@/components/IntroductionArea";
import ProjectArea from "@/components/ProjectArea";
import ServicesArea from "@/components/ServicesArea";
import ServicesSlider from "@/components/ServicesSlider";
import SliderSection from "@/components/SliderSection";
import TestimonialArea from "@/components/TestimonialArea";

export default function Home() {
  return (
    <>
     <BannerArea/> 
     <ServicesArea/>
     <IntroductionArea/>
     <ServicesSlider/>
     <FAQ/>
     <TestimonialArea/>
     <ProjectArea/>
    </>
  )
}
