import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`flex relative lg:hidden justify-between py-4 px-8 sm:px-14 items-center`}
    >
      <img src={logo} alt="logo" className="w-42 h-12" />

      <Menu color="#000" onClick={() => setIsMenuOpen(true)} />
      <div
        className={`${
          isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        } transition-all fixed z-[100] h-screen w-screen left-0 top-0 flex flex-col items-center justify-center bg-white`}
      >
        <X
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10"
          size={"50px"}
        />
        <nav className="">
          <ul className="flex flex-col items-center mb-6 gap-6 font-rubik text-[1.125rem] font-medium capitalize">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">vehicle models</a>
            </li>
            <li>
              <a href="">testimonials</a>
            </li>
            <li>
              <a href="">our team</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <Button
            variant={"link"}
            size={"lg"}
            className="font-bold text-[1.125rem]"
          >
            Sign in
          </Button>
          <Button size={"lg"}>Register</Button>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
