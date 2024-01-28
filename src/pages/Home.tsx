import Banner from "@/components/Banner";
import BookCar from "@/components/BookCar";
import Cars from "@/components/Cars";
import ChooseUS from "@/components/ChooseUS";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Testimonials from "@/components/Testimonials";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-[url(assets/hero-bg.png)] bg-no-repeat  min-h-[150vh] bg-right-top">
      <Navbar />
      <Hero />
      <BookCar />
      <Plan />
      <Cars />
      <Banner />
      <ChooseUS />
      <Testimonials />
      <Faq />
    </div>

  );
};

export default Home;
