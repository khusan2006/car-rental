import { FC } from "react";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
const Navbar: FC = () => {
  const { loginWithRedirect, user, logout } = useAuth0();
  return (
    <header className="hidden lg:flex justify-between items-center pt-6 px-6">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="w-42 h-12" />
      </NavLink>
      <nav className="">
        <ul className="flex  gap-6 font-rubik text-[1.125rem] font-medium capitalize">
          <li>
            <NavLink className="hover:text-orange-600" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-orange-600" to="/about">
              about
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-orange-600" to="/models">
              vehicle models
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-orange-600" to="/testimonials">
              testimonials
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-orange-600" to="/team">
              our team
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-orange-600" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex">
        {user ? (
          <div className="flex items-center gap-2">
            <Button size={"lg"} onClick={() => logout()}>
              Log out
            </Button>
            <p className="font-rubik text-[1.125rem] font-medium capitalize">
              Welcome {user.nickname}!
            </p>
          </div>
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
    </header>
  );
};

export default Navbar;
