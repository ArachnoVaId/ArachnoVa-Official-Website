"use client"

import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

const ServicesHero = () => {
	useEffect(() => {
		AOS.init({
		  duration: 1500,
		});
	  }, []);
	return (
		<section className="relative w-full lg:min-h-[53.021vw] min-h-[190.465vw] flex flex-col justify-center items-center bg-white-MainPage lg:gap-y-[3.125vw]">
			<div className="absolute top-[4.271vw] w-full aspect-[1920/458] z-0 lg:flex hidden">
				<Image
					src="/image/OurServices/ServicesHero/bg.png"
					alt="bg"
					draggable="false"
					fill
					className="object-contain"
				/>
			</div>
			<div className="absolute top-[0] w-full aspect-[430/195] z-0 lg:hidden">
				<Image
					src="/image/OurServices/ServicesHero/bg-mobile.png"
					alt="bg"
					draggable="false"
					fill
					className="object-contain"
				/>
			</div>
			<div className="lg:w-[43.981vw] w-[68.442vw] flex flex-col justify-center items-center mb-[15.767vw] lg:mb-0" data-aos="fade-down">
				<p className="font-SourceSansProBold lg:text-[1.563vw] text-[4.186vw] bg-clip-text text-transparent bg-gradient-to-r from-[#0893D4] via-[#44C4D9] to-[#159E8D]">
					Strategic Services Suite
				</p>
				<h1 className="font-SourceSansProBold lg:text-[2.396vw] text-[6.977vw] text-neutral-g lg:leading-[2.448vw] leading-[6.977vw] text-center">
					Elevate Your Potential with Our Expertise
				</h1>
			</div>
			<div className="flex lg:flex-row flex-col lg:w-[72.917vw] w-[90.698vw] lg:h-[26.042vw] h-[131.86vw] lg:justify-around justify-between items-center">
				<ServiceCard
					Title="Landing Page"
					Description="Fokus pada pengalihan informasi tertentu seperti promosi kegiatan/produk dan Call to Action."
					src="/image/OurServices/ServicesHero/icon-landingpage.png"
					href="#ServicesLandingPage"
				/>
				<ServiceCard
					Title="Profiling Page"
					Description="Memberikan informasi menyeluruh tentang organisasi atau acara melalui navigasi halaman."
					src="/image/OurServices/ServicesHero/icon-profilingpage.png"
					href="#ServicesProfilingPage"
				/>
				<ServiceCard
					Title="Custom Web"
					Description="Memiliki fitur yang dilengkapi sistem berbasis database sesuai kebutuhan klien."
					src="/image/OurServices/ServicesHero/icon-customweb.png"
					href="#ServicesCustomWeb"
				/>
			</div>
		</section>
	);
};

export default ServicesHero;
