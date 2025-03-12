import Doctors from "@/components/ui/doctors/doctors";
import HeroSection from "@/components/ui/HeroSection";
import HowItWorksSection from "@/components/ui/howItWorks/HowItWorks";
import Specialties from "@/components/ui/specialties/Specialties";
import WhyUs from "@/components/ui/whyUs/whyUs";


export default function Home() {
  return (
    <>
     <HeroSection/>
     <Specialties/>
     <Doctors/>
     <WhyUs />
     <HowItWorksSection />

    </>
  );
}
