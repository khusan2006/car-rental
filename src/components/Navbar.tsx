import { FC } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const Navbar: FC = () => {
  return (
    <header className="flex justify-between items-center pt-6 px-6">
      <img src={logo} alt="logo" className="w-42 h-12" />
      <nav>
        <ul className="flex gap-6 font-rubik font-medium capitalize">
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
        <Button variant={'link'} size={'lg'} className="font-bold">
            Sign in
        </Button>
        <Button size={'lg'}>
            Register
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
