import BannerArea from "@/components/BannerArea";
import BlogArea from "@/components/BlogArea";
import BrandArea from "@/components/BrandArea";
import CounterArea from "@/components/CounterArea";
import FAQ from "@/components/FAQ";
import IntroductionArea from "@/components/IntroductionArea";
import ProjectArea from "@/components/ProjectArea";
import ServicesArea from "@/components/ServicesArea";
import ServicesSlider from "@/components/ServicesSlider";
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
     <CounterArea/>
     <BlogArea/>
     <BrandArea/>
    </>
  )
}
