import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, user, logout } = useAuth0();
  const handleClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <header
      className={`flex relative lg:hidden justify-between py-4 px-8 sm:px-14 items-center`}
    >
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="w-42 h-12" />
      </NavLink>

      <Menu color="#000" onClick={() => setIsMenuOpen(true)} />
      <div
        className={`${
          isMenuOpen ? "translate-x-[0]" : "translate-x-[-100%]"
        } transition-all duration-500 fixed z-[100] h-screen w-screen left-0 top-0 flex flex-col items-center justify-center bg-white`}
      >
        <X
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10"
          size={"50px"}
        />
        <nav className="">
          <ul className="flex flex-col items-center mb-6 gap-6 font-rubik text-[1.125rem] font-medium capitalize">
            <li>
              <NavLink onClick={handleClick} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/models">
                vehicle models
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/testimonials">
                testimonials
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/team">
                our team
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleClick} to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex">
          {user ? (
            <>
              <Button size={"lg"} onClick={() => logout()}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant={"link"}
                size={"lg"}
                className="font-bold text-[1.125rem]"
                onClick={() => loginWithRedirect()}
              >
                Sign in
              </Button>
              <Button size={"lg"} onClick={() => loginWithRedirect()}>
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
