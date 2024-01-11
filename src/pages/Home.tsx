import BookCar from "@/components/BookCar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="bg-[url(assets/hero-bg.png)] bg-no-repeat  min-h-[150vh] bg-right">
      <Navbar />
      <Hero />
      <BookCar />
    </div>
  );
};

export default Home;
