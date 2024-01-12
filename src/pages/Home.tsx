import BookCar from "@/components/BookCar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-[url(assets/hero-bg.png)] bg-no-repeat  min-h-[150vh] bg-right-top">
      <Navbar />
      <Hero />
      <BookCar />
      <Plan />
    </div>

  );
};

export default Home;
