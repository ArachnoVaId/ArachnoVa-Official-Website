import Image from "next/image";
import Hero from "@/components/MainPage/Hero";
import PortoSection from "@/components/MainPage/PortoSection";
import AboutUs from "@/components/MainPage/AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <PortoSection />
    </>
  );
}
