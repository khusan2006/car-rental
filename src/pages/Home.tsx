import Banner from "@/components/Banner";
import Cars from "@/components/Cars";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import ChooseUS from "@/components/ChooseUS";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-gradient-to-br from-teal-100 via-teal-50 to-white bg-no-repeat min-h-[150vh] bg-right-top relative">
      {/* Subtle pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_teal-600_1px,_transparent_1px)] bg-[length:50px_50px] pointer-events-none z-0"></div>
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <Navbar />
        <ResponsiveNavbar />
      </div>
      <main className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <section id="home">
          <Hero />
        </section>
        <Plan />
        <Cars />
        <Banner />
        <ChooseUS />
        <AboutSection />
        <TestimonialsSlider />
        <TeamSection />
        <Faq />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
